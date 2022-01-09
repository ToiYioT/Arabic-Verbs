import { util } from "./util.js";
import { conjugator } from "./conjugator.js";
import { forms, tenses } from "./tenses.js";
import { syllables } from "./syllables.js";
import { pronounsConst as pronouns } from "./data.js";

let questionDispenser;
let mainButton;
let playSound;
let updateScore;
let questionHolder;
let answerSection;

let typeSection;
let answerBox;
let syllablePool;

let tense;
let correctAnswer;

let correctIcon, incorrectIcon;
let answerSubmited = false;

function init(qDispenser, button, playSoundFunction, updateScoreFunction) {
    questionDispenser = qDispenser;
    mainButton = button;
    playSound = playSoundFunction;
    updateScore = updateScoreFunction;

    questionHolder = document.getElementById("question");
    answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = "";

    typeSection = createElement(answerSection, "div", "type-section");
    answerBox = createElement(typeSection, "div", "answer-box");
    syllablePool = createElement(typeSection, "div", "syllable-pool");

    correctIcon = createElement(null, "img", "icon-syllables");
    correctIcon.src = "icons/correct.png";
    incorrectIcon = createElement(null, "img", "icon-syllables");
    incorrectIcon.src = "icons/incorrect.png";
}


function createElement(parent, type, classToAdd) {
    const newElement = document.createElement(type);
    newElement.classList.add(classToAdd)
    if (parent) parent.appendChild(newElement);
    return newElement;
}

function initQuestionFromParams(qParams) {

    answerSubmited = false;
    updateScore();
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

    const answerPrefixElement = createElement(null, "div", "answer-prefix");

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

        const syllableButton = createElement(syllablePool, "div", "syllable-button");
        const buttonContent = document.createTextNode(syllables[i]);
        syllableButton.appendChild(buttonContent);
        syllableButton.onclick = onSyllablePoolButtonClick;
    }
}

function onSyllablePoolButtonClick() {
    if (answerSubmited) return;
    this.parentNode.removeChild(this);
    this.onclick = onAnswerBoxButtonClick;
    answerBox.appendChild(this);
    mainButton.setSubmitAnswer(onSubmitAnswer);
}

function onAnswerBoxButtonClick() {
    if (answerSubmited) return;
    this.parentNode.removeChild(this);
    this.onclick = onSyllablePoolButtonClick;
    syllablePool.appendChild(this);
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
    } else {
        questionDispenser.registerIncorrectAnswer(
            questionHolder.innerHTML,
            correctAnswer,
            answerInBox);
        playSound("incorrect");
        answerBox.appendChild(incorrectIcon);
        appendCorrectAnswer(answerBox);
    }

    if (questionDispenser.isQuizMode() && questionDispenser.isLastQuestion()) {
        mainButton.setEndQuiz();

    } else {
        mainButton.setNextQuestion();
    }
}

function appendCorrectAnswer(e) {
    console.log("appending correct");
    const correctAnswerElement = createElement(null, "div", "correct-answer-syllable");

    // const answerPrefix = util.postProcess(qParams.pronoun.arabic + tense.answerPrefix);
    const answerPrefix = "התשובה הנכונה: ";
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

export const typeQuiz = {
    init,
    initQuestionFromParams,
    onTimerEnded,
}