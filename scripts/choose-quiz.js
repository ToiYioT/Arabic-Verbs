import { AnswerButton } from "./views.js";
import { util } from "./util.js";
import { conjugator } from "./conjugator.js";
import { forms, tenses } from "./tenses.js";
import { getConfuseType } from "./urlParams.js";

const numOfAnswers = 4;

let answerButtons = [];
let getAnswersFunction;
let correctAnswer;

let tense;
let questionHolder;
let questionDispenser;

let playSound;
let updateScore;
let mainButton;

function init(qDispenser, button, playSoundFunction, updateScoreFunction) {
    questionDispenser = qDispenser;
    playSound = playSoundFunction;
    updateScore = updateScoreFunction;
    mainButton = button;

    questionHolder = document.getElementById("question");
    setConfuseType();

    for (let i = 0; i < numOfAnswers; i++) {
        answerButtons.push(new AnswerButton(i + 1, answerClickHandler));
    }
}

function initQuestionFromParams(qParams) {

    hideAllIcons();
    questionAnswered = false;
    setTense(qParams);
    // first one is the correct root form:
    let answerForms = createAnswerForms(qParams);
    let answers = getAnswersFunction(qParams.root.arabic, answerForms, qParams.pronoun);

    correctAnswer = answers[0];
    util.shuffle(answers);
    setAnswersToButtons(answers);
}

function setTense(qParams) {
    const form = forms[qParams.root.form];
    tense = tenses[form.tense];
}

var questionAnswered = false;
function answerClickHandler(clickedButton) {

    if (questionAnswered) return;
    questionAnswered = true;

    for (let i = 0; i < answerButtons.length; i++) {

        if (answerButtons[i].answer == correctAnswer) {
            answerButtons[i].setCorrect();

            if (clickedButton == answerButtons[i]) {
                questionDispenser.registerCorrectAnswer(
                    questionHolder.innerHTML,
                    correctAnswer,
                    answerButtons[i].answer);
                playSound("correct");
            }
        } else {

            if (clickedButton == answerButtons[i]) {
                answerButtons[i].setIncorrect();
                questionDispenser.registerIncorrectAnswer(
                    questionHolder.innerHTML,
                    correctAnswer,
                    answerButtons[i].answer);
                playSound("incorrect");

            } else {
                answerButtons[i].setFaded();
            }
        }
    }

    if (questionDispenser.isQuizMode() && questionDispenser.isLastQuestion()) {
        mainButton.setEndQuiz();

    } else {
        mainButton.setNextQuestion();
    }
    updateScore();
}

function createAnswerForms(qParams) {

    let form = forms[qParams.root.form];
    let pronoun = qParams.pronoun;

    let answerForms = [];

    answerForms.push(form);
    answerForms.push(forms[form[pronoun.name].distractingForms[0]]);
    answerForms.push(forms[form[pronoun.name].distractingForms[1]]);
    answerForms.push(forms[form[pronoun.name].distractingForms[2]]);

    return answerForms;
}

function setConfuseType() {
    let confuseType = getConfuseType();

    switch (confuseType) {
        case "form":
            getAnswersFunction = getAnswersConfuseWithForms;
            break;
        case "pronoun":
            getAnswersFunction = getAnswersConfuseWithPronouns;
            break;
        case "mixed":
            getAnswersFunction = getAnswersAlternateConfuse;
            break;
        default:
            getAnswersFunction = getAnswersConfuseWithForms;
    }
}

function getAnswersConfuseWithForms(rootArabic, answerForms, pronoun) {
    let answers = [];
    let rootForm = answerForms[0];

    for (let i = 0; i < numOfAnswers; i++) {
        let conjugateTo = answerForms[i];
        conjugator.rootProcessing(rootArabic, rootForm, conjugateTo);

        let answer = pronoun.arabic + tense.answerPrefix
            + conjugator.getWord(conjugateTo[pronoun.name].template);

        answer = util.substituteLetterAtEndToEndingLetter(answer, true);
        answer = util.postProcess(answer);
        answers.push(answer);
    }

    if (tense.confuseWithPronouns && pronoun.confusingPronoun != null) {
        answers = substituteLastAnswerWithConfusingPronoun(
            answers, pronoun, rootArabic, rootForm);
    }
    return answers;
}

function getAnswersAlternateConfuse(rootArabic, answerForms, correctPronoun) {
    if (Math.random() > 0.5) {
        return getAnswersConfuseWithForms(rootArabic, answerForms, correctPronoun);
    } else {
        return getAnswersConfuseWithPronouns(rootArabic, answerForms, correctPronoun);
    }
}

function getAnswersConfuseWithPronouns(rootArabic, answerForms, correctPronoun) {
    let answers = [];
    let correctAnswer;
    let confusingPronounAnswer = null;
    let confusingPronoun = correctPronoun.confusingPronoun;
    let rootForm = answerForms[0];

    pronouns = util.shuffle(pronouns);
    conjugator.rootProcessing(rootArabic, rootForm, rootForm);

    for (let i = 0; i < pronouns.length; i++) {

        let answer = correctPronoun.arabic + tense.answerPrefix
            + conjugator.getWord(rootForm[pronouns[i].name].template);

        answer = util.substituteLetterAtEndToEndingLetter(answer, true);
        answer = util.postProcess(answer);

        answers.push(answer);
        if (pronouns[i] == correctPronoun) {
            correctAnswer = answer;
        }
        if (tense.confuseWithPronouns && pronouns[i] == confusingPronoun) {
            confusingPronounAnswer = answer;
        }
    }
    answers = [...new Set(answers)]; // leave only unique answers
    answers = answers.filter(item => item !== correctAnswer); // remove correct ones
    answers = answers.filter(item => item !== confusingPronounAnswer); // remove confusing pronoun
    if (confusingPronounAnswer != null) {
        answers.unshift(confusingPronounAnswer); // add back the confusingPronoun answer
    }
    answers.unshift(correctAnswer); // add back the correct one at the start of the array
    answers.length = 4;
    return answers;
}

function setAnswersToButtons(answers) {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].setAnswer(answers[i]);
        answerButtons[i].removeStyles();
    }
}

function hideAllIcons() {
    for (let i = 0; i < 4; i++) {
        answerButtons[i].setNoIcons();
    }
}

function substituteLastAnswerWithConfusingPronoun(
    answers, pronoun, rootArabic, rootForm) {
    let confusingPronoun = pronoun.confusingPronoun;
    conjugator.rootProcessing(rootArabic, rootForm, rootForm);

    let answer = pronoun.arabic + tense.answerPrefix
        + conjugator.getWord(rootForm[confusingPronoun.name].template);
    answer = util.substituteLetterAtEndToEndingLetter(answer, true);
    answer = util.postProcess(answer);
    answers[answers.length - 1] = answer;
    return answers;
}

function onTimerEnded() {
    mainButton.setChooseAnswer();
}

export const chooseQuiz = {
    init,
    initQuestionFromParams,
    onTimerEnded,
}