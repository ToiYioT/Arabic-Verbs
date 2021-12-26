import { pronounsConst, filterRoots, allFormNames } from "./scripts/data.js";
import { getFilteringParams } from "./scripts/urlParams.js";
import { conjugator } from "./scripts/conjugator.js";
import { forms } from "./scripts/tenses.js";
import { util } from "./scripts/util.js";
const pronouns = pronounsConst;

window.addEventListener("load", () => {
    getConjugations();
})


function getConjugations() {
    const form = getFilteringParams().forms[0];

    const allLessons = ["", 1, 2, 3, 4, 5, 6, 7, 8];
    const formTitle = document.getElementsByClassName("form-title")[0];
    const tableRows = document.getElementsByClassName("table-row");

    const rootForm = forms[form];
    const rootArabic = rootForm.representativeRoot;
    const allFormRoots = filterRoots({ forms: [form], lessons: allLessons });

    conjugator.rootProcessing(rootArabic, rootForm, rootForm);
    formTitle.innerHTML = conjugate(pronouns[4]);

    for (let i = 0; i < tableRows.length; i++) {
        const pronoun = pronouns[i];
        tableRows[i].innerHTML += " - " + pronoun.arabic + " " + conjugate(pronoun);
    }

    function conjugate(pronoun) {
        let output = conjugator.getWord(rootForm[pronoun.name].template);
        output = util.substituteLetterAtEndToEndingLetter(output, true);
        output = util.postProcess(output);
        return output;
    }
}

