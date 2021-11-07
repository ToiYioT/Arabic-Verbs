import { formsFuture } from "./measure-1-future.js";
import { formsPast } from "./measure-1-past.js";
import { hebConjugatePast } from "./heb-past.js";
import { hebConjugateFuture } from "./heb-future.js";
import {
    rootsArabicPast, rootsHebrewPast, formNamesPast,
    formNamesFuture, pronounFunctions, pronounsArabic, pronounsHebrew, rootsArabicFuture, rootsHebrewFuture
} from "./data.js";
import { AnswerInfo } from "../info-box.js";

const forms = formsFuture;
const formNames = formNamesFuture;
const rootsArabic = rootsArabicFuture;
const rootsHebrew = rootsHebrewFuture;
const hebConjugate = hebConjugateFuture;

// settings
const hideAnswers = true;
const numOfAnswers = 4;
const progressBarUpdateInterval = 20;
const revealAnswersAfter = 3000;

var numOfProgressBarUpdates = 0;
const progressBarMaxUpdates = 150;

// html elements
var answerHolders = [];
var answerSection;
var questionHolder;
var button;
var score;
var progressBar;
var infoBox;

var progressBarTimer;

// logic variables 
var answerForms = [];
var answers = [];
var correctAnswer;
var numOfCorrectAnswers = 0;
var numOfTotalAnswers = 0;

// constants 
const letters = "אבגדהוזחטיכלמנסעפצקרשתץףךםן";
const geresh = "׳";
const shadde = "ّ";

// intermediate results
var gereshedLetter = "";
var rootLetters = ["", "", ""];
var rootGereshes = ["", "", ""];


window.addEventListener('load', (event) => {

    questionHolder = document.getElementById("question");
    button = document.getElementById("next-button");
    score = document.getElementById("score");
    progressBar = document.getElementById("progress-bar");
    infoBox = document.getElementById("info-box");

    answerSection = document.getElementById("answer-section");

    enableButton();

    for (let i = 0; i < numOfAnswers; i++) {
        answerHolders.push(document.getElementById("answer" + (i + 1)));
        answerHolders[i].addEventListener("click", answerClickHandler);
    }

    buttonHandler();
    updateScore();

    // debugShowConjugations(forms.ihutt,
    //     [forms.ihutt, forms.ihibb, forms.insa, forms.iruh]);
    // debugShowConjugationHebrew();
});

var debugCols = [];
function loadDebugCols() {
    for (let i = 0; i < 7; i++) {
        debugCols.push(document.getElementById("col" + (i + 1)));
    }
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

function setInfoBox(str) {
    infoBox.innerHTML = str;
}

function initQuestion() {

    answers.length = 0;
    numOfTotalAnswers++;
    questionAnswered = false;
    setInfoBox("");

    let pronounNum = Math.floor(Math.random() * pronounFunctions.length);
    let pronounFunction = pronounFunctions[pronounNum];

    createFormAndDistractingForms(pronounNum);

    let rootForm = answerForms[0];
    let formName = rootForm.formName;

    // getting a random word from the random form
    let randomWordNum = Math.floor(Math.random() * rootsArabic[formName].length);
    let root = rootsArabic[formName][randomWordNum];
    let rootHebrew = rootsHebrew[formName][randomWordNum];

    // extracting the hebrew word to conjugate (the first one)
    let firstWordEndingAt = getIndexOfFirstWordEnding(rootHebrew);
    if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;
    let firstWord = rootHebrew.substring(0, firstWordEndingAt);
    firstWord = substituteEndingLettersToNormal(firstWord);
    let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

    // conjugate the hebrew expression and view it
    let conjugatedHebrew = hebConjugate[pronounFunction](firstWord);
    conjugatedHebrew = substituteLetterAtEndToEndingLetter(conjugatedHebrew);
    questionHolder.innerHTML = pronounsHebrew[pronounNum] + " " +
        conjugatedHebrew + remainderOfTranslation + "<br/>";

    for (let i = 0; i < numOfAnswers; i++) {

        let conjugateTo = answerForms[i];
        doProcessing(root, rootForm, conjugateTo);

        let answer = pronounsArabic[pronounNum] + " "
            + getWord(...conjugateTo[pronounFunction]());
        answer = substituteLetterAtEndToEndingLetter(answer);
        answers.push(answer);
    }
    correctAnswer = answers[0];
    shuffle(answers);

    for (let i = 0; i < answerHolders.length; i++) {
        answerHolders[i].innerHTML = answers[i];
        answerHolders[i].classList.remove("correct");
        answerHolders[i].classList.remove("incorrect");
        answerHolders[i].classList.remove("faded");
    }
    updateScore();
    startProgressBarAnimation();
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

function debugShowConjugationHebrew() {
    loadDebugCols();

    for (let v = 0; v < 7; v++) {
        let whereToPutText = debugCols[v];

        let randomFormNum = Math.floor(Math.random() * formNames.length);
        let formName = formNames[randomFormNum];
        let randomWordNum = Math.floor(Math.random() * rootsHebrew[formName].length);
        let rootHebrew = rootsHebrew[formName][randomWordNum];

        let firstWordEndingAt = getIndexOfFirstWordEnding(rootHebrew);
        if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;

        let firstWord = rootHebrew.substring(0, firstWordEndingAt);
        firstWord = substituteEndingLettersToNormal(firstWord);
        let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

        for (let i = 0; i < 8; i++) {
            let pronounFunc = pronounFunctions[i];
            let conjugatedWord = hebConjugate[pronounFunc](firstWord);
            conjugatedWord = substituteLetterAtEndToEndingLetter(conjugatedWord);

            whereToPutText.innerHTML += pronounsHebrew[i] + " " +
                conjugatedWord + remainderOfTranslation + "<br/>";
        }
    }
}

function debugShowConjugations(rootForm, conjugateToArray) {
    loadDebugCols();

    // to get random root:
    let formName = rootForm.formName;
    let randomWordNum = Math.floor(Math.random() * rootsArabic[formName].length);
    let root = rootsArabic[formName][randomWordNum];

    // // to set specific root and forms:
    // let root = "כּבּّ";
    // rootForm = forms.ihutt;
    // let conjugateTo = forms.ihutt;

    for (let c = 0; c < conjugateToArray.length; c++) {
        let conjugateTo = conjugateToArray[c];
        let whereToPutText = debugCols[c];

        for (let i = 0; i < pronounFunctions.length; i++) {
            let pronounFunction = pronounFunctions[i];

            doProcessing(root, rootForm, conjugateTo);
            whereToPutText.innerHTML += pronounsArabic[i] +
                " " + getWord(...conjugateTo[pronounFunction]()) + "</br>";
        }
    }
}

function getIndexOfFirstWordEnding(word) {
    return word.indexOf(" ");
}

var questionAnswered = false;
function answerClickHandler(event) {
    if (questionAnswered) return;
    questionAnswered = true;

    let holderAnswer = event.target.innerHTML;

    if (holderAnswer == correctAnswer) {
        event.target.classList.add("correct");

        for (let i = 0; i < answerHolders.length; i++) {
            if (answerHolders[i].innerHTML != correctAnswer) {
                answerHolders[i].classList.add("faded");
            }
        }

        numOfCorrectAnswers++;
    } else {

        event.target.classList.add("incorrect");

        for (let i = 0; i < answerHolders.length; i++) {
            if (answerHolders[i].innerHTML == correctAnswer) {
                answerHolders[i].classList.add("correct");

            } else if (answerHolders[i].innerHTML != holderAnswer) {
                answerHolders[i].classList.add("faded");
            }
        }
    }
    enableButton();
    button.innerHTML = "השאלה הבאה"
    updateScore();

    let info = AnswerInfo.getInfo(correctAnswer);
    if (info[0] != null) {
        setInfoBox(info[0]);
    }
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
    score.innerHTML = "שאלה מספר: " + numOfTotalAnswers + ",    " +
        "תשובות נכונות: " + numOfCorrectAnswers;
}

function createFormAndDistractingForms(pronounNum) {

    answerForms.length = 0;

    let randomFormNum = Math.floor(Math.random() * formNames.length);
    let form = getFormFromNum(randomFormNum);

    answerForms.push(form);
    answerForms.push(getFormFromNum(form.formsToDistractWith[pronounNum][0]));
    answerForms.push(getFormFromNum(form.formsToDistractWith[pronounNum][1]));
    answerForms.push(getFormFromNum(form.formsToDistractWith[pronounNum][2]));
}

function getFormFromNum(formNum) {
    let formName = formNames[formNum];
    let form = forms[formName];
    return form;
}

function doProcessing(root, rootForm, toForm) {

    root = substituteEndingLettersToNormal(root);
    separateRootIntoLetters(root);
    doProcess(...rootForm.processingToForm[toForm.formName]);
}

function doProcess(addFrom, addTo, copyFrom, copyTo, removeShaddeAt,
    substituteAt = -1, substituteWith = "", niqudToAdd = "", addNiqudAt = -1) {

    if (niqudToAdd != "") {
        rootLetters[addNiqudAt] = addNiqud(rootLetters[addNiqudAt], niqudToAdd);
    }

    addContentsOfLetterToAnother(addFrom, addTo);
    copyLetterToAnoter(copyFrom, copyTo);
    substituteLetterAt(substituteAt, substituteWith);
    if (removeShaddeAt > -1) {
        rootLetters[removeShaddeAt] = removeShadde(rootLetters[removeShaddeAt]);
    }
}

function separateRootIntoLetters(root) {

    let startingIndex = 0;

    for (let i = 0; i < 3; i++) {
        let letterIndex = getIndexOfFirstLetterAfter(root, startingIndex);
        rootLetters[i] = root.substr(startingIndex, letterIndex - startingIndex);
        startingIndex = letterIndex;
    }
    checkGereshes();
}

function getIndexOfFirstLetterAfter(str, afterIndex) {
    for (let i = afterIndex + 1; i < str.length; i++) {
        if (letters.indexOf(str[i]) > -1) {
            return i;
        }
    }
    return str.length;
}

function checkGereshes() {
    gereshedLetter = "";
    for (let i = 0; i < 3; i++) {
        if (rootLetters[i].includes("'")) {
            rootLetters[i] = rootLetters[i].replace("'", '');
            gereshedLetter = rootLetters[i];

            if (gereshedLetter.includes(shadde)) {
                gereshedLetter = gereshedLetter.replace(shadde, "");
            }
        }
    }
}

function addGeresh(str) {
    if (gereshedLetter == "") return str;

    let indexOfGereshedLetter = str.indexOf(gereshedLetter);

    indexOfGereshedLetter = getIndexOfFirstLetterAfter(str, indexOfGereshedLetter);

    return str.slice(0, indexOfGereshedLetter) +
        geresh + str.slice(indexOfGereshedLetter);
}

function substituteLetterAt(index, letter) {
    if (index > -1) {
        let str = rootLetters[index];
        rootLetters[index] = letter + str.substr(1, str.length);
    }
}

function copyLetterToAnoter(copyFrom, copyTo) {
    if (copyFrom == -1) return;
    rootLetters[copyTo] = rootLetters[copyFrom];
    rootGereshes[copyTo] += rootGereshes[copyFrom];
}

function addContentsOfLetterToAnother(addFrom, addTo) {
    if (addFrom == -1) return;
    rootLetters[addTo] += rootLetters[addFrom];
    rootGereshes[addTo] += rootGereshes[addFrom];
    rootGereshes[addFrom] = "";
}

function removeShadde(str) {
    if (str == -1) return;
    return str.replaceAll(shadde, "");
}

function addNiqud(str, niqud) {
    return str[0] + niqud + str.substring(1, str.length);
}

function getWord(template, index0, index1, index2) {

    if (index1 == -1) {
        rootLetters[0] = substituteLetterInTemplate(template, 0, index0, index2);
        rootLetters[1] = "";
        rootLetters[2] = substituteLetterInTemplate(template, 2, index2, template.length);

    } else if (index2 == -1) {
        rootLetters[0] = substituteLetterInTemplate(template, 0, index0, index1);
        rootLetters[1] = substituteLetterInTemplate(template, 1, index1, template.length);
        rootLetters[2] = "";

    } else {
        rootLetters[0] = substituteLetterInTemplate(template, 0, index0, index1);
        rootLetters[1] = substituteLetterInTemplate(template, 1, index1, index2);
        rootLetters[2] = substituteLetterInTemplate(template, 2, index2, template.length);
    }

    let solution = addGeresh(rootLetters[0] +
        rootLetters[1] +
        rootLetters[2]);
    return solution;
}

function substituteLetterInTemplate(template, letterFromRoot, subAtIndex, untilIndex) {
    if (letterFromRoot == 0) {
        // for future conjugation, grabs the prefix 
        return template.substring(0, subAtIndex) + rootLetters[letterFromRoot] +
            template.substring(subAtIndex + 1, untilIndex);

    } else {
        return rootLetters[letterFromRoot] + template.substring(subAtIndex + 1, untilIndex);
    }
}

function substituteEndingLettersToNormal(word) {

    word = word.replaceAll("ץ", "צ");
    word = word.replaceAll("ף", "פ");
    word = word.replaceAll("ך", "כ");
    word = word.replaceAll("ם", "מ");
    word = word.replaceAll("ן", "נ");
    return word;
}

// for use with hebrew only
function substituteLetterAtEndToEndingLetter(word) {

    let lastLetter = word[word.length - 1];

    if (lastLetter == "צ") {
        return word.substring(0, word.length - 1) + "ץ";

    } else if (lastLetter == "פ") {
        return word.substring(0, word.length - 1) + "ף";

    } else if (lastLetter == "כ") {
        return word.substring(0, word.length - 1) + "ך";

    } else if (lastLetter == "מ") {
        return word.substring(0, word.length - 1) + "ם";

    } else if (lastLetter == "נ") {
        return word.substring(0, word.length - 1) + "ן";
    }
    return word;
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}