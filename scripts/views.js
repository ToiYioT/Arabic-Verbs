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
    constructor(num, callback) {
        this.answerNum = num;
        this.answer = "";
        this.callback = callback;
        this.element = document.getElementById("answer" + num);

        const self = this;
        this.element.onclick = function () {
            self.callback(self);
        }

        this.correctIcon = document.getElementById("icon-correct" + num)
        this.incorrectIcon = document.getElementById("icon-incorrect" + num)
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