import { formsFuture } from "./measure-1-future.js";
import { formsPast } from "./measure-1-past.js";
import { formsPresent } from "./measure-1-present.js";
import { formsParticiple } from "./participle.js";

import { hebConjugatePast } from "./heb-past.js";
import { hebConjugatePresent } from "./heb-present.js";
import { hebConjugateFuture } from "./heb-future.js";

export const forms = Object.assign(formsFuture, formsPast, formsParticiple, formsPresent);

export const tenses = {
    future: {
        hebConjugate: hebConjugateFuture,
        answerPrefix: " רַח ",
        specifyPronounGender: true,
    },
    past: {
        hebConjugate: hebConjugatePast,
        answerPrefix: " ",
        specifyPronounGender: true,
    },
    participle: {
        hebConjugate: hebConjugatePresent,
        answerPrefix: " ",
        specifyPronounGender: false,
    },
    present: {
        hebConjugate: hebConjugatePresent,
        answerPrefix: " ",
        specifyPronounGender: false,
    }
}