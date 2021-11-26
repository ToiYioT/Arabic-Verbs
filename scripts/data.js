import { allRoots } from "./roots-data.js";

function createPronoun(name, hebrew, arabic) {
    return {
        name: name,
        hebrew: hebrew,
        arabic: arabic
    }
}

export const formNamesPast = ["katab", "nizel", "haka", "nisi", "habb", "rah", "jab"];
export const formNamesFuture = ["yuktol", "yimsek", "yisma", "iruh", "ijib", "ihki", "insa", "ihibb", "ihutt"];

export const pronouns = [
    createPronoun("Ana", "אני", "אַנַא"),
    createPronoun("Inte", "אתה", "אִנְתֵ"),
    createPronoun("Inti", "את", "אִנְתִי"),
    createPronoun("Huwe", "הוא", "הֻוֵّ"),
    createPronoun("Hiye", "היא", "הִיֵّ"),
    createPronoun("Ihna", "אנחנו", "אִחְנַא"),
    createPronoun("Intu", "אתם", "אִנְתוּ"),
    createPronoun("Humme", "הם", "הֻםֵّ"),
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
    return filteredData;
}