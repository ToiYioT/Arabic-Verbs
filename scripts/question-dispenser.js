
var questionQueue = [];
var wrongAnswersQueue = [];
var incorrectAnswer = false;
var questionNumber = 0;
var currentQuestionParams;

var roots, pronouns;
const MODE_INFINITE = "infinite";
const MODE_QUIZ = "quiz";
var mode = MODE_INFINITE;
const totalNumOfQuestions = 10;
var correctAnswerCounter;


function addRandomQuestionsToQueue(numberOfQuestionsToAdd) {

    for (let i = 0; i < numberOfQuestionsToAdd; i++) {
        let randomParams = generateRandomQuestionParams();
        questionQueue.push(randomParams);
    }
}

function registerIncorrectAnswer() {
    if (mode == MODE_INFINITE) {
        incorrectAnswer = true;
        questionQueue.push(currentQuestionParams);

    }
    if (mode == MODE_QUIZ) {
        wrongAnswersQueue.push(currentQuestionParams);
    }
}

function registerCorrectAnswer() {
    correctAnswerCounter++;
}

function handleNewQuestion() {

    questionNumber++;

    if (mode == MODE_INFINITE) {
        if (!incorrectAnswer) {
            addRandomQuestionsToQueue(1);
        }
        incorrectAnswer = false;
    }
}

function getQuestionNumber() {
    return questionNumber;
}

function getQuizLength() {
    return totalNumOfQuestions;
}

function getNumOfWrongAnswers() {
    return wrongAnswersQueue.length;
}

function getCurrentQuestion() {

    currentQuestionParams = questionQueue[questionNumber];
    return currentQuestionParams;
}

function isLastQuestion() {
    return questionNumber == totalNumOfQuestions - 1;
}

function generateRandomQuestionParams() {

    let randomRootIndex = Math.floor(Math.random() * roots.length);
    let pronounIndex = Math.floor(Math.random() * pronouns.length);

    let randomQuestionParams = {
        root: roots[randomRootIndex],
        pronoun: pronouns[pronounIndex]
    }

    return randomQuestionParams;
}

function getScoreTitleText() {
    if (mode == MODE_QUIZ) {
        return `שאלה מספר ${questionNumber + 1} מתוך ${totalNumOfQuestions}`;

    } else if (mode == MODE_INFINITE) {
        return `ענית נכון על ${correctAnswerCounter} שאלות מתוך ${questionNumber + 1}`;
    }
}

function resetGame(gameMode, rootsFromMain, pronounsFromMain) {

    mode = gameMode;
    roots = rootsFromMain;
    pronouns = pronounsFromMain;

    correctAnswerCounter = 0;
    questionNumber = -1;
    questionQueue = [...wrongAnswersQueue];
    wrongAnswersQueue.length = 0;

    let numOfQuestionsToAdd = isQuizMode() ? totalNumOfQuestions : 5;
    addRandomQuestionsToQueue(numOfQuestionsToAdd);
}

function isQuizMode() {
    return mode == MODE_QUIZ;
}


export const questionDispenser = {
    addRandomQuestionsToQueue,
    registerIncorrectAnswer,
    registerCorrectAnswer,
    resetGame,
    getCurrentQuestion,
    handleNewQuestion,
    getQuestionNumber,
    getNumOfWrongAnswers,
    isLastQuestion,
    isQuizMode,
    getScoreTitleText,
    getQuizLength,
}