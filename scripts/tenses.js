import { formsFuture } from "./grammar/measure-1-future.js";
import { formsPast } from "./grammar/measure-1-past.js";
import { formsPresent } from "./grammar/measure-1-present.js";
import { formsPresent210 } from "./grammar/measures-2-10-present.js";
import { formsFuture210 } from "./grammar/measures-2-10-future.js";
import { formsPast210 } from "./grammar/measures-2-10-past.js";
import { formsParticiple } from "./grammar/participle.js";

import { hebConjugatePast } from "./grammar/heb-past.js";
import { hebConjugatePresent } from "./grammar/heb-present.js";
import { hebConjugateFuture } from "./grammar/heb-future.js";

export const forms = Object.assign(formsFuture, formsPast, formsParticiple, formsPresent
    , formsPresent210, formsFuture210, formsPast210);

export const tenses = {
    future: {
        hebConjugate: hebConjugateFuture,
        answerPrefix: " רַח ",
        specifyPronounGender: true,
        confuseWithPronouns: false,
    },
    past: {
        hebConjugate: hebConjugatePast,
        answerPrefix: " ",
        specifyPronounGender: true,
        confuseWithPronouns: true,
    },
    participle: {
        hebConjugate: hebConjugatePresent,
        answerPrefix: " ",
        specifyPronounGender: false,
        confuseWithPronouns: false,
    },
    present: {
        hebConjugate: hebConjugatePresent,
        answerPrefix: " ",
        specifyPronounGender: false,
        confuseWithPronouns: false,
    },
    present210: {
        hebConjugate: hebConjugatePresent,
        answerPrefix: " ",
        specifyPronounGender: false,
        confuseWithPronouns: false,
    },
    past210: {
        hebConjugate: hebConjugatePast,
        answerPrefix: " ",
        specifyPronounGender: true,
        confuseWithPronouns: true,
    },
    future210: {
        hebConjugate: hebConjugateFuture,
        answerPrefix: " רַח ",
        specifyPronounGender: true,
        confuseWithPronouns: false,
    }
}