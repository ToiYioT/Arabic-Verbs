import { pronounsConst, filterRoots, allFormNames, getArabicRootOfForm } from "./scripts/data.js";
import { getFilteringParams } from "./scripts/urlParams.js";
import { conjugator } from "./scripts/conjugator.js";
import { forms, tenses } from "./scripts/tenses.js";
import { util } from "./scripts/util.js";
import { syllables } from "./scripts/syllables.js";

const courses = ["beginner", "advanced"];
const courseHebrewNames = ["מדרסה מתחילים", "מדרסה ממשיכים"];
const pronouns = pronounsConst;

let currentRoot = null;
let rootsOfCurrentLesson;

const otherRootsContainer = document.querySelector(".other-roots");
const tableRows = document.querySelectorAll(".table-row");
const helpOverlay = document.querySelector(".help-overlay");
const helpWindow = document.querySelector(".help-container");
const rootInfo = document.querySelector(".root-info");
const formInfo = document.querySelector(".form-info");
const courseTitle = document.querySelector(".form-title");
const lessonTitle = document.querySelector(".lesson-title");

window.addEventListener("load", () => {

    util.changePronounsToMardrasaStyle(forms);
    document.querySelector(".table-help-icon").onclick = openHelpWindow;
    document.querySelector(".x-button").onclick = closeHelpWindow;

    populateAllLessons();

    const lessonNum = getFilteringParams().lessons[0];
    // the math is mapping lessons 1-16 to the correct course and lesson nums:
    changeLesson(Math.floor((lessonNum - 1) / 8), (lessonNum - 1) % 8 + 1);
});

function changeLesson(courseNum, lessonNum) {
    console.log("course num: " + courseNum);
    console.log("lesson num: " + lessonNum);
    courseTitle.innerHTML = courseHebrewNames[courseNum];
    lessonTitle.innerHTML = "שיעור " + lessonNum;
    populateAllRootsOfLesson(courseNum * 8 + lessonNum);
    populateTable(currentRoot);
    addPracticeLink(courseNum * 8 + lessonNum);
}

function addPracticeLink(lessonNum) {
    const practiceButton = document.getElementsByClassName("practice-button")[0];
    if (rootsOfCurrentLesson.length == 0) {
        practiceButton.onclick = "";
        practiceButton.innerHTML = "השיעור ריק";
        return;
    }

    practiceButton.onclick = () => {
        location.href = './index.html?lf=' + lessonNum + "&lt=" + lessonNum;
    };

    practiceButton.innerHTML = "לתרגול השיעור";
}

function populateTable(root) {

    if (!root) {
        setNoRootsInTable();
        return;
    }

    populateRootInfo(root);

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

function populateRootInfo(root) {
    rootInfo.innerHTML = "";
    rootInfo.innerHTML += conjugate(root.arabic, root.form, pronouns[4]);
    rootInfo.innerHTML += " - " + root.hebrew;

    let linkText = "משקל ";
    const formRoot = forms[root.form].representativeRoot;
    const formNameArabic = conjugate(formRoot, root.form, pronouns[4]);
    linkText += formNameArabic;

    const a = document.createElement('a');
    var link = document.createTextNode(linkText);
    a.appendChild(link);
    a.title = "This is Link";
    a.href = "/form.html?form=" + root.form;
    formInfo.innerHTML = "";
    formInfo.appendChild(a);
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
        const dbLessonNum = this.courseNum * 8 + this.lessonNum;
        window.location.href = "/madrasa.html?lf=" + dbLessonNum + "&lt=" + dbLessonNum;
        // changeLesson(this.courseNum, this.lessonNum);
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

