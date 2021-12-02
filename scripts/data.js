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

export const pronouns = [
    Ana, Inte, Inti, Huwe, Hiye, Ihna, Intu, Humme,
    AnaFem, IhnaFem, IntuFem, Henne
]


export function filterRoots(forms, lessons) {

    let filteredData = [];

    for (let i = 0; i < allRoots.length; i++) {

        let formMatch = forms.indexOf(allRoots[i].form) > -1;
        let lessonMatch = lessons.indexOf(allRoots[i].lesson) > -1;

        if (formMatch && lessonMatch) {
            filteredData.push(allRoots[i]);
        }
    }
    // console.log(filteredData);
    return filteredData;
}