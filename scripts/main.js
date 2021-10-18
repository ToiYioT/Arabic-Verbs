
window.addEventListener('load', (event) => {

    let v = document.getElementById("heading");

    var root = "בּכּי";
    v.innerHTML = nisi.getAna(root) + " " +
        nisi.getHiye(root) + " " +
        nisi.getHumme(root) + " " +
        nisi.getHuwe(root) + " " +
        nisi.getInte(root)
        ;
});

var letters = "אבגדהוזחטיכלמנסעפצקרשתץףךםן";
var rootLetters = [3];

function separateRootIntoLetters(root) {
    var startIndex = 0;
    var letterLength = 1;
    var letterIndexInRoot = 0;

    for (var i = 1; i < root.length; i++) {

        if (letters.indexOf(root[i]) > -1) {

            rootLetters[letterIndexInRoot] = root.substr(startIndex, letterLength);
            startIndex = i;

            letterIndexInRoot++;
            letterLength = 0;
        }
        letterLength++;
    }
    rootLetters[2] = root.substr(startIndex, root.length - startIndex);
}

function getWord(template, index0, index1, index2, root) {

    separateRootIntoLetters(root);

    template = template.substring(0, index2) +
        rootLetters[2] + template.substring(index2 + 1);
    console.log(template);

    template = template.substring(0, index1) +
        rootLetters[1] + template.substring(index1 + 1);
    console.log(template);

    template = template.substring(0, index0) +
        rootLetters[0] + template.substring(index0 + 1);
    console.log(template);

    return template;
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