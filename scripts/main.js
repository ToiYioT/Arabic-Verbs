
window.addEventListener('load', (event) => {

    let p = document.getElementById("paragraph");

    var root = "נקל";
    var rootForm = forms["katab"];
    var toForm = forms["katab"];


    doProcessing(root, rootForm, toForm);
    p.innerHTML += "אַנַא " + toForm.getAna() + "<br/>";
    doProcessing(root, rootForm, toForm);
    p.innerHTML += "אִנְתֵ " + toForm.getInte() + "<br/>";
    doProcessing(root, rootForm, toForm);
    p.innerHTML += "אִנְתִי " + toForm.getInti() + "<br/>";
    doProcessing(root, rootForm, toForm);
    p.innerHTML += "הֻוֵّ " + toForm.getHuwe() + "<br/>";
    doProcessing(root, rootForm, toForm);
    p.innerHTML += "הִיֵّ " + toForm.getHiye() + "<br/>";
    doProcessing(root, rootForm, toForm);
    p.innerHTML += "אִחְנַא " + toForm.getIhna() + "<br/>";
    doProcessing(root, rootForm, toForm);
    p.innerHTML += "אִנְתוּ " + toForm.getIntu() + "<br/>";
    doProcessing(root, rootForm, toForm);
    p.innerHTML += "הֻםֵّ " + toForm.getHumme() + "<br/>";
});

function doProcessing(root, rootForm, toForm) {
    // console.log(...rootForm.processingToForm[toForm.formName]);

    root = substituteEndingLettersToNormal(root);
    separateRootIntoLetters(root);
    doProcess(...rootForm.processingToForm[toForm.formName]);
}

function doProcess(addFrom, addTo, copyFrom, copyTo, removeShaddeAt) {

    addContentsOfLetterToAnother(addFrom, addTo);
    copyLetterToAnoter(copyFrom, copyTo);
    if (removeShaddeAt > -1) {
        rootLetters[removeShaddeAt] = removeShadde(rootLetters[removeShaddeAt]);
    }
}

var letters = "אבגדהוזחטיכלמנסעפצקרשתץףךםן";
var endingLeggers = "ץףךםן";
var geresh = "׳";
var shadde = "ّ";

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
    for (let i = 0; i < 3; i++) {
        if (rootLetters[i].includes("'")) {
            rootLetters[i] = rootLetters[i].replace("'", '');
            rootGereshes[i] = geresh;
        }
        else {
            rootGereshes[i] = "";
        }
    }
}

function copyLetterToAnoter(copyFrom, copyTo) {
    if (copyFrom == -1) return;
    rootLetters[copyTo] = rootLetters[copyFrom];
}

function addContentsOfLetterToAnother(addFrom, addTo) {
    if (addFrom == -1) return;
    rootLetters[addTo] += rootLetters[addFrom];
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

    addGereshes();

    return rootLetters[0] +
        rootLetters[1] +
        rootLetters[2];
}

function addGereshes() {
    for (let i = 0; i < 3; i++) {

        if (rootGereshes[i] != "") {
            let secondLetterIndex = getIndexOfFirstLetterAfter(rootLetters[i], 0);

            rootLetters[i] = rootLetters[i].slice(0, secondLetterIndex) +
                geresh + rootLetters[i].slice(secondLetterIndex);
        }
    }
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
        "habb": [-1, -1, -1, -1, -1],
        "rah": [-1, -1, -1, -1, -1],
        "jab": [-1, -1, -1, -1, -1],
    }


}
const nizel = {

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
    }
}
const nisi = {

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
    }
}
const habb = {

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
    }
}
const rah = {

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
    }
}
const jab = {

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