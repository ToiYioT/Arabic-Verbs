import { allRoots } from "./roots-data.js";

function createPronoun(name, hebrew, arabic, gender = "") {
    return {
        name: name,
        hebrew: hebrew,
        arabic: arabic,
        gender: gender,
        confusingPronoun: null,
        setConfusingPronoun: function (confusingPronoun) {
            this.confusingPronoun = confusingPronoun;
        }
    }
}


export const formNamesPast = ["katab", "nizel", "haka", "nisi", "habb", "rah", "jab"];
export const formNamesParticiple = ["saken", "rayeh", "mashi", "mittakked", "mawjood"];
export const formNamesPresent = ["buktol", "bimsek", "bisma", "biruh", "bijib", "bihki", "binsa", "bihibb", "bihutt"];
export const formNamesFuture = ["yuktol", "yimsek", "yisma", "iruh", "ijib", "ihki", "insa", "ihibb", "ihutt"];
export const formNamesPresent210 = ["bikarrer", "bikarreb", "bisaafer", "bittallam", "bitnaazal", "binimsek", "bishtrel", "bistaamel"];
export const formNamesPast210 = ["karrar", "saafar", "tallam", "tnaazal", "inmasak", "ishtaral", "istaamal"];
export const formNamesFuture210 = ["yikarrer", "yikarreb", "yisaafer", "yittallam", "yitnaazal", "yinimsek", "yishtrel", "yistaamel"];

export const allFormNames = formNamesPast.concat(formNamesPresent, formNamesFuture,
    formNamesParticiple, formNamesPresent210, formNamesPast210, formNamesFuture210);

const Ana = createPronoun("Ana", "אני", "אַנַא", "זכר");
const Inte = createPronoun("Inte", "אתה", "אִנְתֵ");
const Inti = createPronoun("Inti", "את", "אִנְתִי");
const Huwe = createPronoun("Huwe", "הוא", "הֻוֵّ");
const Hiye = createPronoun("Hiye", "היא", "הִיֵّ");
const Ihna = createPronoun("Ihna", "אנחנו", "אִחְנַא", "זכר");
const Intu = createPronoun("Intu", "אתם", "אִנְתוּ");
const Humme = createPronoun("Humme", "הם", "הֻםֵّ");

const AnaFem = createPronoun("AnaFem", "אני", "אַנַא", "נקבה");
const IhnaFem = createPronoun("IhnaFem", "אנחנו", "אִחְנַא", "נקבה");
const IntuFem = createPronoun("IntuFem", "אתן", "אִנְתוּ");
const Henne = createPronoun("Henne", "הן", "הֵןֵّ");

Ana.setConfusingPronoun(Inti);
AnaFem.setConfusingPronoun(Inti);
Inti.setConfusingPronoun(Ana);

export const pronounsConst = [
    Ana, AnaFem, Inte, Inti, Huwe, Hiye,
    Ihna, IhnaFem, Intu, IntuFem, Humme, Henne];


export function filterRoots(filteringParams) {
    // var startTime = performance.now()
    let forms = filteringParams.forms;
    let lessons = filteringParams.lessons;
    let hebrewWords = filteringParams.words;
    let arabicRoot = filteringParams.arabic;

    let filteredData = [];

    for (let i = 0; i < allRoots.length; i++) {

        let formMatch = forms && forms.includes(allRoots[i].form) || forms === null;
        let lessonMatch = lessons && lessons.includes(allRoots[i].lesson) || lessons === null;
        let hebrewWordMatch = hebrewWords &&
            hebrewWords.includes(allRoots[i].hebrew) || hebrewWords == null;

        if (formMatch && lessonMatch && hebrewWordMatch) {
            filteredData.push(allRoots[i]);
        }
    }

    // console.log(`Filtered: ${filteredData.length} roots`);
    // var endTime = performance.now()
    // console.log(`Call to filteringRoots took ${endTime - startTime} milliseconds`);

    return filteredData;
}

export function getArabicRootOfForm(arabicRoot, form) {

    for (let i = 0; i < allRoots.length; i++) {
        if (allRoots[i].arabic == arabicRoot && allRoots[i].form == form) {
            return allRoots[i];
        }
    }
}