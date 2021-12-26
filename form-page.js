import { pronounsConst, filterRoots, allFormNames } from "./scripts/data.js";
import { getFilteringParams } from "./scripts/urlParams.js";
import { conjugator } from "./scripts/conjugator.js";
import { forms } from "./scripts/tenses.js";
import { util } from "./scripts/util.js";
const pronouns = pronounsConst;

window.addEventListener("load", () => {
    populateAllForms();
    getConjugations();
})


function getConjugations() {
    const form = getFilteringParams().forms[0];

    const formTitle = document.getElementsByClassName("form-title")[0];
    const tableRows = document.getElementsByClassName("table-row");

    const rootForm = forms[form];
    const rootArabic = rootForm.representativeRoot;

    populateAllRootsOfForm(rootForm);

    formTitle.innerHTML += conjugate(rootArabic, rootForm, pronouns[4]);

    for (let i = 0; i < tableRows.length; i++) {
        const pronoun = pronouns[i];
        tableRows[i].innerHTML += " - " + pronoun.arabic + " "
            + conjugate(rootArabic, rootForm, pronoun);
    }

}

function conjugate(rootArabic, conjugationForm, pronoun) {
    conjugator.rootProcessing(rootArabic, conjugationForm, conjugationForm);
    let output = conjugator.getWord(conjugationForm[pronoun.name].template);
    output = util.substituteLetterAtEndToEndingLetter(output, true);
    output = util.postProcess(output);
    return output;
}

function populateAllRootsOfForm(form) {

    const allLessons = ["", 1, 2, 3, 4, 5, 6, 7, 8];
    const allFormRoots = filterRoots({ forms: [form.formName], lessons: allLessons });
    const otherRootsContainer = document.getElementsByClassName("other-roots")[0];

    for (let i = 0; i < allFormRoots.length; i++) {
        const root = allFormRoots[i];
        const conjugated = conjugate(root.arabic, form, pronouns[4]);
        otherRootsContainer.textContent += conjugated + " - " + root.hebrew + ", ";
    }
}

function populateAllForms() {

    const allFormsContainer = document.getElementsByClassName("all-forms")[0];

    for (const [formName, form] of Object.entries(forms)) {

        const representativeRoot = form.representativeRoot;
        conjugator.rootProcessing(representativeRoot, form, form);
        const conjugated = conjugate(representativeRoot, form, pronouns[4]);
        allFormsContainer.textContent += conjugated + ", ";
    }
}

