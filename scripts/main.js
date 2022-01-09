import { util } from "./util.js";
import { debug } from "./debug.js";
import { pronounsConst, filterRoots } from "./data.js";
import { tenses, forms } from "./tenses.js";
import { getFilteringParams } from "./urlParams.js";
import { Label, MainButton, Checkbox } from "./views.js";
import { questionDispenser } from "./question-dispenser.js"
import { chooseQuiz } from "./choose-quiz.js";
import { typeQuiz } from "./type-quiz.js";

var tense;
var roots;
var pronouns = pronounsConst;

// settings
var hideAnswers = true;
const progressBarUpdateInterval = 20;

var numOfProgressBarUpdates = 0;
const progressBarMaxUpdates = 150;

// html elements
var questionHolder;
var mainButton;
var score;
var progressBar;
let answerSection;

var quizSummarySection;
var summaryTitle, summaryScore, summaryMistakes;

var settingsWindow;
var checkboxTimer;

// logic variables 
var progressBarTimer;

// audio
const soundCorrect = new Audio('./sounds/correct.mp3');
const soundIncorrect = new Audio('./sounds/incorrect.mp3');
const soundFinish = new Audio('./sounds/finish.mp3');


// new restructuring:
let currentQuestionEngine = typeQuiz;

window.addEventListener('load', (event) => {

    let filteringParams = getFilteringParams();
    roots = filterRoots(filteringParams);

    questionHolder = document.getElementById("question");
    quizSummarySection = document.getElementById("quiz-summary-section");
    summaryTitle = document.getElementById("summary-title");
    summaryScore = document.getElementById("summary-score");
    summaryMistakes = document.getElementById("summary-mistakes");

    mainButton = new MainButton("main-button", buttonHandler, showSummaryScreen);
    score = new Label("score");
    progressBar = document.getElementById("progress-bar");

    currentQuestionEngine.init(questionDispenser, mainButton, playSound, updateScore);

    answerSection = document.getElementById("answer-section");

    settingsWindow = document.getElementsByClassName("settings-overlay")[0];
    document.getElementsByClassName("cog")[0].onclick = openSettingsWindow;
    document.getElementsByClassName("x-button")[0].onclick = closeSettingsWindow;
    checkboxTimer = new Checkbox("checkbox-timer");

    resetGame();
    // debug.showConjugations(roots, pronouns, conjugator, forms);
    // debug.showConjugationHebrew(roots, pronouns, tenses, forms);
});



function buttonHandler() {

    if (!hideAnswers) {
        initQuestion();
        mainButton.setChooseAnswer();

    } else {
        if (mainButton.state == "show-answers") {
            cancelTimerAndShowQuestion();

        } else if (mainButton.state == "next-question") {
            answerSection.classList.add("hide");

            startProgressBarAnimation();
            mainButton.setShowAnswers();
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
    mainButton.setRestartQuiz(resetGame);

    quizSummarySection.style.display = "flex";
    questionHolder.style.display = "none";
    answerSection.style.display = "none";

    summaryMistakes.innerHTML = questionDispenser.getSummary();


    summaryTitle.innerHTML = `ענית נכון על ${rightNum} שאלות מתוך ${quizLength}`;
    summaryScore.innerHTML = `ציון: ${percentageOfRight}%`;
}

function initQuestion() {

    soundFinish.src = "./sounds/finish.mp3";
    soundIncorrect.src = "./sounds/incorrect.mp3";
    soundCorrect.src = "./sounds/correct.mp3";
    updateScore();

    questionDispenser.handleNewQuestion();
    const qParams = questionDispenser.getCurrentQuestion();
    setTense(qParams);
    conjugateHebrew(qParams.root.hebrew, qParams.pronoun);

    currentQuestionEngine.initQuestionFromParams(qParams);
}

function playSound(state) {
    if (state == "correct") {
        soundCorrect.play();

    } else if (state = "incorrect") {
        soundIncorrect.play();
    }
}

function setTense(qParams) {
    const form = forms[qParams.root.form];
    tense = tenses[form.tense];
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

        questionHolder.innerHTML += " (" + pronoun.gender + ")";
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
    currentQuestionEngine.onTimerEnded();
}


function updateScore() {

    let titleText = questionDispenser.getScoreTitleText();
    score.setText(titleText);
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
    questionDispenser.resetGame("quiz", roots, pronouns);

    quizSummarySection.style.display = "none";
    questionHolder.style.display = "flex";
    answerSection.style.display = "flex";

    if (hideAnswers) {
        answerSection.classList.add("hide");
        startProgressBarAnimation();
        mainButton.setShowAnswers();
    } else {
        answerSection.classList.remove("hide");
        mainButton.setChooseAnswer();
    }

    initQuestion();
    updateScore();
}