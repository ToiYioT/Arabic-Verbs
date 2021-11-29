import { formsFuture } from "./measure-1-future.js";
import { formsPast } from "./measure-1-past.js";
import { hebConjugatePast } from "./heb-past.js";
import { hebConjugateFuture } from "./heb-future.js";

export const forms = Object.assign(formsFuture, formsPast);

export const tenses = {
    future: {
        hebConjugate: hebConjugateFuture,
        answerPrefix: " רַח ",
    },
    past: {
        hebConjugate: hebConjugatePast,
        answerPrefix: " ",
    }
}