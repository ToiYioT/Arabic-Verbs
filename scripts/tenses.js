import { formsFuture } from "./measure-1-future.js";
import { formsPast } from "./measure-1-past.js";
import { formsPresent } from "./present.js";

import { hebConjugatePast } from "./heb-past.js";
import { hebConjugatePresent } from "./heb-present.js";
import { hebConjugateFuture } from "./heb-future.js";

export const forms = Object.assign(formsFuture, formsPast, formsPresent);

export const tenses = {
    future: {
        hebConjugate: hebConjugateFuture,
        answerPrefix: " רַח ",
    },
    past: {
        hebConjugate: hebConjugatePast,
        answerPrefix: " ",
    },
    present: {
        hebConjugate: hebConjugatePresent,
        answerPrefix: " ",
    }
}