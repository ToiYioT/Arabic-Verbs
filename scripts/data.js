import { allRoots } from "./roots-data.js";

function createPronoun(name, hebrew, arabic, gender = "") {
    return {
        name: name,
        hebrew: hebrew,
        arabic: arabic,
        gender: gender
    }
}

export const formNamesPast = ["katab", "nizel", "haka", "nisi", "habb", "rah", "jab"];
export const formNamesParticiple = ["saken", "rayeh", "mashi", "mittakked", "mawjood"];
export const formNamesPresent = ["buktol", "bimsek", "bisma", "biruh", "bijib", "bihki", "binsa", "bihibb", "bihutt"];
export const formNamesFuture = ["yuktol", "yimsek", "yisma", "iruh", "ijib", "ihki", "insa", "ihibb", "ihutt"];

export const pronouns = [
    createPronoun("Ana", "אני", "אַנַא", "זכר"),
    createPronoun("Inte", "אתה", "אִנְתֵ"),
    createPronoun("Inti", "את", "אִנְתִי"),
    createPronoun("Huwe", "הוא", "הֻוֵّ"),
    createPronoun("Hiye", "היא", "הִיֵّ"),
    createPronoun("Ihna", "אנחנו", "אִחְנַא", "זכר"),
    createPronoun("Intu", "אתם", "אִנְתוּ"),
    createPronoun("Humme", "הם", "הֻםֵّ"),

    createPronoun("AnaFem", "אני", "אַנַא", "נקבה"),
    createPronoun("IhnaFem", "אנחנו", "אִחְנַא", "נקבה"),
    createPronoun("IntuFem", "אתן", "אִנְתוּ"),
    createPronoun("Henne", "הן", "הֵןֵّ"),
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
    console.log(filteredData);
    return filteredData;
}