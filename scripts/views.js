export class Label {
    constructor(id) {
        this.element = document.getElementById(id);
    }

    setText(text) {
        this.element.innerHTML = text;
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