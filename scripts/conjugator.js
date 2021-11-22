import { util } from "./util.js";

// intermediate results
var gereshedLetter = "";
var rootLetters = ["", "", ""];
var rootGereshes = ["", "", ""];

// constants
const geresh = "׳";
const shadde = "ّ";

function separateRootIntoLetters(root) {

    let startingIndex = 0;

    for (let i = 0; i < 3; i++) {
        let letterIndex = util.getIndexOfFirstLetterAfter(root, startingIndex);
        rootLetters[i] = root.substr(startingIndex, letterIndex - startingIndex);
        startingIndex = letterIndex;
    }
    checkGereshes();
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

    indexOfGereshedLetter = util.getIndexOfFirstLetterAfter(str, indexOfGereshedLetter);

    return str.slice(0, indexOfGereshedLetter) +
        geresh + str.slice(indexOfGereshedLetter);
}

function substituteRootLetterAt(index, letter) {
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

function getWord(template, index0, index1, index2) {

    index0 = template.indexOf("פ");
    index1 = template.indexOf("ע");
    index2 = template.indexOf("ל");

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

function doProcessing(root, rootForm, toForm) {

    root = util.substituteEndingLettersToNormal(root);
    separateRootIntoLetters(root);
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
    separateRootIntoLetters,
    addGeresh,
    substituteRootLetterAt,
    copyLetterToAnoter,
    addContentsOfLetterToAnother,
    getWord,
    doProcessing,
}