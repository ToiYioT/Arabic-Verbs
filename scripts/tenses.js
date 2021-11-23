import { formsFuture } from "./measure-1-future.js";
import { formsPast } from "./measure-1-past.js";
import { hebConjugatePast } from "./heb-past.js";
import { hebConjugateFuture } from "./heb-future.js";
import {
    rootsArabicPast, rootsHebrewPast, formNamesPast,
    formNamesFuture, rootsArabicFuture, rootsHebrewFuture
} from "./data.js";

export const future = {
    forms: formsFuture,
    formNames: formNamesFuture,
    rootsArabic: rootsArabicFuture,
    rootsHebrew: rootsHebrewFuture,
    hebConjugate: hebConjugateFuture,
    answerPrefix: " רַח ",
}

export const past = {
    forms: formsPast,
    formNames: formNamesPast,
    rootsArabic: rootsArabicPast,
    rootsHebrew: rootsHebrewPast,
    hebConjugate: hebConjugatePast,
    answerPrefix: " ",
}