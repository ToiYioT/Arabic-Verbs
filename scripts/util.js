const geresh = "׳";
const shadde = "ّ";
const letters = "אבגדהוזחטיכלמנסעפצקרשתץףךםן";
const sgolta = "֒";

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

function getIndexOfFirstWordEnding(word) {
    return word.indexOf(" ");
}

function getIndexOfFirstLetterAfter(str, afterIndex) {
    for (let i = afterIndex + 1; i < str.length; i++) {
        if (letters.indexOf(str[i]) > -1) {
            return i;
        }
    }
    return str.length;
}

function separateRootIntoLetters(root) {

    let startingIndex = 0;
    let rootLetters = ["", "", ""];

    for (let i = 0; i < 3; i++) {
        let letterIndex = getIndexOfFirstLetterAfter(root, startingIndex);
        rootLetters[i] = root.substr(startingIndex, letterIndex - startingIndex);
        startingIndex = letterIndex;
    }

    return rootLetters;
}

function substituteLetterAt(word, substituteAtIndex, substituteWith) {
    return word.substring(0, substituteAtIndex) + substituteWith +
        word.substring(substituteAtIndex + 1, word.length);
}

function getLastLetterIndex(word) {

    for (let i = word.length - 1; i > 0; i--) {
        if (letters.indexOf(word[i]) > -1) {
            return i;
        }
    }
}

function substituteEndingLettersToNormal(word) {

    word = word.replaceAll("ץ", "צ");
    word = word.replaceAll("ף", "פ");
    word = word.replaceAll("ך", "כ");
    word = word.replaceAll("ם", "מ");
    word = word.replaceAll("ן", "נ");
    return word;
}

function removeShadde(str) {
    if (str == -1) return;
    return str.replaceAll(shadde, "");
}

function addNiqud(str, niqud) {
    return str[0] + niqud + str.substring(1, str.length);
}

function substituteLetterAtEndToEndingLetter(word, arabic = false) {

    let lastLetterIndex = util.getLastLetterIndex(word);
    let lastLetter = word[lastLetterIndex];

    if (lastLetter == "צ") {
        word = util.substituteLetterAt(word, lastLetterIndex, "ץ");

    } else if (lastLetter == "פ") {
        word = util.substituteLetterAt(word, lastLetterIndex, "ף");

    } else if (lastLetter == "כ" && !arabic) {
        word = util.substituteLetterAt(word, lastLetterIndex, "ך");

    } else if (lastLetter == "מ") {
        word = util.substituteLetterAt(word, lastLetterIndex, "ם");

    } else if (lastLetter == "נ") {
        word = util.substituteLetterAt(word, lastLetterIndex, "ן");
    }
    return word;
}

function replaceApostropheWithGeresh(word) {
    return word.replaceAll("'", geresh);
}

function postProcess(word) {
    word = word.replaceAll(shadde, sgolta);


    // move gereshes to the right place
    let wordLetters = word.split("");
    let lastLetterIndex = word.length;
    let index = word.length - 1;

    while (index >= 0) {

        if (letters.indexOf(wordLetters[index]) > -1) {
            lastLetterIndex = index;
        }
        if (wordLetters[index].indexOf(geresh) > -1) {
            wordLetters[index] = wordLetters[lastLetterIndex - 1];
            wordLetters[lastLetterIndex - 1] = geresh;
        }
        index--;
    }
    return wordLetters.join("");
}

export const util = {
    shuffle,
    getIndexOfFirstWordEnding,
    getIndexOfFirstLetterAfter,
    substituteLetterAt,
    getLastLetterIndex,
    substituteEndingLettersToNormal,
    removeShadde,
    addNiqud,
    substituteLetterAtEndToEndingLetter,
    postProcess,
    separateRootIntoLetters,
    replaceApostropheWithGeresh
}