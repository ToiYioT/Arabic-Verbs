
var questionQueue = [];
var wrongAnswersQueue = [];
var incorrectAnswer = false;
var questionNumber = 0;
var currentQuestionParams;

let questionHistory = [];

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

function registerIncorrectAnswer(question, correctAnswer, clickedAnswer) {
    if (mode == MODE_INFINITE) {
        incorrectAnswer = true;
        questionQueue.push(currentQuestionParams);

    }
    if (mode == MODE_QUIZ) {
        wrongAnswersQueue.push(currentQuestionParams);
        questionHistory.push(
            {
                question: question,
                correctAnswer: correctAnswer,
                clickedAnswer: clickedAnswer
            });
    }
}

function registerCorrectAnswer(question, correctAnswer, clickedAnswer) {
    correctAnswerCounter++;
    questionHistory.push(
        {
            question: question,
            correctAnswer: correctAnswer,
            clickedAnswer: clickedAnswer
        });
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
    questionHistory.length = 0;

    const numOfQuestionsToAdd = isQuizMode() ? totalNumOfQuestions - questionQueue.length : 5;
    addRandomQuestionsToQueue(numOfQuestionsToAdd);
}

function isQuizMode() {
    return mode == MODE_QUIZ;
}

function getSummary() {

    let str = "";
    for (let i = 0; i < questionHistory.length; i++) {
        const correctAnswer = questionHistory[i].correctAnswer;
        const clickedAnswer = questionHistory[i].clickedAnswer;
        const correct = clickedAnswer == correctAnswer;

        str += '<div class="summary-question';
        if (!correct) {
            str += ' summary-question-false';
        }
        str += '">';

        str += '<div class="summary-question-title">';
        str += questionHistory[i].question;
        str += "</div>";

        if (correct) {
            str += " - ";
        } else {
            str += "<br>";
            str += "ענית: ";
            str += questionHistory[i].clickedAnswer + "<br>";
            str += "התשובה הנכונה: ";
        }
        str += questionHistory[i].correctAnswer;
        str += "</div>";
    }

    return str;
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
    getSummary,
}