import { util } from "./util.js";
import { conjugator } from "./conjugator.js";
import { tenses } from "./tenses.js";
import { syllables } from "./syllables.js";
import { pronounsConst as pronouns } from "./data.js";

let questionDispenser;
let mainButton;
let playSound;
let questionHolder;
let answerSection;

let typeSection;
let answerBox;
let syllablePool;

let forms;
let tense;
let correctAnswer;

let correctColor, incorrectColor;
let correctIcon, incorrectIcon;
let answerSubmited = false;

const typeSound = new Audio('./sounds/type.wav');
const deleteSound = new Audio('./sounds/delete.wav');

function init(qDispenser, button, playSoundFunction, formsRef) {
    questionDispenser = qDispenser;
    mainButton = button;
    playSound = playSoundFunction;
    forms = formsRef;

    questionHolder = document.getElementById("question");
    answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = "";

    typeSection = util.createElement(answerSection, "div", "type-section");
    typeSection.style.display = "none";
    answerBox = util.createElement(typeSection, "div", "answer-box");
    syllablePool = util.createElement(typeSection, "div", "syllable-pool");

    correctIcon = util.createElement(null, "img", "icon-syllables");
    correctIcon.src = "icons/correct.png";
    incorrectIcon = util.createElement(null, "img", "icon-syllables");
    incorrectIcon.src = "icons/incorrect.png";

    correctColor = getComputedStyle(typeSection).getPropertyValue("--correct-answer-color");
    incorrectColor = getComputedStyle(typeSection).getPropertyValue("--incorrect-answer-color");
}


function initQuestionFromParams(qParams) {

    typeSection.style.display = "flex";
    answerSubmited = false;
    const form = forms[qParams.root.form];
    tense = tenses[form.tense];
    const rootArabic = qParams.root.arabic;

    correctAnswer = conjugate(rootArabic, form, qParams.pronoun);

    answerBox.innerHTML = "";
    syllablePool.innerHTML = "";

    addAnswerPrefix(answerBox, qParams);
    createButtonsFromSyllables(getAllSyllables(rootArabic, form));
}

function addAnswerPrefix(addToElement, qParams) {

    const answerPrefixElement = util.createElement(null, "div", "answer-prefix");

    const answerPrefix = util.postProcess(qParams.pronoun.arabic + tense.answerPrefix);
    const answerPrefixContent = document.createTextNode(answerPrefix);
    answerPrefixElement.appendChild(answerPrefixContent);
    addToElement.appendChild(answerPrefixElement);
}

function getAllSyllables(rootArabic, rootForm) {

    const allSyllables = [];
    for (let i = 0; i < pronouns.length; i++) {
        const pronoun = pronouns[i];

        const arabicConjugated = conjugate(rootArabic, rootForm, pronoun, false);
        const conjugatedSyllables = syllables.separateIntoSyllables(arabicConjugated, false);
        allSyllables.push(...conjugatedSyllables);
    }
    const processedSyllables = allSyllables.map((n) => util.postProcess(n));
    return [...new Set(util.shuffle(processedSyllables))];
}

function createButtonsFromSyllables(syllables) {

    for (let i = 0; i < syllables.length; i++) {

        const syllableButton = util.createElement(syllablePool, "div", "syllable-button");
        const buttonContent = document.createTextNode(syllables[i]);
        syllableButton.appendChild(buttonContent);
        syllableButton.onclick = onSyllablePoolButtonClick;
    }
}

function onSyllablePoolButtonClick() {
    if (answerSubmited) return;

    typeSound.src = "./sounds/type.wav";
    typeSound.play();

    const clonedButton = this.cloneNode(true);
    clonedButton.onclick = onAnswerBoxButtonClick;
    answerBox.appendChild(clonedButton);
    mainButton.setSubmitAnswer(onSubmitAnswer);
}

function onAnswerBoxButtonClick() {
    if (answerSubmited) return;

    deleteSound.src = "./sounds/delete.wav";
    deleteSound.play();
    this.parentNode.removeChild(this);
}

function onSubmitAnswer() {
    answerSubmited = true;
    let answerInBox = "";
    for (let i = 0; i < answerBox.children.length; i++) {
        const child = answerBox.children[i];
        if (child.className != "syllable-button") continue;
        answerInBox += child.textContent;
    }
    const answerIsCorrect = correctAnswer == answerInBox;

    if (answerIsCorrect) {
        questionDispenser.registerCorrectAnswer(
            questionHolder.innerHTML,
            correctAnswer,
            answerInBox);
        playSound("correct");
        answerBox.appendChild(correctIcon);
        setAnswerBoxButtonsToColor("green");
    } else {
        questionDispenser.registerIncorrectAnswer(
            questionHolder.innerHTML,
            correctAnswer,
            answerInBox);
        playSound("incorrect");
        answerBox.appendChild(incorrectIcon);
        appendCorrectAnswer(answerBox);
        setAnswerBoxButtonsToColor("red");
    }

    if (questionDispenser.isQuizMode() && questionDispenser.isLastQuestion()) {
        mainButton.setEndQuiz();

    } else {
        mainButton.setNextQuestion();
    }
}

function setAnswerBoxButtonsToColor(color) {

    for (let i = 0; i < answerBox.children.length; i++) {
        const child = answerBox.children[i];
        if (child.className != "syllable-button") continue;

        child.style.backgroundColor = color == "green" ? correctColor : incorrectColor;
    }
}

function appendCorrectAnswer(e) {
    const correctAnswerElement = util.createElement(null, "div", "correct-answer-syllable");

    const answerPrefix = "???????????? ????????????: ";
    const correctAnswerContent = document.createTextNode(answerPrefix + correctAnswer);
    correctAnswerElement.appendChild(correctAnswerContent);
    e.appendChild(correctAnswerElement);
}


function conjugate(rootArabic, conjugationForm, pronoun, postProcess = true) {
    conjugator.rootProcessing(rootArabic, conjugationForm, conjugationForm);
    let output = conjugator.getWord(conjugationForm[pronoun.name].template);
    output = util.substituteLetterAtEndToEndingLetter(output, true);

    if (postProcess) output = util.postProcess(output);
    return output;
}

function onTimerEnded() {
    mainButton.setChooseSyllable();
}

function hideDisplay() {
    typeSection.style.display = "none";
}

export const typeQuiz = {
    init,
    initQuestionFromParams,
    onTimerEnded,
    hideDisplay
}