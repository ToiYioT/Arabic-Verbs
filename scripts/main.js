import { forms } from "./measure-1-past.js";
import { hebConjugate } from "./heb-past.js";
import {
    roots, rootsHebrew, formNames, pronounFunctions, pronounsArabic, pronounsHebrew
} from "./data.js";

// settings
const hideAnswers = true;
const numOfAnswers = 4;

// html elements
var answerHolders = [];
var answerSection;
var questionHolder;
var button;
var score;

// logic variables 
var answerForms = [];
var answers = [];
var correctAnswer;
var numOfCorrectAnswers = 0;
var numOfTotalAnswers = 0;
var answeringAttemptNum;

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

    answerSection = document.getElementById("answer-section");

    button.addEventListener("click", buttonHandler);

    for (let i = 0; i < numOfAnswers; i++) {
        answerHolders.push(document.getElementById("answer" + (i + 1)));
        answerHolders[i].addEventListener("click", answerClickHandler);
    }

    buttonHandler();
    updateScore();

    debugShowConjugations(forms.habb,
        [forms.katab, forms.nizel, forms.haka,
        forms.nisi, forms.habb, forms.rah, forms.jab]);
});

var debugCols = [];
function loadDebugCols() {
    for (let i = 0; i < 7; i++) {
        debugCols.push(document.getElementById("col" + (i + 1)));
    }
}

function buttonHandler() {
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
        button.disabled = true;
    }
}

function initQuestion() {

    answers.length = 0;
    answeringAttemptNum = 0;
    numOfTotalAnswers++;

    let pronounNum = Math.floor(Math.random() * pronounFunctions.length);
    let pronounFunction = pronounFunctions[pronounNum];

    createFormAndDistractingForms(pronounNum);

    let rootForm = answerForms[0];
    let formName = rootForm.formName;


    let randomWordNum = Math.floor(Math.random() * roots[formName].length);
    let root = roots[formName][randomWordNum];
    let rootHebrew = rootsHebrew[formName][randomWordNum];
    rootHebrew = substituteEndingLettersToNormal(rootHebrew);

    questionHolder.innerHTML = pronounsHebrew[pronounNum] + " " +
        hebConjugate[pronounFunction](rootHebrew) + "<br/>";

    // for (let i = 0; i < 8; i++) {
    //     let pronounFunc = pronounFunctions[i];
    //     let conjugatedWord = hebConjugate[pronounFunc](rootHebrew);
    //     conjugatedWord = substituteLetterAtEndToEndingLetter(conjugatedWord);

    //     questionHolder.innerHTML += pronounsHebrew[i] + " " +
    //         conjugatedWord + "<br/>";
    // }

    for (let i = 0; i < numOfAnswers; i++) {

        let conjugateTo = answerForms[i];
        doProcessing(root, rootForm, conjugateTo);
        answers.push(pronounsArabic[pronounNum] + " "
            + getWord(...conjugateTo[pronounFunction]()));
    }
    correctAnswer = answers[0];
    shuffle(answers);

    for (let i = 0; i < answerHolders.length; i++) {
        answerHolders[i].innerHTML = answers[i];
        answerHolders[i].classList.remove("correct");
        answerHolders[i].classList.remove("incorrect");
    }
    updateScore();
}

function debugShowConjugations(rootForm, conjugateToArray) {
    loadDebugCols();

    let formName = rootForm.formName;
    let randomWordNum = Math.floor(Math.random() * roots[formName].length);
    let root = roots[formName][randomWordNum];

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

function answerClickHandler(event) {
    let holderAnswer = event.target.innerHTML;
    answeringAttemptNum++;

    if (holderAnswer == correctAnswer) {
        event.target.classList.add("correct");

        button.disabled = false;
        button.innerHTML = "השאלה הבאה"
        if (answeringAttemptNum == 1) {
            numOfCorrectAnswers++;
        }
    } else {
        event.target.classList.add("incorrect");
    }
    updateScore();
}

function updateScore() {
    score.innerHTML = "שאלה מספר: " + numOfTotalAnswers + "</br>" +
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
    return rootLetters[letterFromRoot] + template.substring(subAtIndex + 1, untilIndex);
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