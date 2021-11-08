const shva = "ְ";
const patakh = "ַ";
const shadde = "ّ";
const hirik = "ִ";
const shuruk = "ּ";

const sad = "צ";
const dad = "צ׳";
const ghain = "ע׳";
const kaf = "ק";
const kha = "ח";

const sadExplanation = "צ זה האות ص, נהגית כמו ס' כבדה"
const dadExplanation = "צ' זה האות ض, נהגית כמו ד' כבדה"
const ghainExplanation = "ע' זה האות غ, נהגית בדומה לר' גרונית או ג' רפה"
const kafExplanation = "ק בלהג הצפוני או עירוני נהגית כמו א'. למשל קַרַא נהגה כמו אַרַאְ, או לִחֵק נהגה כמו לִחֵ-אְ"
const khaExplanation = "ח נהגית כמו ח מזרחית, ח' נהגית כמו ח רגילה";

export const AnswerInfo = {

    getInfo: function (word) {

        let infoArray = [];
        word = this.stripNiqqud(word);
        word = this.removeFirstWord(word);

        this.letterPronunciation(word, infoArray);

        return infoArray;
    },

    letterPronunciation: function (word, infoArray) {
        if (word.includes(sad)) {

            if (!word.includes(dad)) {
                infoArray.push(sadExplanation);
            } else {
                infoArray.push(dadExplanation);
            }
        }
        if (word.includes(ghain)) {
            infoArray.push(ghainExplanation);
        }
        if (word.includes(kaf)) {
            infoArray.push(kafExplanation);
        }
        if (word.includes(kha)) {
            infoArray.push(khaExplanation);
        }
    },

    stripNiqqud: function (word) {

        word = word.replaceAll(shva, "");
        word = word.replaceAll(shadde, "");
        word = word.replaceAll(hirik, "");
        word = word.replaceAll(patakh, "");
        word = word.replaceAll(shuruk, "");
        return word;
    },

    removeFirstWord: function (word) {

        let indexOfSpace = word.indexOf(" ");
        if (indexOfSpace == -1) indexOfSpace = 0;

        return word.substring(indexOfSpace, word.length);
    }

}
