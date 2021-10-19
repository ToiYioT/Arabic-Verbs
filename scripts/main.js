
window.addEventListener('load', (event) => {

    let p = document.getElementById("paragraph");

    var root = "טלבּ";
    var form = katab;


    p.innerHTML += "אַנַא " + form.getAna(root) + "<br/>";

    console.log("root 0: " + rootLetters[0])
    console.log("root 1: " + rootLetters[1])
    console.log("root 2: " + rootLetters[2])

    p.innerHTML += "אִנְתֵ " + form.getInte(root) + "<br/>";
    p.innerHTML += "אִנְתִי " + form.getInti(root) + "<br/>";
    p.innerHTML += "הֻוֵّ " + form.getHuwe(root) + "<br/>";
    p.innerHTML += "הִיֵّ " + form.getHiye(root) + "<br/>";
    p.innerHTML += "אִחְנַא " + form.getIhna(root) + "<br/>";
    p.innerHTML += "אִנְתוּ " + form.getIntu(root) + "<br/>";
    p.innerHTML += "הֻםֵّ " + form.getHumme(root) + "<br/>";
});

var letters = "אבגדהוזחטיכלמנסעפצקרשתץףךםן";
var endingLeggers = "ץףךםן";
var geresh = "׳";

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


function getWord(template, index0, index1, index2, root) {

    separateRootIntoLetters(root);

    rootLetters[0] = substituteLetterInTemplate(template, 0, index0, index1);
    rootLetters[1] = substituteLetterInTemplate(template, 1, index1, index2);
    rootLetters[2] = substituteLetterInTemplate(template, 2, index2, template.length);

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

function substituteEndingLetterToNormal(word) {
    if (word.includes("")) {

    }
}



const katab = {

    getAna: function (root) {
        var template = "כַתַבְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInte: function (root) {
        var template = "כַתַבְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInti: function (root) {
        var template = "כַתַבְתִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHuwe: function (root) {
        var template = "כַתַב";
        return getWord(template, 0, 2, 4, root);
    },
    getHiye: function (root) {
        var template = "כַתְבַת";
        return getWord(template, 0, 2, 4, root);
    },
    getIhna: function (root) {
        var template = "כַתַבְנַא";
        return getWord(template, 0, 2, 4, root);
    },
    getIntu: function (root) {
        var template = "כַתַבְתוּ";
        return getWord(template, 0, 2, 4, root);
    },
    getHumme: function (root) {
        var template = "כַתַבוּ";
        return getWord(template, 0, 2, 4, root);
    }
}
const nizel = {

    getAna: function (root) {
        var template = "נְזִלְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInte: function (root) {
        var template = "נְזִלְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInti: function (root) {
        var template = "נְזִלְתִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHuwe: function (root) {
        var template = "נִזֵל";
        return getWord(template, 0, 2, 4, root);
    },
    getHiye: function (root) {
        var template = "נִזְלַת";
        return getWord(template, 0, 2, 4, root);
    },
    getIhna: function (root) {
        var template = "נְזִלְנַא";
        return getWord(template, 0, 2, 4, root);
    },
    getIntu: function (root) {
        var template = "נְזִלְתוּ";
        return getWord(template, 0, 2, 4, root);
    },
    getHumme: function (root) {
        var template = "נִזְלוּ";
        return getWord(template, 0, 2, 4, root);
    }
}
const haka = {

    getAna: function (root) {
        var template = "חַכֵית";
        return getWord(template, 0, 2, 4, root);
    },
    getInte: function (root) {
        var template = "חַכֵית";
        return getWord(template, 0, 2, 4, root);
    },
    getInti: function (root) {
        var template = "חַכֵיתִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHuwe: function (root) {
        var template = "חַכַא";
        return getWord(template, 0, 2, 4, root);
    },
    getHiye: function (root) {
        var template = "חַכַת";
        return getWord(template, 0, 2, 4, root);
    },
    getIhna: function (root) {
        var template = "חַכֵינַא";
        return getWord(template, 0, 2, 4, root);
    },
    getIntu: function (root) {
        var template = "חַכֵיתוּ";
        return getWord(template, 0, 2, 4, root);
    },
    getHumme: function (root) {
        var template = "חַכוּ";
        return getWord(template, 0, 2, 4, root);
    }
}
const nisi = {

    getAna: function (root) {
        var template = "נְסִית";
        return getWord(template, 0, 2, 4, root);
    },
    getInte: function (root) {
        var template = "נְסִית";
        return getWord(template, 0, 2, 4, root);
    },
    getInti: function (root) {
        var template = "נְסִיתִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHuwe: function (root) {
        var template = "נִסִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHiye: function (root) {
        var template = "נִסְיַת";
        return getWord(template, 0, 2, 4, root);
    },
    getIhna: function (root) {
        var template = "נְסִינַא";
        return getWord(template, 0, 2, 4, root);
    },
    getIntu: function (root) {
        var template = "נְסִיתוּ";
        return getWord(template, 0, 2, 4, root);
    },
    getHumme: function (root) {
        var template = "נִסְיוּ";
        return getWord(template, 0, 2, 4, root);
    }
}
const habb = {

    getAna: function (root) {
        var template = "חַבֵّית";
        return getWord(template, 0, 2, 4, root);
    },
    getInte: function (root) {
        var template = "חַבֵّית";
        return getWord(template, 0, 2, 4, root);
    },
    getInti: function (root) {
        var template = "חַבֵّיתִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHuwe: function (root) {
        var template = "חַבّ";
        return getWord(template, 0, 2, 4, root);
    },
    getHiye: function (root) {
        var template = "חַבַّת";
        return getWord(template, 0, 2, 4, root);
    },
    getIhna: function (root) {
        var template = "חַבֵّינַא";
        return getWord(template, 0, 2, 4, root);
    },
    getIntu: function (root) {
        var template = "חַבֵّיתוּ";
        return getWord(template, 0, 2, 4, root);
    },
    getHumme: function (root) {
        var template = "חַבّוּ";
        return getWord(template, 0, 2, 4, root);
    }
}
const rah = {

    getAna: function (root) {
        var template = "רֻחְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInte: function (root) {
        var template = "רֻחְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInti: function (root) {
        var template = "רֻחְתִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHuwe: function (root) {
        var template = "רַאח";
        return getWord(template, 0, 2, 4, root);
    },
    getHiye: function (root) {
        var template = "רַאחַת";
        return getWord(template, 0, 2, 4, root);
    },
    getIhna: function (root) {
        var template = "רֻחְנַא";
        return getWord(template, 0, 2, 4, root);
    },
    getIntu: function (root) {
        var template = "רֻחְתוּ";
        return getWord(template, 0, 2, 4, root);
    },
    getHumme: function (root) {
        var template = "רַאחוּ";
        return getWord(template, 0, 2, 4, root);
    }
}
const jab = {

    getAna: function (root) {
        var template = "גִבְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInte: function (root) {
        var template = "גִבְת";
        return getWord(template, 0, 2, 4, root);
    },
    getInti: function (root) {
        var template = "גִבְתִי";
        return getWord(template, 0, 2, 4, root);
    },
    getHuwe: function (root) {
        var template = "גַאב";
        return getWord(template, 0, 2, 4, root);
    },
    getHiye: function (root) {
        var template = "גַאבַת";
        return getWord(template, 0, 2, 4, root);
    },
    getIhna: function (root) {
        var template = "גִבְנַא";
        return getWord(template, 0, 2, 4, root);
    },
    getIntu: function (root) {
        var template = "גִבְתוּ";
        return getWord(template, 0, 2, 4, root);
    },
    getHumme: function (root) {
        var template = "גַאבוּ";
        return getWord(template, 0, 2, 4, root);
    }
}