import {
    formNamesPast, formNamesParticiple, formNamesFuture, formNamesPresent
} from "./data.js";

let allFormNames = [...formNamesPast, ...formNamesPresent, ...formNamesFuture,
...formNamesParticiple];
let allLessons = ["", 1, 2, 3, 4, 5, 6, 7, 8];

export function getFilteringParams() {

    let formFiltering;
    let lessonFiltering;

    let urlParams = new URLSearchParams(document.location.search);
    let forms = urlParams.get("forms"); // all, future, past, present, participle
    let lessonFrom = parseInt(urlParams.get("lf"));
    let lessonTo = parseInt(urlParams.get("lt"));

    switch (forms) {
        case "all":
            formFiltering = allFormNames;
            break;
        case "future":
            formFiltering = formNamesFuture;
            break;
        case "past":
            formFiltering = formNamesPast;
            break;
        case "present":
            formFiltering = formNamesPresent;
            break;
        case "participle":
            formFiltering = formNamesParticiple;
            break;
        default:
            formFiltering = allFormNames;
    }

    let lessonQueryFailed = isNaN(lessonFrom) || isNaN(lessonTo) ||
        lessonFrom < 1 || lessonTo > 8 || lessonFrom > lessonTo;

    if (lessonQueryFailed) {
        lessonFiltering = allLessons;
    } else {
        let lessonArray = [];
        for (let i = lessonFrom; i <= lessonTo; i++) {
            lessonArray.push(i);
        }
        lessonFiltering = lessonArray;
    }
    let output = [formFiltering, lessonFiltering];
    return output;
}

export function getConfuseType() {
    let urlParams = new URLSearchParams(document.location.search);
    let confuseQuery = urlParams.get("confuse");// forms, pronouns, mixed?
    let confuseType;

    switch (confuseQuery) {
        case "form":
            confuseType = "form";
            break;
        case "pronoun":
            confuseType = "pronoun";
            break;
        case "mixed":
            confuseType = "mixed";
            break;
        default:
            confuseType = "form";
    }
    return confuseType;
}