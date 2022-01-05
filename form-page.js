import { pronounsConst, filterRoots, allFormNames, getArabicRootOfForm } from "./scripts/data.js";
import { getFilteringParams } from "./scripts/urlParams.js";
import { conjugator } from "./scripts/conjugator.js";
import { forms, tenses } from "./scripts/tenses.js";
import { util } from "./scripts/util.js";
import { syllables } from "./scripts/syllables.js";

const pronouns = pronounsConst;
const allLessons = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let currentForm = "";
let formTitle = null;
let currentFormArabic = "";

window.addEventListener("load", () => {

    formTitle = document.getElementsByClassName("form-title")[0];
    populateAllForms();
    const formName = getFilteringParams().forms[0];
    currentForm = forms[formName];
    changeForm(currentForm);
});

function changeForm(form) {
    currentFormArabic = conjugate(form.representativeRoot, form, pronouns[4]);
    formTitle.innerHTML = "משקל " + currentFormArabic;
    populateTable(form);
    populateAllRootsOfForm(form);
    addPracticeLink(form);
}

function addPracticeLink(form) {
    const practiceButton = document.getElementsByClassName("practice-button");
    practiceButton[0].addEventListener('click', function () {
        location.href = './index.html?form=' + form.formName;
    }, false);
    practiceButton[0].innerHTML = "לתרגול המשקל " + currentFormArabic;
    practiceButton[1].addEventListener('click', function () {
        location.href = './index.html';
    }, false);
}

function populateTable(rootForm, rootArabic = rootForm.representativeRoot) {

    const tableRows = document.getElementsByClassName("table-row");

    const rootObject = getArabicRootOfForm(rootArabic, rootForm.formName);
    const tense = tenses[rootForm.tense];

    for (let i = 0; i < tableRows.length; i++) {
        const pronoun = pronouns[i];

        let hebrewPart = pronoun.hebrew + " " +
            conjugateHebrew(rootObject.hebrew, rootForm, pronoun);

        if (tense.specifyPronounGender && pronoun.gender != ""
            ||
            (tense == tenses.participle && pronoun.name.includes("Ana")
                && rootObject.hebrew.charAt(rootObject.hebrew.length - 1) == "ה")) {

            hebrewPart += " (" + pronoun.gender + ")";
        }
        tableRows[i].innerHTML = '<div class="hebrew-part">' + util.postProcess(hebrewPart) + '</div>';

        let arabicConjugated = conjugate(rootArabic, rootForm, pronoun, false);
        let conjugatedSyllables = syllables.separateIntoSyllables(arabicConjugated);
        arabicConjugated = conjugatedSyllables;

        let arabicPart = " - " + pronoun.arabic + " " + tense.answerPrefix;

        tableRows[i].innerHTML += '<div class="arabic-part">' + util.postProcess(arabicPart) +
            arabicConjugated + '</div>';
    }
}

function conjugate(rootArabic, conjugationForm, pronoun, postProcess = true) {
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

function populateAllRootsOfForm(form) {

    const allFormRoots = filterRoots({ forms: [form.formName], lessons: allLessons });
    const otherRootsContainer = document.getElementsByClassName("other-roots")[0];
    otherRootsContainer.innerHTML = "";

    for (let i = 0; i < allFormRoots.length; i++) {
        const root = allFormRoots[i];
        const conjugated = conjugate(root.arabic, form, pronouns[4]);
        new RootButton(root.arabic, conjugated, root.hebrew, otherRootsContainer);
    }
}

function populateAllForms() {

    const allTenses = ["present", "participle", "future", "past",
        "present210", "future210", "past210"];

    for (let i = 0; i < allTenses.length; i++) {

        const container = document.getElementsByClassName(allTenses[i] + "-forms")[0];
        populateFormOfTense(allTenses[i], container);
    }
}

function populateFormOfTense(tense, parent) {

    for (const [formName, form] of Object.entries(forms)) {
        if (form.tense != tense || form.fakeForm) continue;

        const representativeRoot = form.representativeRoot;
        conjugator.rootProcessing(representativeRoot, form, form);
        const conjugated = conjugate(representativeRoot, form, pronouns[4]);
        new FormButton(form, conjugated, parent);
    }
}

class FormButton {
    constructor(form, formNameArabic, parent) {
        this.form = form;
        this.formNameArabic = formNameArabic;
        this.parent = parent;

        this.element = this.#createHTMLButton();
        this.element.onclick = () => this.#onClick();
    }

    #createHTMLButton() {

        const newButton = document.createElement("div");
        const newContent = document.createTextNode(this.formNameArabic);
        newButton.appendChild(newContent);
        this.parent.appendChild(newButton);
        return newButton;
    }

    #onClick() {
        currentForm = this.form;
        changeForm(this.form);
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        // window.scrollTo(0);
    }
}

class RootButton {
    constructor(arabicRoot, arabicConjugated, hebrew, parent) {
        this.arabicRoot = arabicRoot;
        this.arabicConjugated = arabicConjugated;
        this.hebrew = hebrew;
        this.parent = parent;

        this.element = this.#createHTMLButton();
        this.element.onclick = () => this.#onClick();
    }

    #createHTMLButton() {
        const newButton = document.createElement("div");
        const newContent = document.createTextNode(this.arabicConjugated + " - " + this.hebrew);
        newButton.appendChild(newContent);
        this.parent.appendChild(newButton);
        return newButton;
    }

    #onClick() {
        populateTable(currentForm, this.arabicRoot);
    }
}

