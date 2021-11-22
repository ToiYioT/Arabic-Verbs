const shva = "ְ";

const katab = {

    formName: "katab",

    getAna: function () {
        return "פַעַלְת";
    },
    getInte: function () {
        return "פַעַלְת";
    },
    getInti: function () {
        return "פַעַלְתִי";
    },
    getHuwe: function () {
        return "פַעַל";
    },
    getHiye: function () {
        return "פַעְלַת";
    },
    getIhna: function () {
        return "פַעַלְנַא";
    },
    getIntu: function () {
        return "פַעַלְתוּ";
    },
    getHumme: function () {
        return "פַעַלוּ";
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
        return "פְעִלְת";
    },
    getInte: function () {
        return "פְעִלְת";
    },
    getInti: function () {
        return "פְעִלְתִי";
    },
    getHuwe: function () {
        return "פִעֵל";
    },
    getHiye: function () {
        return "פִעְלַת";
    },
    getIhna: function () {
        return "פְעִלְנַא";
    },
    getIntu: function () {
        return "פְעִלְתוּ";
    },
    getHumme: function () {
        return "פִעְלוּ";
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
        return "פַעֵית";
    },
    getInte: function () {
        return "פַעֵית";
    },
    getInti: function () {
        return "פַעֵיתִי";
    },
    getHuwe: function () {
        return "פַעַא";
    },
    getHiye: function () {
        return "פַעַת";
    },
    getIhna: function () {
        return "פַעֵינַא";
    },
    getIntu: function () {
        return "פַעֵיתוּ";
    },
    getHumme: function () {
        return "פַעוּ";
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
        return "פְעִית";
    },
    getInte: function () {
        return "פְעִית";
    },
    getInti: function () {
        return "פְעִיתִי";
    },
    getHuwe: function () {
        return "פִעִי";
    },
    getHiye: function () {
        return "פִעְיַת";
    },
    getIhna: function () {
        return "פְעִינַא";
    },
    getIntu: function () {
        return "פְעִיתוּ";
    },
    getHumme: function () {
        return "פִעְיוּ";
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
        return "פַעֵّית";
    },
    getInte: function () {
        return "פַעֵّית";
    },
    getInti: function () {
        return "פַעֵّיתִי";
    },
    getHuwe: function () {
        return "פַעّ";
    },
    getHiye: function () {
        return "פַעַّת";
    },
    getIhna: function () {
        return "פַעֵّינַא";
    },
    getIntu: function () {
        return "פַעֵّיתוּ";
    },
    getHumme: function () {
        return "פַעّוּ";
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
        return "פֻלְת";
    },
    getInte: function () {
        return "פֻלְת";
    },
    getInti: function () {
        return "פֻלְתִי";
    },
    getHuwe: function () {
        return "פַאל";
    },
    getHiye: function () {
        return "פַאלַת";
    },
    getIhna: function () {
        return "פֻלְנַא";
    },
    getIntu: function () {
        return "פֻלְתוּ";
    },
    getHumme: function () {
        return "פַאלוּ";
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
        return "פִלְת";
    },
    getInte: function () {
        return "פִלְת";
    },
    getInti: function () {
        return "פִלְתִי";
    },
    getHuwe: function () {
        return "פַאל";
    },
    getHiye: function () {
        return "פַאלַת";
    },
    getIhna: function () {
        return "פִלְנַא";
    },
    getIntu: function () {
        return "פִלְתוּ";
    },
    getHumme: function () {
        return "פַאלוּ";
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