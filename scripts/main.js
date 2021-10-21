window.addEventListener('load', (event) => {

    let wordFrom = "nisi";
    let wordTo = "nisi";

    let randomWordNum = Math.floor(Math.random() * roots[wordFrom].length);

    var root = roots[wordFrom][randomWordNum];
    var rootForm = forms[wordFrom];
    var toForm = forms[wordTo];

    let p = document.getElementById("paragraph");

    for (let i = 0; i < 8; i++) {

        doProcessing(root, rootForm, toForm);
        p.innerHTML += pronounsArabic[i] + " " + toForm[pronouns[i]]() + "<br/>";
    }

});

var pronouns = ["getAna", "getInte", "getInti", "getHuwe", "getHiye", "getIhna", "getIntu", "getHumme"];
var pronounsArabic = ["אַנַא", "אִנְתֵ", "אִנְתִי", "הֻוֵّ", "הִיֵّ", "אִחְנַא", "אִנְתוּ", "הֻםֵّ"];

var katabHebrew = ["ביקש", "חתך/ הפסיק/ קטע/ חצה ניתק", "התגורר", "העביר/ עבר דירה", "נשבע", "עבר", "ישב", "ניגב", "למד", "הקדים/ עקף את...", "אכל", "בדק", "שבר", "שחה", "שילם/ דחף", "הודה", "ניחש", "לקח", "שלח", "היכה", "צחק", "ברח", "בישל", "שתק", "הרים", "פתח", "הבטיח", "צבע", "צבע", "קרא", "שאל", "צחצח/ הבריש", "נשף", "הזמין", "התעטש", "רץ", "נשף", "הזמין", "התעטש", "רץ"];
var katabArabic = ["טלבּ", "קטע", "סכּן", "נקל", "חלף", "מרק", "קעד", "מסח", "דרס", "סבּק", "אכּל", "פחץ", "כּסר", "סבּח", "דפע", "שכּר", "חזר", "אח'ד", "בּעת", "צ'רבּ", "צ'חכּ", "הרבּ", "טבּח'", "סכּת", "רפע", "פתח", "ועד", "צבּע'", "דהן", "קרא", "סאל", "פרכּ", "נפח'", "עזם", "עטס", "רכּץ'", "נפח'", "עזם", "עטס", "רכּץ'"];
var nizelHebrew = ["שתה", "ירד", "הבין", "חזר", "יכול", "ידע", "הספיק,השיג את, רדף אחרי", "נולד", "לבש", "החזיק, תפס, עצר", "רכב", "הפסיד", "הרוויח", "היה דומה ל...", "שנא", "עשה", "נחלש, רזה", "הרגיש", "הגיע", "הסתיים", "שמע", "התייאש", "הצליח", "שיחק", "יצא, עלה", "חלם", "התעייף", "התרחב", "התייבש", "נבל", "נכח"];
var nizelArabic = ["שרבּ", "נזל", "פהם", "רג'ע", "קדר", "ערף", "לחק", "ח'לק", "לבּס", "מסכּ", "רכּבּ", "ח'סר", "כּסבּ", "שבּה", "כּרה", "עמל", "צ'עף", "שער", "וצל", "ח'לץ", "סמע", "יאס", "נג'ח", "לעבּ", "טלע", "חלם", "תעבּ", "וסע", "יבּס", "דבּל", "חצ'ר"];
var hakaHebrew = ["דיבר", "בנה", "מצא, פגש", "זרק, השליך", "טיגן", "השקה", "נשאר, היה", "עשה על האש"];
var hakaArabic = ["חכּא", "בּנא", "לקא", "רמא", "קלא", "סקא", "בּקא", "שוא"];
var nisiHebrew = ["שכח", "הלך", "התחיל", "ידע", "היה מרוצה", "בכה", "התייקר", "התעורר"];
var nisiArabic = ["נסי", "משי", "בּדי", "דרי", "רצ'י", "בּכּי", "ע'לי", "צחי"];
var habbHebrew = ["שם", "יצק, מזג", "אהב", "השתין", "זרק, שפך", "נשאר", "פירק", "הסתובב, עטף", "הריח", "פתר", "משך, מתח", "מצץ", "גזר", "השיב, ענה", "חיזק, מתח", "התמעט", "קפץ", "חנה", "ספר", "נשך", "צירף", "השתעל"];
var habbArabic = ["חטّ", "צבּّ", "חבּّ", "שח'ّ", "כּבּّ", "ט'לّ", "פכּّ", "לףّ", "שםّ", "חלّ", "מדّ", "מץّ", "קץّ", "רדّ", "שדّ", "קל", "נטّ", "צףّ", "עדّ", "עצ'ّ", "צ'םّّ", "קחّّ"];
var rahHebrew = ["הלך", "היה", "ראה", "ביקר", "אמר", "צם", "זכה", "נכנס, עבר", "קם", "נישק", "מת", "הסתובב"];
var rahArabic = ["ראח", "כּאן", "שאף", "זאר", "קאל", "צאם", "פאז", "פאת", "קאם", "בּאס", "מאת", "דאר"];
var jabHebrew = ["נהיה, נעשה, התחיל", "הביא", "חי", "מכר", "פחד", "ישן", "עף", "הוסיף", "אבד", "התעורר", "נרפא"];
var jabArabic = ["צאר", "ג'אבּ", "עאש", "בּאע", "ח'אף", "נאם", "טאר", "זאד", "צ'אע", "פאק", "טאבּ"];


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

var letters = "אבגדהוזחטיכלמנסעפצקרשתץףךםן";
var endingLeggers = "ץףךםן";
var geresh = "׳";
var shadde = "ّ";

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
            console.log("got here");
        }
    }
}

function addGeresh(str) {
    if (gereshedLetter == "") {
        return str;
    }


    let indexOfGereshedLetter = str.indexOf(gereshedLetter);
    indexOfGereshedLetter = getIndexOfFirstLetterAfter(str, indexOfGereshedLetter);


    return str.slice(0, indexOfGereshedLetter) +
        geresh + str.slice(indexOfGereshedLetter);

    // for (let i = 0; i < 3; i++) {

    //     if (rootGereshes[i] != "") {
    //         let secondLetterIndex = rootLetters[i].length;
    //         if (i == 2) {
    //             secondLetterIndex = getIndexOfFirstLetterAfter(rootLetters[i], 0);
    //         }

    //         rootLetters[i] = rootLetters[i].slice(0, secondLetterIndex) +
    //             geresh + rootLetters[i].slice(secondLetterIndex);
    //     }
    // }
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

var forms = {
    "katab": katab,
    "nizel": nizel,
    "haka": haka,
    "nisi": nisi,
    "habb": habb,
    "rah": rah,
    "jab": jab
}

var roots = {
    "katab": katabArabic,
    "nizel": nizelArabic,
    "haka": hakaArabic,
    "nisi": nisiArabic,
    "habb": habbArabic,
    "rah": rahArabic,
    "jab": jabArabic
}

var rootsTranslations = {
    "katab": katabHebrew,
    "nizel": nizelHebrew,
    "haka": hakaHebrew,
    "nisi": nisiHebrew,
    "habb": habbHebrew,
    "rah": rahHebrew,
    "jab": jabHebrew
}