
window.addEventListener('load', (event) => {
    questionHolder = document.getElementById("question");
    nextButton = document.getElementById("next-button");

    nextButton.addEventListener("click", initQuestion);

    for (let i = 0; i < 3; i++) {
        answerHolders.push(document.getElementById("answer" + (i + 1)));
        answerHolders[i].addEventListener("click", answerClickHandler);
    }

    initQuestion();
});

function initQuestion() {

    answers.length = 0;
    createRandomNonRepeatingForms();

    let rootForm = answerForms[0];
    let formName = rootForm.formName;

    let pronounNum = Math.floor(Math.random() * pronounFunctions.length);
    let pronounFunction = pronounFunctions[pronounNum];

    let randomWordNum = Math.floor(Math.random() * roots[formName].length);
    let root = roots[formName][randomWordNum];
    let rootHebrew = rootsHebrew[formName][randomWordNum];

    questionHolder.innerHTML = rootHebrew + " + " + pronounsHebrew[pronounNum] + "<br/>";

    for (let i = 0; i < 3; i++) {

        let conjugateTo = answerForms[i];
        doProcessing(root, rootForm, conjugateTo);
        answers.push(pronounsArabic[pronounNum] + " " + conjugateTo[pronounFunction]());
    }
    correctAnswer = answers[0];
    shuffle(answers);

    for (let i = 0; i < answerHolders.length; i++) {
        answerHolders[i].innerHTML = answers[i];
        answerHolders[i].classList.remove("correct");
        answerHolders[i].classList.remove("incorrect");
    }
}

function answerClickHandler(event) {
    let holderAnswer = event.target.innerHTML;
    if (holderAnswer == correctAnswer) {
        event.target.classList.add("correct");
        console.log("CorrectAnswer!");
    } else {
        event.target.classList.add("incorrect");
        console.log("No!");
    }
}

var answerHolders = [];
var answers = [];
var correctAnswer;

var answerForms = [];
function createRandomNonRepeatingForms() {

    answerForms.length = 0;

    let randomFormNum = Math.floor(Math.random() * formNames.length);
    let formName = formNames[randomFormNum];
    let form = forms[formName];
    answerForms.push(form);

    if (form == katab || form == nizel) {
        if (form == katab) {
            answerForms.push(nizel);
        }
        if (form == nizel) {
            answerForms.push(katab);
        }
    }
    do {
        let randomFormNum = Math.floor((Math.random() * (formNames.length - 2)) + 2);
        let formName = formNames[randomFormNum];
        let form = forms[formName];
        if (answerForms.indexOf(form) == -1) {
            answerForms.push(form);
        }
    } while (answerForms.length < 3)
}

var questionHolder;
var nextButton;
var answer1Holder, answer2Holder, answer3Holder;

const pronounFunctions = ["getAna", "getInte", "getInti", "getHuwe", "getHiye", "getIhna", "getIntu", "getHumme"];
const pronounsArabic = ["אַנַא", "אִנְתֵ", "אִנְתִי", "הֻוֵّ", "הִיֵّ", "אִחְנַא", "אִנְתוּ", "הֻםֵّ"];
const pronounsHebrew = ["אני", "אתה", "את", "הוא", "היא", "אנחנו", "אתם", "הם"];

const katabHebrew = ["ביקש", "חתך/ הפסיק/ קטע/ חצה ניתק", "התגורר", "העביר/ עבר דירה", "נשבע", "עבר", "ישב", "ניגב", "למד", "הקדים/ עקף את...", "אכל", "בדק", "שבר", "שחה", "שילם/ דחף", "הודה", "ניחש", "לקח", "שלח", "היכה", "צחק", "ברח", "בישל", "שתק", "הרים", "פתח", "הבטיח", "צבע", "צבע", "קרא", "שאל", "צחצח/ הבריש", "נשף", "הזמין", "התעטש", "רץ", "נשף", "הזמין", "התעטש", "רץ"];
const katabArabic = ["טלבּ", "קטע", "סכּן", "נקל", "חלף", "מרק", "קעד", "מסח", "דרס", "סבּק", "אכּל", "פחץ", "כּסר", "סבּח", "דפע", "שכּר", "חזר", "אח'ד", "בּעת", "צ'רבּ", "צ'חכּ", "הרבּ", "טבּח'", "סכּת", "רפע", "פתח", "ועד", "צבּע'", "דהן", "קרא", "סאל", "פרכּ", "נפח'", "עזם", "עטס", "רכּץ'", "נפח'", "עזם", "עטס", "רכּץ'"];
const nizelHebrew = ["שתה", "ירד", "הבין", "חזר", "יכול", "ידע", "הספיק,השיג את, רדף אחרי", "נולד", "לבש", "החזיק, תפס, עצר", "רכב", "הפסיד", "הרוויח", "היה דומה ל...", "שנא", "עשה", "נחלש, רזה", "הרגיש", "הגיע", "הסתיים", "שמע", "התייאש", "הצליח", "שיחק", "יצא, עלה", "חלם", "התעייף", "התרחב", "התייבש", "נבל", "נכח"];
const nizelArabic = ["שרבּ", "נזל", "פהם", "רג'ע", "קדר", "ערף", "לחק", "ח'לק", "לבּס", "מסכּ", "רכּבּ", "ח'סר", "כּסבּ", "שבּה", "כּרה", "עמל", "צ'עף", "שער", "וצל", "ח'לץ", "סמע", "יאס", "נג'ח", "לעבּ", "טלע", "חלם", "תעבּ", "וסע", "יבּס", "דבּל", "חצ'ר"];
const hakaHebrew = ["דיבר", "בנה", "מצא, פגש", "זרק, השליך", "טיגן", "השקה", "נשאר, היה", "עשה על האש"];
const hakaArabic = ["חכּא", "בּנא", "לקא", "רמא", "קלא", "סקא", "בּקא", "שוא"];
const nisiHebrew = ["שכח", "הלך", "התחיל", "ידע", "היה מרוצה", "בכה", "התייקר", "התעורר"];
const nisiArabic = ["נסי", "משי", "בּדי", "דרי", "רצ'י", "בּכּי", "ע'לי", "צחי"];
const habbHebrew = ["שם", "יצק, מזג", "אהב", "השתין", "זרק, שפך", "נשאר", "פירק", "הסתובב, עטף", "הריח", "פתר", "משך, מתח", "מצץ", "גזר", "השיב, ענה", "חיזק, מתח", "התמעט", "קפץ", "חנה", "ספר", "נשך", "צירף", "השתעל"];
const habbArabic = ["חטّ", "צבּّ", "חבּّ", "שח'ّ", "כּבּّ", "ט'לّ", "פכּّ", "לףّ", "שםّ", "חלّ", "מדّ", "מץّ", "קץّ", "רדّ", "שדّ", "קל", "נטّ", "צףّ", "עדّ", "עצ'ّ", "צ'םّّ", "קחّّ"];
const rahHebrew = ["הלך", "היה", "ראה", "ביקר", "אמר", "צם", "זכה", "נכנס, עבר", "קם", "נישק", "מת", "הסתובב"];
const rahArabic = ["ראח", "כּאן", "שאף", "זאר", "קאל", "צאם", "פאז", "פאת", "קאם", "בּאס", "מאת", "דאר"];
const jabHebrew = ["נהיה, נעשה, התחיל", "הביא", "חי", "מכר", "פחד", "ישן", "עף", "הוסיף", "אבד", "התעורר", "נרפא"];
const jabArabic = ["צאר", "ג'אבּ", "עאש", "בּאע", "ח'אף", "נאם", "טאר", "זאד", "צ'אע", "פאק", "טאבּ"];


function doProcessing(root, rootForm, toForm) {
    // console.log(...rootForm.processingToForm[toForm.formName]);

    root = substituteEndingLettersToNormal(root);
    separateRootIntoLetters(root);
    doProcess(...rootForm.processingToForm[toForm.formName]);
}

function doProcess(addFrom, addTo, copyFrom, copyTo, removeShaddeAt,
    substituteAt = -1, substituteWith = "") {

    addContentsOfLetterToAnother(addFrom, addTo);
    copyLetterToAnoter(copyFrom, copyTo);
    substituteLetterAt(substituteAt, substituteWith);
    if (removeShaddeAt > -1) {
        rootLetters[removeShaddeAt] = removeShadde(rootLetters[removeShaddeAt]);
    }
}

const letters = "אבגדהוזחטיכלמנסעפצקרשתץףךםן";
const endingLeggers = "ץףךםן";
const geresh = "׳";
const shadde = "ّ";

var gereshedLetter = "";
var rootLetters = ["", "", ""];
var rootGereshes = ["", "", ""];

function separateRootIntoLetters(root) {

    let startingIndex = 0;

    for (let i = 0; i < 3; i++) {
        let letterIndex = getIndexOfFirstLetterAfter(root, startingIndex);
        rootLetters[i] = root.substr(startingIndex, letterIndex - startingIndex);
        startingIndex = letterIndex;
    }
    checkGereshes();
}

function getIndexOfFirstLetterAfter(str, afterIndex) {
    for (let i = afterIndex + 1; i < str.length; i++) {
        if (letters.indexOf(str[i]) > -1) {
            return i;
        }
    }
    return str.length;
}

function checkGereshes() {
    gereshedLetter = "";
    for (let i = 0; i < 3; i++) {
        if (rootLetters[i].includes("'")) {
            rootLetters[i] = rootLetters[i].replace("'", '');
            gereshedLetter = rootLetters[i];
        }
    }
}

function addGeresh(str) {
    if (gereshedLetter == "") return str;

    let indexOfGereshedLetter = str.indexOf(gereshedLetter);
    indexOfGereshedLetter = getIndexOfFirstLetterAfter(str, indexOfGereshedLetter);

    return str.slice(0, indexOfGereshedLetter) +
        geresh + str.slice(indexOfGereshedLetter);
}

function substituteLetterAt(index, letter) {
    if (index > -1) {
        let str = rootLetters[index];
        rootLetters[index] = letter + str.substr(1, str.length);
    }
}

function copyLetterToAnoter(copyFrom, copyTo) {
    if (copyFrom == -1) return;
    rootLetters[copyTo] = rootLetters[copyFrom];
    rootGereshes[copyTo] += rootGereshes[copyFrom];
}

function addContentsOfLetterToAnother(addFrom, addTo) {
    if (addFrom == -1) return;
    rootLetters[addTo] += rootLetters[addFrom];
    rootGereshes[addTo] += rootGereshes[addFrom];
    rootGereshes[addFrom] = "";
}

function removeShadde(str) {
    if (str == -1) return;
    return str.replaceAll(shadde, "");
}

function getWord(template, index0, index1, index2) {

    // after separating the letters, a processing step is necessary,
    // for example to copy the second letter to the third, or combine the 
    // first and the second to the first, and the third to the second
    // ProcessRootLetters(processingScheme);

    if (index1 == -1) {
        rootLetters[0] = substituteLetterInTemplate(template, 0, index0, index2);
        rootLetters[1] = "";
        rootLetters[2] = substituteLetterInTemplate(template, 2, index2, template.length);

    } else if (index2 == -1) {
        rootLetters[0] = substituteLetterInTemplate(template, 0, index0, index1);
        rootLetters[1] = substituteLetterInTemplate(template, 1, index1, template.length);
        rootLetters[2] = "";

    } else {
        rootLetters[0] = substituteLetterInTemplate(template, 0, index0, index1);
        rootLetters[1] = substituteLetterInTemplate(template, 1, index1, index2);
        rootLetters[2] = substituteLetterInTemplate(template, 2, index2, template.length);
    }

    return addGeresh(rootLetters[0] +
        rootLetters[1] +
        rootLetters[2]);
}

function substituteLetterInTemplate(template, letterFromRoot, subAtIndex, untilIndex) {
    return rootLetters[letterFromRoot] + template.substring(subAtIndex + 1, untilIndex);
}

function substituteEndingLettersToNormal(word) {

    word = word.replaceAll("ץ", "צ");
    word = word.replaceAll("ף", "פ");
    word = word.replaceAll("ך", "כ");
    word = word.replaceAll("ם", "מ");
    word = word.replaceAll("ן", "נ");
    return word;
}



const katab = {

    formName: "katab",

    getAna: function () {
        var template = "כַתַבְת";
        return getWord(template, 0, 2, 4);
    },
    getInte: function () {
        var template = "כַתַבְת";
        return getWord(template, 0, 2, 4);
    },
    getInti: function () {
        var template = "כַתַבְתִי";
        return getWord(template, 0, 2, 4);
    },
    getHuwe: function () {
        var template = "כַתַב";
        return getWord(template, 0, 2, 4);
    },
    getHiye: function () {
        var template = "כַתְבַת";
        return getWord(template, 0, 2, 4);
    },
    getIhna: function () {
        var template = "כַתַבְנַא";
        return getWord(template, 0, 2, 4);
    },
    getIntu: function () {
        var template = "כַתַבְתוּ";
        return getWord(template, 0, 2, 4);
    },
    getHumme: function () {
        var template = "כַתַבוּ";
        return getWord(template, 0, 2, 4);
    },

    processingToForm: {
        "katab": [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, -1, -1, -1],
        "haka": [1, 0, 2, 1, -1],
        "nisi": [-1, -1, -1, -1, -1],
        "habb": [1, 0, 2, 1, -1],
        "rah": [1, 0, 2, 1, -1],
        "jab": [1, 0, 2, 1, -1],
    }


}
const nizel = {

    formName: "nizel",

    getAna: function () {
        var template = "נְזִלְת";
        return getWord(template, 0, 2, 4);
    },
    getInte: function () {
        var template = "נְזִלְת";
        return getWord(template, 0, 2, 4);
    },
    getInti: function () {
        var template = "נְזִלְתִי";
        return getWord(template, 0, 2, 4);
    },
    getHuwe: function () {
        var template = "נִזֵל";
        return getWord(template, 0, 2, 4);
    },
    getHiye: function () {
        var template = "נִזְלַת";
        return getWord(template, 0, 2, 4);
    },
    getIhna: function () {
        var template = "נְזִלְנַא";
        return getWord(template, 0, 2, 4);
    },
    getIntu: function () {
        var template = "נְזִלְתוּ";
        return getWord(template, 0, 2, 4);
    },
    getHumme: function () {
        var template = "נִזְלוּ";
        return getWord(template, 0, 2, 4);
    },

    processingToForm: {
        "katab": [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, -1, -1, -1],
        "haka": [1, 0, 2, 1, -1],
        "nisi": [-1, -1, -1, -1, -1],
        "habb": [1, 0, 2, 1, -1],
        "rah": [1, 0, 2, 1, -1],
        "jab": [1, 0, 2, 1, -1],
    }
}
const haka = {

    formName: "haka",

    getAna: function () {
        var template = "חַכֵית";
        return getWord(template, 0, 2, -1);
    },
    getInte: function () {
        var template = "חַכֵית";
        return getWord(template, 0, 2, -1);
    },
    getInti: function () {
        var template = "חַכֵיתִי";
        return getWord(template, 0, 2, -1);
    },
    getHuwe: function () {
        var template = "חַכַא";
        return getWord(template, 0, 2, -1);
    },
    getHiye: function () {
        var template = "חַכַת";
        return getWord(template, 0, 2, -1);
    },
    getIhna: function () {
        var template = "חַכֵינַא";
        return getWord(template, 0, 2, -1);
    },
    getIntu: function () {
        var template = "חַכֵיתוּ";
        return getWord(template, 0, 2, -1);
    },
    getHumme: function () {
        var template = "חַכוּ";
        return getWord(template, 0, 2, -1);
    },
    processingToForm: {
        "katab": Math.random() > 0.5 ? [-1, -1, 1, 2, -1] : [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, 1, 2, -1],
        "haka": [-1, -1, -1, -1, -1],
        "nisi": [-1, -1, -1, -1, -1, 2, "י"],
        "habb": [-1, -1, -1, -1, -1],
        "rah": [-1, -1, 1, 2, -1],
        "jab": [-1, -1, 1, 2, -1],
    }
}
const nisi = {
    formName: "nisi",

    getAna: function () {
        var template = "נְסִית";
        return getWord(template, 0, 2, 4);
    },
    getInte: function () {
        var template = "נְסִית";
        return getWord(template, 0, 2, 4);
    },
    getInti: function () {
        var template = "נְסִיתִי";
        return getWord(template, 0, 2, 4);
    },
    getHuwe: function () {
        var template = "נִסִי";
        return getWord(template, 0, 2, 4);
    },
    getHiye: function () {
        var template = "נִסְיַת";
        return getWord(template, 0, 2, 4);
    },
    getIhna: function () {
        var template = "נְסִינַא";
        return getWord(template, 0, 2, 4);
    },
    getIntu: function () {
        var template = "נְסִיתוּ";
        return getWord(template, 0, 2, 4);
    },
    getHumme: function () {
        var template = "נִסְיוּ";
        return getWord(template, 0, 2, 4);
    },
    processingToForm: {
        "katab": Math.random() > 0.5 ? [-1, -1, 1, 2, -1] : [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, 1, 2, -1],
        "haka": [-1, -1, -1, -1, -1],
        "nisi": [-1, -1, -1, -1, -1, 2, "י"],
        "habb": [-1, -1, -1, -1, -1],
        "rah": [-1, -1, 1, 2, -1],
        "jab": [-1, -1, 1, 2, -1],
    }
}
const habb = {
    formName: "habb",

    getAna: function () {
        var template = "חַבֵّית";
        return getWord(template, 0, 2, -1);
    },
    getInte: function () {
        var template = "חַבֵّית";
        return getWord(template, 0, 2, -1);
    },
    getInti: function () {
        var template = "חַבֵّיתִי";
        return getWord(template, 0, 2, -1);
    },
    getHuwe: function () {
        var template = "חַבّ";
        return getWord(template, 0, 2, -1);
    },
    getHiye: function () {
        var template = "חַבַّת";
        return getWord(template, 0, 2, -1);
    },
    getIhna: function () {
        var template = "חַבֵّינַא";
        return getWord(template, 0, 2, -1);
    },
    getIntu: function () {
        var template = "חַבֵّיתוּ";
        return getWord(template, 0, 2, -1);
    },
    getHumme: function () {
        var template = "חַבّוּ";
        return getWord(template, 0, 2, -1);
    },
    processingToForm: {
        "katab": [-1, -1, 1, 2, 2],
        "nizel": [-1, -1, 1, 2, 2],
        "haka": [-1, -1, -1, -1, 1],
        "nisi": [-1, -1, -1, -1, 1, 2, "י"],
        "habb": [-1, -1, -1, -1, -1],
        "rah": [-1, -1, 1, 2, 2],
        "jab": [-1, -1, 1, 2, 2],
    }
}
const rah = {

    formName: "rah",
    getAna: function () {
        var template = "רֻחְת";
        return getWord(template, 0, -1, 2);
    },
    getInte: function () {
        var template = "רֻחְת";
        return getWord(template, 0, -1, 2);
    },
    getInti: function () {
        var template = "רֻחְתִי";
        return getWord(template, 0, -1, 2);
    },
    getHuwe: function () {
        var template = "רַאח";
        return getWord(template, 0, -1, 3);
    },
    getHiye: function () {
        var template = "רַאחַת";
        return getWord(template, 0, -1, 3);
    },
    getIhna: function () {
        var template = "רֻחְנַא";
        return getWord(template, 0, -1, 2);
    },
    getIntu: function () {
        var template = "רֻחְתוּ";
        return getWord(template, 0, -1, 2);
    },
    getHumme: function () {
        var template = "רַאחוּ";
        return getWord(template, 0, -1, 3);
    },
    processingToForm: {
        "katab": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "nizel": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "haka": [-1, -1, 2, 1, 1],
        "nisi": [-1, -1, 2, 1, -1, 2, "י"],
        "habb": [-1, -1, 2, 1, -1],
        "rah": [-1, -1, -1, -1, -1],
        "jab": [-1, -1, -1, -1, -1],
    }
}
const jab = {
    formName: "jab",

    getAna: function () {
        var template = "גִבְת";
        return getWord(template, 0, -1, 2);
    },
    getInte: function () {
        var template = "גִבְת";
        return getWord(template, 0, -1, 2);
    },
    getInti: function () {
        var template = "גִבְתִי";
        return getWord(template, 0, -1, 2);
    },
    getHuwe: function () {
        var template = "גַאב";
        return getWord(template, 0, -1, 3);
    },
    getHiye: function () {
        var template = "גַאבַת";
        return getWord(template, 0, -1, 3);
    },
    getIhna: function () {
        var template = "גִבְנַא";
        return getWord(template, 0, -1, 2);
    },
    getIntu: function () {
        var template = "גִבְתוּ";
        return getWord(template, 0, -1, 2);
    },
    getHumme: function () {
        var template = "גַאבוּ";
        return getWord(template, 0, -1, 3);
    },
    processingToForm: {
        "katab": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "nizel": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "haka": [-1, -1, 2, 1, 1],
        "nisi": [-1, -1, 2, 1, -1, 2, "י"],
        "habb": [-1, -1, 2, 1, -1],
        "rah": [-1, -1, -1, -1, -1],
        "jab": [-1, -1, -1, -1, -1],
    }
}

const formNames = ["katab", "nizel", "haka", "nisi", "habb", "rah", "jab"];

const forms = {
    "katab": katab,
    "nizel": nizel,
    "haka": haka,
    "nisi": nisi,
    "habb": habb,
    "rah": rah,
    "jab": jab
}

const roots = {
    "katab": katabArabic,
    "nizel": nizelArabic,
    "haka": hakaArabic,
    "nisi": nisiArabic,
    "habb": habbArabic,
    "rah": rahArabic,
    "jab": jabArabic
}

const rootsHebrew = {
    "katab": katabHebrew,
    "nizel": nizelHebrew,
    "haka": hakaHebrew,
    "nisi": nisiHebrew,
    "habb": habbHebrew,
    "rah": rahHebrew,
    "jab": jabHebrew
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}