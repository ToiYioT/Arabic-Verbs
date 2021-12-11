import { util } from "./util.js";
import { debug } from "./debug.js";
import { conjugator } from "./conjugator.js";
import { pronounsConst, filterRoots } from "./data.js";
import { forms, tenses } from "./tenses.js";
import { getConfuseType, getFilteringParams } from "./urlParams.js";
import { AnswerButton, Label, MainButton, Checkbox } from "./views.js";
import { questionDispenser } from "./question-dispenser.js"

var tense;
var roots;
var pronouns = pronounsConst;

// settings
var hideAnswers = true;
const totalNumOfQuestions = 2;
const numOfAnswers = 4;
const progressBarUpdateInterval = 20;

var numOfProgressBarUpdates = 0;
const progressBarMaxUpdates = 150;

// html elements
var answerButtons = [];
var answerSection;
var questionHolder;
var button;
var score;
var progressBar;

var quizSummarySection;
var summaryTitle, summaryScore, summaryMistakes;

var settingsWindow;
var checkboxTimer;

// logic variables 
var correctAnswer;
var progressBarTimer;
var getAnswersFunction;

// audio
const soundCorrect = new Audio('correct.mp3');
const soundIncorrect = new Audio('incorrect.mp3');
const soundFinish = new Audio('finish.mp3');

window.addEventListener('load', (event) => {

    let filteringParams = getFilteringParams();
    roots = filterRoots(filteringParams);
    setConfuseType();

    questionHolder = document.getElementById("question");
    quizSummarySection = document.getElementById("quiz-summary-section");
    summaryTitle = document.getElementById("summary-title");
    summaryScore = document.getElementById("summary-score");
    summaryMistakes = document.getElementById("summary-mistakes");

    button = new MainButton("main-button", buttonHandler, showSummaryScreen);
    score = new Label("score");
    progressBar = document.getElementById("progress-bar");

    answerSection = document.getElementById("answer-section");

    settingsWindow = document.getElementsByClassName("settings-overlay")[0];
    document.getElementsByClassName("cog")[0].onclick = openSettingsWindow;
    document.getElementsByClassName("x-button")[0].onclick = closeSettingsWindow;
    checkboxTimer = new Checkbox("checkbox-timer");


    for (let i = 0; i < numOfAnswers; i++) {
        answerButtons.push(new AnswerButton(i + 1, answerClickHandler));
    }

    resetGame();
    // debug.showConjugations(roots, pronouns, conjugator, forms);
    // debug.showConjugationHebrew(roots, pronouns, tenses, forms);
});

function setConfuseType() {
    let confuseType = getConfuseType();

    switch (confuseType) {
        case "form":
            getAnswersFunction = getAnswersConfuseWithForms;
            break;
        case "pronoun":
            getAnswersFunction = getAnswersConfuseWithPronouns;
            break;
        case "mixed":
            getAnswersFunction = getAnswersAlternateConfuse;
            break;
        default:
            getAnswersFunction = getAnswersConfuseWithForms;
    }
}

function setTense(form) {
    tense = tenses[form.tense];
}

function buttonHandler() {

    if (!hideAnswers) {
        initQuestion();
        button.setChooseAnswer();
        hideAllIcons();

    } else {
        if (button.state == "show-answers") {
            cancelTimerAndShowQuestion();

        } else if (button.state == "next-question") {
            hideAllIcons();
            answerSection.classList.add("hide");

            startProgressBarAnimation();
            button.setShowAnswers();
            initQuestion();
        }
    }
}

function showSummaryScreen() {

    soundFinish.play();
    let quizLength = questionDispenser.getQuizLength();
    let wrongNum = questionDispenser.getNumOfWrongAnswers();
    let rightNum = quizLength - wrongNum;
    let percentageOfRight = Math.round(100 * rightNum / quizLength);

    score.setText("");
    progressBar.style.width = "100%";
    answerSection.classList.add("hide");
    button.setRestartQuiz(resetGame);

    quizSummarySection.style.display = "flex";
    questionHolder.style.display = "none";
    answerSection.style.display = "none";


    summaryTitle.innerHTML = `ענית נכון על ${rightNum} שאלות מתוך ${quizLength}`;
    summaryScore.innerHTML = `ציון: ${percentageOfRight}%`;
}

function initQuestion() {

    questionDispenser.handleNewQuestion();
    let currentQuestion = questionDispenser.getCurrentQuestion();

    initQuestionFromParams(currentQuestion);
}

function initQuestionFromParams(qParams) {
    questionAnswered = false;
    updateScore();

    let pronoun = qParams.pronoun;
    // first one is the correct root form:
    let answerForms = createAnswerForms(qParams);
    setTense(answerForms[0]);

    conjugateHebrew(qParams.root.hebrew, pronoun);
    let answers = getAnswersFunction(qParams.root.arabic, answerForms, pronoun);

    correctAnswer = answers[0];
    util.shuffle(answers);
    setAnswersToButtons(answers);
}

function getAnswersConfuseWithForms(rootArabic, answerForms, pronoun) {
    let answers = [];
    let rootForm = answerForms[0];

    for (let i = 0; i < numOfAnswers; i++) {
        let conjugateTo = answerForms[i];
        conjugator.rootProcessing(rootArabic, rootForm, conjugateTo);

        let answer = pronoun.arabic + tense.answerPrefix
            + conjugator.getWord(conjugateTo[pronoun.name].template);

        answer = util.substituteLetterAtEndToEndingLetter(answer, true);
        answer = util.postProcess(answer);
        answers.push(answer);
    }

    if (tense.confuseWithPronouns && pronoun.confusingPronoun != null) {
        answers = substituteLastAnswerWithConfusingPronoun(
            answers, pronoun, rootArabic, rootForm);
    }
    return answers;
}

function getAnswersAlternateConfuse(rootArabic, answerForms, correctPronoun) {
    if (Math.random() > 0.5) {
        return getAnswersConfuseWithForms(rootArabic, answerForms, correctPronoun);
    } else {
        return getAnswersConfuseWithPronouns(rootArabic, answerForms, correctPronoun);
    }
}

function getAnswersConfuseWithPronouns(rootArabic, answerForms, correctPronoun) {
    let answers = [];
    let correctAnswer;
    let confusingPronounAnswer = null;
    let confusingPronoun = correctPronoun.confusingPronoun;
    let rootForm = answerForms[0];

    pronouns = util.shuffle(pronouns);
    conjugator.rootProcessing(rootArabic, rootForm, rootForm);

    for (let i = 0; i < pronouns.length; i++) {

        let answer = correctPronoun.arabic + tense.answerPrefix
            + conjugator.getWord(rootForm[pronouns[i].name].template);

        answer = util.substituteLetterAtEndToEndingLetter(answer, true);
        answer = util.postProcess(answer);

        answers.push(answer);
        if (pronouns[i] == correctPronoun) {
            correctAnswer = answer;
        }
        if (tense.confuseWithPronouns && pronouns[i] == confusingPronoun) {
            confusingPronounAnswer = answer;
        }
    }
    answers = [...new Set(answers)]; // leave only unique answers
    answers = answers.filter(item => item !== correctAnswer); // remove correct ones
    answers = answers.filter(item => item !== confusingPronounAnswer); // remove confusing pronoun
    if (confusingPronounAnswer != null) {
        answers.unshift(confusingPronounAnswer); // add back the confusingPronoun answer
    }
    answers.unshift(correctAnswer); // add back the correct one at the start of the array
    answers.length = 4;
    return answers;
}

function substituteLastAnswerWithConfusingPronoun(
    answers, pronoun, rootArabic, rootForm) {
    let confusingPronoun = pronoun.confusingPronoun;
    conjugator.rootProcessing(rootArabic, rootForm, rootForm);

    let answer = pronoun.arabic + tense.answerPrefix
        + conjugator.getWord(rootForm[confusingPronoun.name].template);
    answer = util.substituteLetterAtEndToEndingLetter(answer, true);
    answer = util.postProcess(answer);
    answers[answers.length - 1] = answer;
    return answers;
}

function conjugateHebrew(rootHebrew, pronoun) {
    // extracting the hebrew word to conjugate (the first one)
    let firstWordEndingAt = util.getIndexOfFirstWordEnding(rootHebrew);
    if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;
    let firstWord = rootHebrew.substring(0, firstWordEndingAt);
    firstWord = util.substituteEndingLettersToNormal(firstWord);
    let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

    // conjugate the hebrew expression and view it
    let conjugatedHebrew = tense.hebConjugate[pronoun.name](firstWord);
    conjugatedHebrew = util.substituteLetterAtEndToEndingLetter(conjugatedHebrew);
    questionHolder.innerHTML = pronoun.hebrew + " " +
        conjugatedHebrew + remainderOfTranslation;

    // add the gender in parentheses to the question (זכר/נקבה) only when applies:
    if (tense.specifyPronounGender && pronoun.gender != ""
        ||
        (tense == tenses.participle && pronoun.name.includes("Ana")
            && rootHebrew.charAt(rootHebrew.length - 1) == "ה")) {

        questionHolder.innerHTML += " ❨" + pronoun.gender + "❩" + "<br/>";
    }
}

function setAnswersToButtons(answers) {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].setAnswer(answers[i]);
        answerButtons[i].removeStyles();
    }
}

function hideAllIcons() {
    for (let i = 0; i < 4; i++) {
        answerButtons[i].setNoIcons();
    }
}

function startProgressBarAnimation() {

    clearInterval(progressBarTimer);
    numOfProgressBarUpdates = 0;
    progressBarTimer = setInterval(progressBarUpdate, progressBarUpdateInterval);
}

function progressBarUpdate() {

    numOfProgressBarUpdates++;
    progressBar.style.width = 100 * numOfProgressBarUpdates / progressBarMaxUpdates + "%";

    if (numOfProgressBarUpdates == progressBarMaxUpdates) {
        cancelTimerAndShowQuestion();
    }
}

function cancelTimerAndShowQuestion() {
    clearInterval(progressBarTimer);
    progressBar.style.width = "100%";
    progressBarTimer = false;
    answerSection.classList.remove("hide");
    button.setChooseAnswer();
}

var questionAnswered = false;
function answerClickHandler(clickedButton) {

    if (questionAnswered) return;
    questionAnswered = true;

    for (let i = 0; i < answerButtons.length; i++) {

        if (answerButtons[i].answer == correctAnswer) {
            answerButtons[i].setCorrect();

            if (clickedButton == answerButtons[i]) {
                questionDispenser.registerCorrectAnswer();
                soundCorrect.play();
            }
        } else {

            if (clickedButton == answerButtons[i]) {
                answerButtons[i].setIncorrect();
                questionDispenser.registerIncorrectAnswer();
                soundIncorrect.play();

            } else {
                answerButtons[i].setFaded();
            }
        }
    }

    if (questionDispenser.isQuizMode() && questionDispenser.isLastQuestion()) {
        button.setEndQuiz();

    } else {
        button.setNextQuestion();
    }

    updateScore();
}

function updateScore() {

    let titleText = questionDispenser.getScoreTitleText();
    score.setText(titleText);
}

function createAnswerForms(qParams) {

    let form = forms[qParams.root.form];
    let pronoun = qParams.pronoun;

    let answerForms = [];

    answerForms.push(form);
    answerForms.push(forms[form[pronoun.name].distractingForms[0]]);
    answerForms.push(forms[form[pronoun.name].distractingForms[1]]);
    answerForms.push(forms[form[pronoun.name].distractingForms[2]]);

    return answerForms;
}

function openSettingsWindow() {
    settingsWindow.style.visibility = "visible";
}
function closeSettingsWindow() {
    settingsWindow.style.visibility = "hidden";

    if (checkboxTimer.isChanged()) {
        hideAnswers = checkboxTimer.checked();
        if (!hideAnswers) {
            clearInterval(progressBarTimer);
            progressBar.style.width = "100%";
        }
        resetGame();
    }
}

function resetGame() {
    questionDispenser.resetGame("quiz", roots, pronouns, totalNumOfQuestions);

    quizSummarySection.style.display = "none";
    questionHolder.style.display = "flex";
    answerSection.style.display = "flex";

    if (hideAnswers) {
        answerSection.classList.add("hide");
        startProgressBarAnimation();
        button.setShowAnswers();
    } else {
        answerSection.classList.remove("hide");
        button.setChooseAnswer();
    }

    hideAllIcons();
    initQuestion();
    updateScore();
}