import { util } from "./util.js";

// intermediate results
var rootLetters = ["", "", ""];

// constants
const geresh = "׳";
const shadde = "ّ";


function substituteRootLetterAt(index, letter) {
    if (index > -1) {
        let str = rootLetters[index];
        rootLetters[index] = letter + str.substr(1, str.length);
    }
}

function copyLetterToAnoter(copyFrom, copyTo) {
    if (copyFrom == -1) return;
    rootLetters[copyTo] = rootLetters[copyFrom];
}

function addContentsOfLetterToAnother(addFrom, addTo) {
    if (addFrom == -1) return;
    rootLetters[addTo] += rootLetters[addFrom];
}

function getWord(template) {

    let index0 = template.indexOf("פ");
    let index1 = template.indexOf("ע");
    let index2 = template.indexOf("ל");

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

    let solution = rootLetters[0] +
        rootLetters[1] +
        rootLetters[2];

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

function doProcessing(root, rootForm, toForm) {

    rootLetters = root;

    doProcess(...rootForm.processingToForm[toForm.formName]);
}

function doProcess(addFrom, addTo, copyFrom, copyTo, removeShaddeAt,
    substituteAt = -1, substituteWith = "", niqudToAdd = "", addNiqudAt = -1) {


    if (niqudToAdd != "") {
        rootLetters[addNiqudAt] = util.addNiqud(rootLetters[addNiqudAt], niqudToAdd);
    }

    addContentsOfLetterToAnother(addFrom, addTo);
    copyLetterToAnoter(copyFrom, copyTo);
    substituteRootLetterAt(substituteAt, substituteWith);
    if (removeShaddeAt > -1) {
        rootLetters[removeShaddeAt] = util.removeShadde(rootLetters[removeShaddeAt]);
    }
}

export const conjugator = {
    substituteRootLetterAt,
    copyLetterToAnoter,
    addContentsOfLetterToAnother,
    getWord,
    doProcessing,
}