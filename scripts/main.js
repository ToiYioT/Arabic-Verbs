import { util } from "./util.js";
import { conjugator } from "./conjugator.js";
import { pronounsArabic, pronounsHebrew, pronounFunctions } from "./data.js";
import { future, past } from "./tenses.js";

const tenses = [future, past];
var zman;

// settings
const hideAnswers = true;
const numOfAnswers = 4;
const progressBarUpdateInterval = 20;
const revealAnswersAfter = 3000;

var numOfProgressBarUpdates = 0;
const progressBarMaxUpdates = 150;

// html elements
var answerHolders = [];
var correctIcons = [];
var incorrectIcons = [];
var answerSection;
var questionHolder;
var button;
var score;
var progressBar;

var progressBarTimer;

// logic variables 
var answerForms = [];
var answers = [];
var correctAnswer;
var numOfCorrectAnswers = 0;

var questionNumber = 0;
var currentQuestionParams;
var questionQueue = [];
var incorrectAnswer = false;

// debug
var container;
var horizontalContainer;


window.addEventListener('load', (event) => {

    questionHolder = document.getElementById("question");
    button = document.getElementById("next-button");
    score = document.getElementById("score");
    progressBar = document.getElementById("progress-bar");

    answerSection = document.getElementById("answer-section");
    container = document.getElementById("container");
    horizontalContainer = document.getElementById("hor-container");

    enableButton();

    for (let i = 0; i < numOfAnswers; i++) {
        answerHolders.push(document.getElementById("answer" + (i + 1)));
        correctIcons.push(document.getElementById("icon-correct" + (i + 1)));
        incorrectIcons.push(document.getElementById("icon-incorrect" + (i + 1)));
        answerHolders[i].addEventListener("click", answerClickHandler);
    }

    addRandomQuestionsToQueue(5);

    buttonHandler();
    updateScore();

    // debugShowConjugations(zman.forms.ihki,
    //     [zman.forms.ihki, zman.forms.iruh, zman.forms.ijib, zman.forms.ihibb]);
    // debugShowConjugationHebrew();
});

function setTense(tenseIndex) {
    zman = tenses[tenseIndex];
}

function buttonHandler() {
    clearInterval(progressBarTimer);

    if (!hideAnswers) {
        initQuestion();
    } else {

        if (!answerSection.classList.contains("hide")) {
            initQuestion();
        }
        answerSection.classList.toggle("hide");
        setButtonText();
    }

}

function setButtonText() {
    if (answerSection.classList.contains("hide")) {
        button.innerHTML = "הצג תשובות";

    } else {
        button.innerHTML = "בחרו באחת האופציות";
        disableButton();
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

    let tenseIndex = Math.floor(Math.random() * tenses.length);
    setTense(tenseIndex);

    let pronounIndex = Math.floor(Math.random() * pronounFunctions.length);
    let randomFormIndex = Math.floor(Math.random() * zman.formNames.length);

    let formName = zman.formNames[randomFormIndex];
    let randomWordIndex = Math.floor(Math.random() * zman.rootsArabic[formName].length);

    let random = {
        tenseIndex: tenseIndex,
        pronounIndex: pronounIndex,
        formIndex: randomFormIndex,
        wordIndex: randomWordIndex
    }

    return random;
}

function initQuestionFromParams(qParams) {

    resetQuestionState();

    setTense(qParams.tenseIndex);
    let pronounFunction = pronounFunctions[qParams.pronounIndex];
    createAnswerForms(qParams.formIndex, qParams.pronounIndex);

    let rootForm = answerForms[0];
    let formName = rootForm.formName;

    let rootArabic = zman.rootsArabic[formName][qParams.wordIndex];
    let rootHebrew = zman.rootsHebrew[formName][qParams.wordIndex];


    // extracting the hebrew word to conjugate (the first one)
    let firstWordEndingAt = util.getIndexOfFirstWordEnding(rootHebrew);
    if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;
    let firstWord = rootHebrew.substring(0, firstWordEndingAt);
    firstWord = util.substituteEndingLettersToNormal(firstWord);
    let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

    // conjugate the hebrew expression and view it
    let conjugatedHebrew = zman.hebConjugate[pronounFunction](firstWord);
    conjugatedHebrew = util.substituteLetterAtEndToEndingLetter(conjugatedHebrew);
    questionHolder.innerHTML = pronounsHebrew[qParams.pronounIndex] + " " +
        conjugatedHebrew + remainderOfTranslation + "<br/>";

    for (let i = 0; i < numOfAnswers; i++) {

        let conjugateTo = answerForms[i];
        conjugator.doProcessing(rootArabic, rootForm, conjugateTo);


        let answer = pronounsArabic[qParams.pronounIndex] + zman.answerPrefix
            + conjugator.getWord(...conjugateTo[pronounFunction]());


        answer = util.substituteLetterAtEndToEndingLetter(answer, true);
        answers.push(answer);
    }
    correctAnswer = answers[0];
    util.shuffle(answers);

    for (let i = 0; i < answerHolders.length; i++) {
        answerHolders[i].innerHTML = answers[i];
        answerHolders[i].classList.remove("correct");
        answerHolders[i].classList.remove("incorrect");
        answerHolders[i].classList.remove("faded");
    }
}

function resetQuestionState() {

    answers.length = 0;
    questionNumber++;
    questionAnswered = false;
    hideAllIcons();
    updateScore();
    startProgressBarAnimation();
}

function hideAllIcons() {
    for (let i = 0; i < 4; i++) {
        correctIcons[i].classList.add("hide");
        incorrectIcons[i].classList.add("hide");
    }
}

function startProgressBarAnimation() {
    numOfProgressBarUpdates = 0;
    progressBarTimer = setInterval(progressBarUpdate, progressBarUpdateInterval);
}

function progressBarUpdate() {

    numOfProgressBarUpdates++;
    progressBar.style.width = 100 * numOfProgressBarUpdates / progressBarMaxUpdates + "%";

    if (numOfProgressBarUpdates == progressBarMaxUpdates) {

        numOfProgressBarUpdates = 0;
        buttonHandler();
    }
}

var questionAnswered = false;
function answerClickHandler(event) {
    if (questionAnswered) return;
    questionAnswered = true;

    let holderAnswer = event.target.innerHTML;

    if (holderAnswer == correctAnswer) {
        event.target.classList.add("correct");

        for (let i = 0; i < answerHolders.length; i++) {
            if (answerHolders[i].innerHTML == correctAnswer) {
                correctIcons[i].classList.remove("hide");
            } else {
                answerHolders[i].classList.add("faded");
            }
        }
        numOfCorrectAnswers++;

    } else {

        event.target.classList.add("incorrect");
        incorrectAnswer = true;

        for (let i = 0; i < answerHolders.length; i++) {
            if (answerHolders[i].innerHTML == correctAnswer) {
                answerHolders[i].classList.add("correct");

            } else if (answerHolders[i].innerHTML != holderAnswer) {
                answerHolders[i].classList.add("faded");
            } else if (answerHolders[i].innerHTML == holderAnswer) {
                incorrectIcons[i].classList.remove("hide");

            }
        }
    }
    enableButton();
    button.innerHTML = "השאלה הבאה"
    updateScore();
}

function enableButton() {
    button.onclick = buttonHandler;
    button.classList.remove("faded");
}

function disableButton() {
    button.onclick = "";
    button.classList.add("faded");
}

function updateScore() {
    score.innerHTML = "שאלה מספר: " + questionNumber + ",    " +
        "תשובות נכונות: " + numOfCorrectAnswers;
}

function createAnswerForms(formNum, pronounNum) {

    let form = getFormFromNum(formNum);

    answerForms.length = 0;
    answerForms.push(form);
    answerForms.push(getFormFromNum(form.formsToDistractWith[pronounNum][0]));
    answerForms.push(getFormFromNum(form.formsToDistractWith[pronounNum][1]));
    answerForms.push(getFormFromNum(form.formsToDistractWith[pronounNum][2]));
}

function getFormFromNum(formNum) {
    let formName = zman.formNames[formNum];
    let form = zman.forms[formName];
    return form;
}


//// DEBUG CODE
//// DEBUG CODE

function debugShowConjugationHebrew() {
    loadDebugCols();

    for (let v = 0; v < 7; v++) {
        let whereToPutText = debugCols[v];

        let randomFormNum = Math.floor(Math.random() * zman.formNames.length);
        let formName = zman.formNames[randomFormNum];
        let randomWordNum = Math.floor(Math.random() * zman.rootsHebrew[formName].length);
        let rootHebrew = zman.rootsHebrew[formName][randomWordNum];
        // rootHebrew = "ילך לאיבוד"

        let firstWordEndingAt = util.getIndexOfFirstWordEnding(rootHebrew);
        if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;

        let firstWord = rootHebrew.substring(0, firstWordEndingAt);
        firstWord = util.substituteEndingLettersToNormal(firstWord);
        let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

        for (let i = 0; i < 8; i++) {
            let pronounFunc = pronounFunctions[i];
            let conjugatedWord = zman.hebConjugate[pronounFunc](firstWord);
            conjugatedWord = util.substituteLetterAtEndToEndingLetter(conjugatedWord);

            whereToPutText.innerHTML += pronounsHebrew[i] + " " +
                conjugatedWord + remainderOfTranslation + "<br/>";
        }
    }
}

function debugShowConjugations(rootForm, conjugateToArray) {
    loadDebugCols();

    // to get random root:
    let formName = rootForm.formName;
    let randomWordNum = Math.floor(Math.random() * zman.rootsArabic[formName].length);
    let root = zman.rootsArabic[formName][randomWordNum];

    // // to set specific root and forms:
    // let root = "כּבּّ";
    // rootForm = forms.ihutt;
    // let conjugateTo = forms.ihutt;

    for (let c = 0; c < conjugateToArray.length; c++) {
        let conjugateTo = conjugateToArray[c];
        let whereToPutText = debugCols[c];

        for (let i = 0; i < pronounFunctions.length; i++) {
            let pronounFunction = pronounFunctions[i];

            conjugator.doProcessing(root, rootForm, conjugateTo);
            whereToPutText.innerHTML += pronounsArabic[i] +
                " " + conjugator.getWord(...conjugateTo[pronounFunction]()) + "</br>";
        }
    }
}

var debugCols = [];
function loadDebugCols() {

    container.style.display = "none";
    horizontalContainer.style.display = "flex";
    for (let i = 0; i < 7; i++) {
        debugCols.push(document.getElementById("col" + (i + 1)));
    }
}