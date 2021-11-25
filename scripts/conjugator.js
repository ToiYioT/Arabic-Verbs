import { util } from "./util.js";

// intermediate results
var rootLetters = ["", "", ""];

function getWord(template) {

    let solution = util.substituteFAAL(rootLetters, template);
    return solution;
}

function rootProcessing(root, rootForm, toForm) {

    if (rootForm != toForm) {
        let toFormTemplate = rootForm.processingToForm[toForm.formName];
        let rootSeparated = util.separateRootIntoLetters(root);
        root = util.substituteFAAL(rootSeparated, toFormTemplate);
    }

    root = util.replaceApostropheWithGeresh(root);
    root = util.substituteEndingLettersToNormal(root);
    rootLetters = util.separateRootIntoLetters(root);
}

export const conjugator = {
    getWord,
    rootProcessing,
}