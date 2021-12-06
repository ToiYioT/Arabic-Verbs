
var questionQueue = [];
var incorrectAnswer = false;
var questionNumber = 0;
var currentQuestionParams;

var roots, pronouns;

function addRandomQuestionsToQueue(numberOfQuestionsToAdd) {

    for (let i = 0; i < numberOfQuestionsToAdd; i++) {
        let randomParams = generateRandomQuestionParams();
        questionQueue.push(randomParams);
    }
}

function registerIncorrectAnswer() {
    incorrectAnswer = true;
    questionQueue.push(currentQuestionParams);
}

function handleNewQuestion() {

    questionNumber++;

    if (!incorrectAnswer) {
        addRandomQuestionsToQueue(1);
    }
    incorrectAnswer = false;
}

function getQuestionNumber() {
    return questionNumber;
}

function getCurrentQuestion() {

    currentQuestionParams = questionQueue[questionNumber];
    return currentQuestionParams;
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

function resetGame(rootsFromMain, pronounsFromMain) {
    roots = rootsFromMain;
    pronouns = pronounsFromMain;

    questionNumber = 0;
    questionQueue.length = 0;
    addRandomQuestionsToQueue(5);
}


export const questionDispenser = {
    addRandomQuestionsToQueue,
    registerIncorrectAnswer,
    resetGame,
    getCurrentQuestion,
    handleNewQuestion,
    getQuestionNumber,
}