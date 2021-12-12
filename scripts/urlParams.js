import {
    formNamesPast, formNamesParticiple, formNamesFuture, formNamesPresent, formNamesPresent210
    , formNamesFuture210, formNamesPast210, allFormNames,
} from "./data.js";

let allLessons = ["", 1, 2, 3, 4, 5, 6, 7, 8];

export function getFilteringParams() {

    let formFiltering;
    let lessonFiltering;

    let urlParams = new URLSearchParams(document.location.search);
    let formURL = urlParams.get("form"); // all, future, past, present, participle
    let lessonFrom = parseInt(urlParams.get("lf"));
    let lessonTo = parseInt(urlParams.get("lt"));
    let hebrewWord = urlParams.get("hebrew");
    if (hebrewWord) hebrewWord = hebrewWord.split(",");

    switch (formURL) {
        case null:
            formFiltering = allFormNames;
            break;
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
        case "present-future":
            formFiltering = [...formNamesPresent, ...formNamesFuture];
            break;
        case "measure1":
            formFiltering = [...formNamesPresent, ...formNamesFuture, ...formNamesPast];
            break;
        case "210":
            formFiltering = [...formNamesPresent210, ...formNamesPast210, ...formNamesFuture210];
            break;
        case "participle":
            formFiltering = formNamesParticiple;
            break;
        default:
            let arrayOfForms = formURL.split(",");

            if (arrayOfForms.every((form) => allFormNames.includes(form))) {
                formFiltering = arrayOfForms;
            } else {
                console.log("Can't read form from urlParam, defaulting to all forms");
                formFiltering = allFormNames;
            }
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

    let output = {
        forms: formFiltering,
        lessons: lessonFiltering,
        words: hebrewWord
    };
    // console.log(output);

    return output;
}

export function getConfuseType() {
    let urlParams = new URLSearchParams(document.location.search);
    let confuseQuery = urlParams.get("confuse");// forms, pronouns, mixed?
    let confuseType;

    switch (confuseQuery) {
        case null:
            confuseType = "form";
            break;
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
            console.log("Can't read confuse type from urlParam, defaulting form");
            confuseType = "form";
    }
    return confuseType;
}