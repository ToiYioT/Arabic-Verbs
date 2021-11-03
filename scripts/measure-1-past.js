const shva = "ְ";

const katab = {

    formName: "katab",

    getAna: function () {
        let template = "כַתַבְת";
        return [template, 0, 2, 4];
    },
    getInte: function () {
        let template = "כַתַבְת";
        return [template, 0, 2, 4];
    },
    getInti: function () {
        let template = "כַתַבְתִי";
        return [template, 0, 2, 4];
    },
    getHuwe: function () {
        let template = "כַתַב";
        return [template, 0, 2, 4];
    },
    getHiye: function () {
        let template = "כַתְבַת";
        return [template, 0, 2, 4];
    },
    getIhna: function () {
        let template = "כַתַבְנַא";
        return [template, 0, 2, 4];
    },
    getIntu: function () {
        let template = "כַתַבְתוּ";
        return [template, 0, 2, 4];
    },
    getHumme: function () {
        let template = "כַתַבוּ";
        return [template, 0, 2, 4];
    },

    processingToForm: {
        "katab": [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, -1, -1, -1],
        "haka": [1, 0, 2, 1, -1, -1, -1, shva, 0],
        "nisi": [-1, -1, -1, -1, -1],
        "habb": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "rah": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "jab": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
    },

    // pronouns : array of possible forms
    formsToDistractWith: {
        0: [1, 2, 4, 5],
        1: [1, 2, 4, 5],
        2: [1, 2, 4, 5],
        3: [1, 2, 3, 4],
        4: [1, 2, 4, 5],
        5: [1, 2, 4, 5],
        6: [1, 2, 4, 5],
        7: [1, 2, 4, 5],
    }
}

const nizel = {

    formName: "nizel",

    getAna: function () {
        let template = "נְזִלְת";
        return [template, 0, 2, 4];
    },
    getInte: function () {
        let template = "נְזִלְת";
        return [template, 0, 2, 4];
    },
    getInti: function () {
        let template = "נְזִלְתִי";
        return [template, 0, 2, 4];
    },
    getHuwe: function () {
        let template = "נִזֵל";
        return [template, 0, 2, 4];
    },
    getHiye: function () {
        let template = "נִזְלַת";
        return [template, 0, 2, 4];
    },
    getIhna: function () {
        let template = "נְזִלְנַא";
        return [template, 0, 2, 4];
    },
    getIntu: function () {
        let template = "נְזִלְתוּ";
        return [template, 0, 2, 4];
    },
    getHumme: function () {
        let template = "נִזְלוּ";
        return [template, 0, 2, 4];
    },

    processingToForm: {
        "katab": [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, -1, -1, -1],
        "haka": [1, 0, 2, 1, -1, -1, -1, shva, 0],
        "nisi": [-1, -1, -1, -1, -1],
        "habb": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "rah": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "jab": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
    },

    formsToDistractWith: {
        0: [0, 2, 4, 5],
        1: [0, 2, 4, 5],
        2: [0, 2, 4, 5],
        3: [0, 2, 3, 4],
        4: [0, 2, 4, 5],
        5: [0, 2, 4, 5],
        6: [0, 2, 4, 5],
        7: [0, 2, 4, 5],
    }
}
const haka = {

    formName: "haka",

    getAna: function () {
        let template = "חַכֵית";
        return [template, 0, 2, -1];
    },
    getInte: function () {
        let template = "חַכֵית";
        return [template, 0, 2, -1];
    },
    getInti: function () {
        let template = "חַכֵיתִי";
        return [template, 0, 2, -1];
    },
    getHuwe: function () {
        let template = "חַכַא";
        return [template, 0, 2, -1];
    },
    getHiye: function () {
        let template = "חַכַת";
        return [template, 0, 2, -1];
    },
    getIhna: function () {
        let template = "חַכֵינַא";
        return [template, 0, 2, -1];
    },
    getIntu: function () {
        let template = "חַכֵיתוּ";
        return [template, 0, 2, -1];
    },
    getHumme: function () {
        let template = "חַכוּ";
        return [template, 0, 2, -1];
    },
    processingToForm: {
        "katab": Math.random() > 0.5 ? [-1, -1, 1, 2, -1] : [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, 1, 2, -1],
        "haka": [-1, -1, -1, -1, -1],
        "nisi": [-1, -1, -1, -1, -1, 2, "י"],
        "habb": [-1, -1, -1, -1, -1],
        "rah": [-1, -1, 1, 2, -1],
        "jab": [-1, -1, 1, 2, -1],
    },

    formsToDistractWith: {
        0: [3, 4, 5, 6],
        1: [3, 4, 5, 6],
        2: [3, 4, 5, 6],
        3: [3, 4, 5],
        4: [3, 4, 5],
        5: [3, 4, 5, 6],
        6: [3, 4, 5, 6],
        7: [0, 3, 4],
    }
}
const nisi = {
    formName: "nisi",

    getAna: function () {
        let template = "נְסִית";
        return [template, 0, 2, 4];
    },
    getInte: function () {
        let template = "נְסִית";
        return [template, 0, 2, 4];
    },
    getInti: function () {
        let template = "נְסִיתִי";
        return [template, 0, 2, 4];
    },
    getHuwe: function () {
        let template = "נִסִי";
        return [template, 0, 2, 4];
    },
    getHiye: function () {
        let template = "נִסְיַת";
        return [template, 0, 2, 4];
    },
    getIhna: function () {
        let template = "נְסִינַא";
        return [template, 0, 2, 4];
    },
    getIntu: function () {
        let template = "נְסִיתוּ";
        return [template, 0, 2, 4];
    },
    getHumme: function () {
        let template = "נִסְיוּ";
        return [template, 0, 2, 4];
    },
    processingToForm: {
        "katab": Math.random() > 0.5 ? [-1, -1, 1, 2, -1] : [-1, -1, -1, -1, -1],
        "nizel": [-1, -1, 1, 2, -1],
        "haka": [-1, -1, -1, -1, -1],
        "nisi": [-1, -1, -1, -1, -1, 2, "י"],
        "habb": [-1, -1, -1, -1, -1],
        "rah": [-1, -1, 1, 2, -1],
        "jab": [-1, -1, 1, 2, -1],
    },
    formsToDistractWith: {
        0: [2, 4, 5, 6],
        1: [2, 4, 5, 6],
        2: [2, 4, 5, 6],
        3: [2, 4, 5],
        4: [2, 4, 5],
        5: [2, 4, 5, 6],
        6: [2, 4, 5, 6],
        7: [0, 2, 4, 5],
    }
}
const habb = {
    formName: "habb",

    getAna: function () {
        let template = "חַבֵّית";
        return [template, 0, 2, -1];
    },
    getInte: function () {
        let template = "חַבֵّית";
        return [template, 0, 2, -1];
    },
    getInti: function () {
        let template = "חַבֵّיתִי";
        return [template, 0, 2, -1];
    },
    getHuwe: function () {
        let template = "חַבّ";
        return [template, 0, 2, -1];
    },
    getHiye: function () {
        let template = "חַבַّת";
        return [template, 0, 2, -1];
    },
    getIhna: function () {
        let template = "חַבֵّינַא";
        return [template, 0, 2, -1];
    },
    getIntu: function () {
        let template = "חַבֵّיתוּ";
        return [template, 0, 2, -1];
    },
    getHumme: function () {
        let template = "חַבّוּ";
        return [template, 0, 2, -1];
    },
    processingToForm: {
        "katab": [-1, -1, 1, 2, 2],
        "nizel": [-1, -1, 1, 2, 2],
        "haka": [-1, -1, -1, -1, 1],
        "nisi": [-1, -1, -1, -1, 1, 2, "י"],
        "habb": [-1, -1, -1, -1, -1],
        "rah": [-1, -1, 1, 2, 2],
        "jab": [-1, -1, 1, 2, 2],
    },
    formsToDistractWith: {
        0: [2, 3, 5, 6],
        1: [2, 3, 5, 6],
        2: [2, 3, 5, 6],
        3: [2, 3, 5],
        4: [2, 3, 5],
        5: [2, 3, 5, 6],
        6: [2, 3, 5, 6],
        7: [2, 3, 5],
    }
}
const rah = {

    formName: "rah",
    getAna: function () {
        let template = "רֻחְת";
        return [template, 0, -1, 2];
    },
    getInte: function () {
        let template = "רֻחְת";
        return [template, 0, -1, 2];
    },
    getInti: function () {
        let template = "רֻחְתִי";
        return [template, 0, -1, 2];
    },
    getHuwe: function () {
        let template = "רַאח";
        return [template, 0, -1, 3];
    },
    getHiye: function () {
        let template = "רַאחַת";
        return [template, 0, -1, 3];
    },
    getIhna: function () {
        let template = "רֻחְנַא";
        return [template, 0, -1, 2];
    },
    getIntu: function () {
        let template = "רֻחְתוּ";
        return [template, 0, -1, 2];
    },
    getHumme: function () {
        let template = "רַאחוּ";
        return [template, 0, -1, 3];
    },
    processingToForm: {
        "katab": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "nizel": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "haka": [-1, -1, 2, 1, 1],
        "nisi": [-1, -1, 2, 1, -1, 2, "י"],
        "habb": [-1, -1, 2, 1, -1],
        "rah": [-1, -1, -1, -1, -1],
        "jab": [-1, -1, -1, -1, -1],
    },
    formsToDistractWith: {
        0: [2, 3, 4, 6],
        1: [2, 3, 4, 6],
        2: [2, 3, 4, 6],
        3: [2, 3, 4],
        4: [2, 3, 4],
        5: [2, 3, 4, 6],
        6: [2, 3, 4, 6],
        7: [2, 3, 4],
    }
}
const jab = {
    formName: "jab",

    getAna: function () {
        let template = "גִבְת";
        return [template, 0, -1, 2];
    },
    getInte: function () {
        let template = "גִבְת";
        return [template, 0, -1, 2];
    },
    getInti: function () {
        let template = "גִבְתִי";
        return [template, 0, -1, 2];
    },
    getHuwe: function () {
        let template = "גַאב";
        return [template, 0, -1, 3];
    },
    getHiye: function () {
        let template = "גַאבַת";
        return [template, 0, -1, 3];
    },
    getIhna: function () {
        let template = "גִבְנַא";
        return [template, 0, -1, 2];
    },
    getIntu: function () {
        let template = "גִבְתוּ";
        return [template, 0, -1, 2];
    },
    getHumme: function () {
        let template = "גַאבוּ";
        return [template, 0, -1, 3];
    },
    processingToForm: {
        "katab": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "nizel": Math.random() > 0.2 ? [-1, -1, -1, -1, -1] : [-1, -1, 2, 1, -1],
        "haka": [-1, -1, 2, 1, 1],
        "nisi": [-1, -1, 2, 1, -1, 2, "י"],
        "habb": [-1, -1, 2, 1, -1],
        "rah": [-1, -1, -1, -1, -1],
        "jab": [-1, -1, -1, -1, -1],
    },
    formsToDistractWith: {
        0: [2, 3, 4, 5],
        1: [2, 3, 4, 5],
        2: [2, 3, 4, 5],
        3: [2, 3, 4],
        4: [0, 3, 4],
        5: [2, 3, 4, 5],
        6: [2, 3, 4, 5],
        7: [2, 3, 4],
    }
}


export const formsPast = {
    "katab": katab,
    "nizel": nizel,
    "haka": haka,
    "nisi": nisi,
    "habb": habb,
    "rah": rah,
    "jab": jab
}