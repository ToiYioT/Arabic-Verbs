import { util } from "./util.js";

export class Label {
    constructor(id) {
        this.element = document.getElementById(id);
    }

    setText(text) {
        this.element.innerHTML = text;
    }
}

export class MainButton {
    constructor(id, handler, onEndQuiz) {
        this.element = document.getElementById(id);
        this.handler = handler;
        this.onEndQuiz = onEndQuiz;
        this.state = "";
    }

    setShowAnswers() {
        this.enable();
        this.setText("הצג תשובות");
        this.state = "show-answers";
    }

    setChooseAnswer() {
        this.disable();
        this.setText("בחרו באחת התשובות");
        this.state = "choose-answer";
    }

    setNextQuestion() {
        this.enable();
        this.setText("השאלה הבאה");
        this.state = "next-question";
    }

    setEndQuiz() {
        this.element.onclick = this.onEndQuiz;
        this.element.classList.remove("faded-button");
        this.element.classList.add("finish-button");
        this.setText("לסיום");
        this.state = "end-quiz";
    }

    setRestartQuiz(onResetGame) {
        this.setText("לתרגל עוד");
        this.element.classList.remove("finish-button");
        this.state = "restart-quiz";
        this.element.onclick = "";
        setTimeout(() => this.element.onclick = onResetGame, 1000);
    }

    setResetGame(onResetGame) {
        this.element.onclick = onResetGame;
    }

    // states for syllable input
    setChooseSyllable() {
        this.disable();
        this.setText("הרכיבו את התשובה");
    }

    setSubmitAnswer(handler) {
        this.element.classList.remove("faded-button");
        this.setText("לאישור");
        this.element.onclick = handler;
    }
    ///////

    setText(text) {
        this.element.innerHTML = text;
    }

    enable() {
        this.element.onclick = this.handler;
        this.element.classList.remove("faded-button");
    }

    disable() {
        this.element.onclick = "";
        this.element.classList.add("faded-button");
    }
}

export class Checkbox {
    constructor(id) {
        this.element = document.getElementById(id);
        this.changed = false;

        const self = this;
        this.onCheckboxChange = function () {
            self.changed = true;
        }

        this.element.addEventListener("change", this.onCheckboxChange);
    }


    isChanged() {
        let temp = this.changed;
        this.changed = false;
        return temp;
    }

    checked() {
        return this.element.checked;
    }
}

export class AnswerButton {
    constructor(num, callback, parent) {
        this.answerNum = num;
        this.answer = "";
        this.callback = callback;

        const answerHolder = util.createElement(parent, "div", "answer-holder");
        this.element = util.createElement(answerHolder, "div", "answer");

        const self = this;
        this.element.onclick = function () {
            self.callback(self);
        }

        this.correctIcon = util.createElement(answerHolder, "img", "icon");
        this.incorrectIcon = util.createElement(answerHolder, "img", "icon");
        this.correctIcon.src = "icons/correct.png";
        this.incorrectIcon.src = "icons/incorrect.png";
    }

    setNoIcons() {
        this.correctIcon.classList.add("hide");
        this.incorrectIcon.classList.add("hide");
    }

    setCorrect() {
        this.element.classList.add("correct");
        this.correctIcon.classList.remove("hide");
    }
    setIncorrect() {
        this.element.classList.add("incorrect");
        this.incorrectIcon.classList.remove("hide");
    }
    setFaded() {
        this.element.classList.add("faded");
    }

    removeStyles() {
        this.element.classList.remove("correct");
        this.element.classList.remove("incorrect");
        this.element.classList.remove("faded");
    }

    setAnswer(text) {
        this.answer = text;
        this.element.innerHTML = text;
    }
}