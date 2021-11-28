import { util } from "./util.js";
import { conjugator } from "./conjugator.js";
import { pronouns, filterRoots, formNamesPast, formNamesFuture } from "./data.js";
import { forms, future, past } from "./tenses.js";
import { AnswerButton, Label, MainButton, Checkbox } from "./views.js";

let roots = filterRoots(["katab"], [""]);
var tense;

// settings
const hideAnswers = true;
const numOfAnswers = 4;
const progressBarUpdateInterval = 20;
const revealAnswersAfter = 3000;

var numOfProgressBarUpdates = 0;
const progressBarMaxUpdates = 350;

// html elements
var answerButtons = [];
var answerSection;
var questionHolder;
var button;
var score;
var progressBar;

var settingsWindow;
var checkboxPast;
var checkboxFuture;


// logic variables 
var answerForms = [];
var correctAnswer;
var numOfCorrectAnswers = 0;

var questionNumber = 0;
var currentQuestionParams;
var questionQueue = [];
var incorrectAnswer = false;
var progressBarTimer;

// debug
var container;
var debugContainer;


window.addEventListener('load', (event) => {

    container = document.getElementById("container");
    questionHolder = document.getElementById("question");
    button = new MainButton("main-button", buttonHandler);

    score = new Label("score");
    progressBar = document.getElementById("progress-bar");

    answerSection = document.getElementById("answer-section");
    debugContainer = document.getElementById("debug-container");

    settingsWindow = document.getElementsByClassName("settings-overlay")[0];
    document.getElementsByClassName("cog")[0].onclick = openSettingsWindow;
    document.getElementsByClassName("x-button")[0].onclick = closeSettingsWindow;
    checkboxFuture = new Checkbox("checkbox-future");
    checkboxPast = new Checkbox("checkbox-past");
    document.getElementById("x-button").addEventListener("click", onExitSettings);


    for (let i = 0; i < numOfAnswers; i++) {
        answerButtons.push(new AnswerButton(i + 1, answerClickHandler));
    }

    resetGame();
    // debugShowConjugations();
    // debugShowConjugationHebrew();
});

function setTense(form) {
    if (form.tense == "future") {
        tense = future;
    }
    else if (form.tense == "past") {
        tense = past;
    }
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
            startProgressBarAnimation();
            answerSection.classList.add("hide");
            button.setShowAnswers();
            initQuestion();
        }
    }
}

function initQuestion() {

    if (incorrectAnswer) {
        incorrectAnswer = false;
        questionQueue.push(currentQuestionParams);

    } else {
        addRandomQuestionsToQueue(1);
    }

    currentQuestionParams = questionQueue[questionNumber];
    initQuestionFromParams(currentQuestionParams);
}

function addRandomQuestionsToQueue(numberOfQuestionsToAdd) {

    for (let i = 0; i < numberOfQuestionsToAdd; i++) {
        let randomParams = generateRandomQuestionParams();
        questionQueue.push(randomParams);
    }
}

function generateRandomQuestionParams() {

    let randomRootIndex = Math.floor(Math.random() * roots.length);
    let pronounIndex = Math.floor(Math.random() * pronouns.length);

    let randomQuestionParams = {
        root: roots[randomRootIndex],
        pronoun: pronouns[pronounIndex]
    }

    return randomQuestionParams;
}

function initQuestionFromParams(qParams) {

    resetQuestionState();

    let pronoun = qParams.pronoun;
    createAnswerForms(qParams);

    let rootForm = answerForms[0];
    setTense(rootForm);

    let rootArabic = qParams.root.arabic;
    let rootHebrew = qParams.root.hebrew;

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
        conjugatedHebrew + remainderOfTranslation + "<br/>";

    let answers = [];
    for (let i = 0; i < numOfAnswers; i++) {

        let conjugateTo = answerForms[i];

        conjugator.rootProcessing(rootArabic, rootForm, conjugateTo);

        let answer = pronoun.arabic + tense.answerPrefix
            + conjugator.getWord(conjugateTo[pronoun.name].template);

        answer = util.substituteLetterAtEndToEndingLetter(answer, true);
        answer = util.postProcess(answer);
        answers.push(answer);
    }
    correctAnswer = answers[0];
    util.shuffle(answers);
    setAnswersToButtons(answers);
}

function setAnswersToButtons(answers) {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].setAnswer(answers[i]);
        answerButtons[i].removeStyles();
    }
}

function resetQuestionState() {

    questionNumber++;
    questionAnswered = false;
    updateScore();
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
                numOfCorrectAnswers++;
            }
        } else {

            if (clickedButton == answerButtons[i]) {
                answerButtons[i].setIncorrect();
                incorrectAnswer = true;

            } else {
                answerButtons[i].setFaded();
            }
        }
    }
    button.setNextQuestion();
    updateScore();
}

function updateScore() {
    score.setText(
        "שאלה מספר: " + questionNumber + ",    " +
        "תשובות נכונות: " + numOfCorrectAnswers
    );
}

function createAnswerForms(qParams) {

    let form = forms[qParams.root.form];
    let pronoun = qParams.pronoun;

    answerForms.length = 0;
    answerForms.push(form);
    answerForms.push(forms[form[pronoun.name].distractingForms[0]]);
    answerForms.push(forms[form[pronoun.name].distractingForms[1]]);
    answerForms.push(forms[form[pronoun.name].distractingForms[2]]);
}

function openSettingsWindow() {
    settingsWindow.style.visibility = "visible";
}
function closeSettingsWindow() {
    settingsWindow.style.visibility = "hidden";
}

function onExitSettings() {
    if (checkboxFuture.isChanged() || checkboxPast.isChanged()) {
        changeTenses();
    }
}
function changeTenses() {

    let newForms = [];
    if (checkboxPast.checked()) {
        newForms.push(...formNamesPast);
    }
    if (checkboxFuture.checked()) {
        newForms.push(...formNamesFuture);
    }

    roots = filterRoots(newForms, [""]);
    resetGame();
}

function resetGame() {
    questionQueue.length = 0;
    addRandomQuestionsToQueue(5);
    incorrectAnswer = false;

    numOfCorrectAnswers = 0;
    questionNumber = 0;

    if (hideAnswers) {
        answerSection.classList.add("hide");
        startProgressBarAnimation();
        button.setShowAnswers();
    } else {
        button.setChooseAnswer();
    }

    hideAllIcons();
    initQuestion();

    updateScore();
}


//// DEBUG CODE
//// DEBUG CODE

function debugShowConjugationHebrew() {
    loadDebugCols();

    for (let v = 0; v < 7; v++) {
        let whereToPutText = debugCols[v];

        let randomFormNum = Math.floor(Math.random() * tense.formNames.length);
        let formName = tense.formNames[randomFormNum];
        let randomWordNum = Math.floor(Math.random() * tense.rootsHebrew[formName].length);
        let rootHebrew = tense.rootsHebrew[formName][randomWordNum];
        // rootHebrew = "ילך לאיבוד"

        let firstWordEndingAt = util.getIndexOfFirstWordEnding(rootHebrew);
        if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;

        let firstWord = rootHebrew.substring(0, firstWordEndingAt);
        firstWord = util.substituteEndingLettersToNormal(firstWord);
        let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

        for (let i = 0; i < 8; i++) {
            let pronoun = pronouns[i];
            let conjugatedWord = tense.hebConjugate[pronoun.name](firstWord);
            conjugatedWord = util.substituteLetterAtEndToEndingLetter(conjugatedWord);

            whereToPutText.innerHTML += pronoun.hebrew[i] + " " +
                conjugatedWord + remainderOfTranslation + "<br/>";
        }
    }
}

function debugShowConjugations() {
    loadDebugCols();

    let rootNum = Math.floor(Math.random() * roots.length);
    let root = roots[rootNum].arabic;
    let formName = roots[rootNum].form;

    let rootForm = forms[formName];
    console.log(rootForm);
    let conjugateToArray = [
        rootForm,
        forms[rootForm.Ana.distractingForms[0]],
        forms[rootForm.Ana.distractingForms[1]],
        forms[rootForm.Ana.distractingForms[2]],
    ]

    // // to set specific root and forms:
    // let root = "ח׳לץ";
    // rootForm = forms.ihutt;
    // let conjugateTo = forms.ihutt;

    for (let c = 0; c < conjugateToArray.length; c++) {
        let conjugateTo = conjugateToArray[c];
        let whereToPutText = debugCols[c];


        for (let i = 0; i < pronouns.length; i++) {

            conjugator.rootProcessing(root, rootForm, conjugateTo);
            let pronoun = pronouns[i];

            let output = pronoun.arabic + " " +
                conjugator.getWord(conjugateTo[pronoun.name].template);
            output = util.substituteLetterAtEndToEndingLetter(output, true);
            output = util.postProcess(output);

            whereToPutText.innerHTML += output + "</br>";
        }
    }
}

var debugCols = [];
function loadDebugCols() {

    container.style.display = "none";
    debugContainer.style.display = "flex";
    for (let i = 0; i < 7; i++) {
        debugCols.push(document.getElementById("col" + (i + 1)));
    }
}