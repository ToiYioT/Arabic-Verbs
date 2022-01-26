import { pronounsConst, filterRoots, allFormNames, getArabicRootOfForm } from "./scripts/data.js";
import { getFilteringParams } from "./scripts/urlParams.js";
import { conjugator } from "./scripts/conjugator.js";
import { forms, tenses } from "./scripts/tenses.js";
import { util } from "./scripts/util.js";
import { syllables } from "./scripts/syllables.js";

const courses = ["beginner", "advanced"];
const courseHebrewNames = ["מדרסה מתחילים", "מדרסה ממשיכים"];

const pronouns = pronounsConst;
const allLessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let lessonTitle = null;

let currentRoot = null;
let currentFormArabic = "";

let otherRootsContainer;
let tableRows;
let helpOverlay, helpWindow;
let rootsOfCurrentLesson;

window.addEventListener("load", () => {

    otherRootsContainer = document.getElementsByClassName("other-roots")[0];
    tableRows = document.getElementsByClassName("table-row");
    helpOverlay = document.getElementsByClassName("help-overlay")[0];
    helpWindow = document.getElementsByClassName("help-container")[0];
    document.getElementsByClassName("table-help-icon")[0].onclick = openHelpWindow;
    document.getElementsByClassName("x-button")[0].onclick = closeHelpWindow;

    lessonTitle = document.getElementsByClassName("form-title")[0];
    populateAllLessons();
    changeLesson(0, 1);
});

function changeLesson(courseNum, lessonNum) {
    console.log("course: " + courseNum + ", lessonNum: " + lessonNum);
    lessonTitle.innerHTML = courseHebrewNames[courseNum] + " " + "שיעור " + lessonNum;
    populateAllRootsOfLesson(courseNum * 8 + lessonNum);
    populateTable(currentRoot);
    // addPracticeLink(form);
}

function addPracticeLink(form) {
    const practiceButton = document.getElementsByClassName("practice-button");
    practiceButton[0].addEventListener('click', function () {
        location.href = './index.html?form=' + form.formName;
    }, false);
    practiceButton[0].innerHTML = "לתרגול המשקל " + currentFormArabic;
}

function populateTable(root) {

    if (!root) {
        setNoRootsInTable();
        return;
    }

    const rootForm = forms[root.form];
    const tense = tenses[rootForm.tense];

    for (let i = 0; i < tableRows.length; i++) {
        const pronoun = pronouns[i];

        let hebrewPart = pronoun.hebrew + " " +
            conjugateHebrew(root.hebrew, rootForm, pronoun);

        if (tense.specifyPronounGender && pronoun.gender != ""
            ||
            (tense == tenses.participle && pronoun.name.includes("Ana")
                && root.hebrew.charAt(root.hebrew.length - 1) == "ה")) {

            hebrewPart += " (" + pronoun.gender + ")";
        }
        tableRows[i].innerHTML = '<div class="hebrew-part">' + util.postProcess(hebrewPart) + '</div>';

        let arabicConjugated = conjugate(root.arabic, root.form, pronoun, false);
        let conjugatedSyllables = syllables.separateIntoSyllables(arabicConjugated);
        arabicConjugated = conjugatedSyllables;

        let arabicPart = " - " + pronoun.arabic + " " + tense.answerPrefix;

        tableRows[i].innerHTML += '<div class="arabic-part">' + util.postProcess(arabicPart) +
            arabicConjugated + '</div>';
    }
}

function conjugate(rootArabic, formName, pronoun, postProcess = true) {

    const conjugationForm = forms[formName];
    conjugator.rootProcessing(rootArabic, conjugationForm, conjugationForm);
    let output = conjugator.getWord(conjugationForm[pronoun.name].template);
    output = util.substituteLetterAtEndToEndingLetter(output, true);

    if (postProcess) output = util.postProcess(output);
    return output;
}

function conjugateHebrew(rootHebrew, rootForm, pronoun) {

    const hebConjugate = tenses[rootForm.tense].hebConjugate;

    let firstWordEndingAt = util.getIndexOfFirstWordEnding(rootHebrew);
    if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;

    let firstWord = rootHebrew.substring(0, firstWordEndingAt);
    firstWord = util.substituteEndingLettersToNormal(firstWord);
    let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

    let conjugatedWord = hebConjugate[pronoun.name](firstWord);
    conjugatedWord = util.substituteLetterAtEndToEndingLetter(conjugatedWord);

    return conjugatedWord + remainderOfTranslation;
}

function populateAllRootsOfLesson(lesson) {

    rootsOfCurrentLesson = filterRoots({ lessons: [lesson], forms: allFormNames });
    otherRootsContainer.innerHTML = "";
    currentRoot = rootsOfCurrentLesson[0];

    if (rootsOfCurrentLesson.length == 0) {
        return;
    }

    for (let i = 0; i < rootsOfCurrentLesson.length; i++) {
        const root = rootsOfCurrentLesson[i];
        const conjugated = conjugate(root.arabic, root.form, pronouns[4]);
        new RootButton(root, conjugated, otherRootsContainer);
    }
}

function setNoRootsInTable() {
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].innerHTML = "-";
    }
    tableRows[0].innerHTML = "אין פעלים חדשים לשיעור זה";
}

function populateAllLessons() {


    for (let i = 0; i < courses.length; i++) {

        const container = document.getElementsByClassName(courses[i])[0];
        populateLessonsOfCourse(i, container);
    }
}

function populateLessonsOfCourse(courseNum, container) {
    for (let i = 0; i < 8; i++) {
        const numOfLesson = i + 1;
        new lessonButton(courseNum, numOfLesson, container);
    }
}

function openHelpWindow() {
    helpOverlay.style.visibility = "visible";
    helpOverlay.style.opacity = "100%";
    helpWindow.style.transform = "translateY(0px)";
    document.body.style.overflow = "hidden";
}

function closeHelpWindow() {
    helpOverlay.style.visibility = "hidden";
    helpOverlay.style.opacity = "0%";
    helpWindow.style.transform = "translateY(100px)";
    document.body.style.overflow = "scroll";
}

class lessonButton {
    constructor(courseNum, lessonNum, container) {
        this.courseNum = courseNum;
        this.lessonNum = lessonNum;
        this.parent = container;

        this.element = this.#createHTMLButton();
        this.element.onclick = () => this.#onClick();
    }

    #createHTMLButton() {

        const newButton = document.createElement("div");
        const newContent = document.createTextNode(this.lessonNum);
        newButton.appendChild(newContent);
        this.parent.appendChild(newButton);
        return newButton;
    }

    #onClick() {
        changeLesson(this.courseNum, this.lessonNum);
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // window.scrollTo(0);
    }
}

class RootButton {
    constructor(root, arabicConjugated, parent) {
        this.root = root;
        this.arabicConjugated = arabicConjugated;
        this.parent = parent;

        this.element = this.#createHTMLButton();
        this.element.onclick = () => this.#onClick();
    }

    #createHTMLButton() {
        const newButton = document.createElement("div");
        const newContent = document.createTextNode(this.arabicConjugated + " - " + this.root.hebrew);
        newButton.appendChild(newContent);
        this.parent.appendChild(newButton);
        return newButton;
    }

    #onClick() {
        populateTable(this.root);
    }
}

