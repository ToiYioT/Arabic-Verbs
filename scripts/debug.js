import { util } from "./util.js";

function showConjugationHebrew(roots, pronouns, tenses, forms) {
    loadDebugCols();

    for (let v = 0; v < 7; v++) {
        let whereToPutText = debugCols[v];

        let randomRootNum = Math.floor(Math.random() * roots.length);
        let root = roots[randomRootNum];
        let rootHebrew = root.hebrew;
        let hebConjugate = tenses[forms[root.form].tense].hebConjugate;
        // rootHebrew = "ילך לאיבוד"

        let firstWordEndingAt = util.getIndexOfFirstWordEnding(rootHebrew);
        if (firstWordEndingAt == -1) firstWordEndingAt = rootHebrew.length;

        let firstWord = rootHebrew.substring(0, firstWordEndingAt);
        firstWord = util.substituteEndingLettersToNormal(firstWord);
        let remainderOfTranslation = rootHebrew.substring(firstWordEndingAt, rootHebrew.length);

        for (let i = 0; i < 12; i++) {
            let pronoun = pronouns[i];
            let conjugatedWord = hebConjugate[pronoun.name](firstWord);
            conjugatedWord = util.substituteLetterAtEndToEndingLetter(conjugatedWord);

            whereToPutText.innerHTML += pronoun.hebrew + " " +
                conjugatedWord + remainderOfTranslation + "<br/>";
        }
    }
}

function showConjugations(roots, pronouns, conjugator, forms) {
    loadDebugCols();

    let rootNum = Math.floor(Math.random() * roots.length);
    let root = roots[rootNum].arabic;
    let formName = roots[rootNum].form;

    let rootForm = forms[formName];
    let conjugateToArray = [
        rootForm,
        forms[rootForm.Ana.distractingForms[0]],
        forms[rootForm.Ana.distractingForms[1]],
        forms[rootForm.Ana.distractingForms[2]],
    ];

    // let conjugateToArray = [
    //     forms["karrar"],
    //     forms["saafar"],
    //     forms["tallam"],
    //     forms["tnaazal"],
    // ]

    // // to set specific root and forms:
    // let root = "בּסם";
    // let rootForm = forms["karrar"];
    // let conjugateTo = forms.ihutt;
    let outputs = [];  /////

    for (let c = 0; c < conjugateToArray.length; c++) {
        let whereToPutText = debugCols[c];

        let allAnswers = []; /////
        outputs.push(allAnswers); ////

        for (let i = 0; i < pronouns.length; i++) {

            let pronoun = pronouns[i];
            // let conjugateTo = conjugateToArray[i];
            let conjugateTo = forms[rootForm[pronoun.name].distractingForms[c - 1]];
            if (c == 0) conjugateTo = rootForm;

            conjugator.rootProcessing(root, rootForm, conjugateTo);

            let output = pronoun.arabic + " " +
                conjugator.getWord(conjugateTo[pronoun.name].template);
            output = util.substituteLetterAtEndToEndingLetter(output, true);
            output = util.postProcess(output);
            allAnswers.push(output); ////

            whereToPutText.innerHTML += output + "</br>";
        }
    }
    //////////// Testing if all answers are unique
    let nthOfEvery = (n) => outputs.map((innerArray) => innerArray[n]);

    for (let i = 0; i < 12; i++) {
        let pronounAnswer = nthOfEvery(i);

        let set = new Set(pronounAnswer);
        if (set.size !== pronounAnswer.length) {
            console.log(`There is a duplicate at ${i}`);
            console.log(pronounAnswer);
        }
    }
}


var debugCols = [];
function loadDebugCols() {

    let container = document.getElementById("container");
    let debugContainer = document.getElementById("debug-container");
    container.style.display = "none";
    debugContainer.style.display = "flex";

    for (let i = 0; i < 7; i++) {
        debugCols.push(document.getElementById("col" + (i + 1)));
    }
}


export const debug = {
    showConjugationHebrew,
    showConjugations,
}