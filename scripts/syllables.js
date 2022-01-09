import { util } from "./util.js";

const letters = "אבגדהוזחטיכלמנסעפצקרשתףךץםן";
const shva = "ְ";
const niqud = "ַ" + "ֵ" + "ִ" + "ֹ" + "ֻ"; // a e i o u
const stressMarker = "֫";
const syllableMarker = "ֽ";

function separateIntoSyllables(word, join = true) {

    const numOfLetters = util.numOfLetters(word);
    const wordLetters = [];
    let currentIndex = 0;

    //separate into letters
    for (let i = 0; i < numOfLetters; i++) {
        const nextIndex = util.getIndexOfFirstLetterAfter(word, currentIndex);
        wordLetters.push(word.slice(currentIndex, nextIndex));
        currentIndex = nextIndex;
    }

    const syllables = [];
    let syllableStartIndex = 0;
    for (let i = 1; i < wordLetters.length; i++) {
        if (wordLetters[i].includes(syllableMarker)) {

            syllables.push(wordLetters.slice(syllableStartIndex, i).join(""));
            syllableStartIndex = i;
        }
    }
    syllables.push(wordLetters.slice(syllableStartIndex, wordLetters[wordLetters.length]).join(""));

    if (join) {
        return joinSyllables(syllables);
    }
    return syllables;
}

function joinSyllables(syllables) {

    const joiningString = " -";
    let joined = `<div class="conjugated-arabic">`;
    for (let i = 0; i < syllables.length; i++) {

        const processedSyllable = util.postProcess(syllables[i]);
        const stressed = syllables[i].includes(stressMarker);

        if (stressed) {
            joined += `<div class="stressed-syllable">`;
            joined += processedSyllable;
            joined += `</div>`;
        } else {
            joined += processedSyllable;
        }
        if (i < syllables.length - 1) joined += joiningString;
    }
    return joined + `</div>`;
}

export const syllables = {
    separateIntoSyllables
}