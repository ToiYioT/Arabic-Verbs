const shva = "ְ";
const patakh = "ַ";

const yuktol = {

    formName: "yuktol",

    getAna: function () {
        let template = "אַקְתֺל";
        return [template, 2, 4, 6];
    },
    getInte: function () {
        let template = "תֻקְתֺל";
        return [template, 2, 4, 6];
    },
    getInti: function () {
        let template = "תֻקֻתְלִי";
        return [template, 2, 4, 6];
    },
    getHuwe: function () {
        let template = "יֻקְתֺל";
        return [template, 2, 4, 6];
    },
    getHiye: function () {
        let template = "תֻקְתֺל";
        return [template, 2, 4, 6];
    },
    getIhna: function () {
        let template = "נֻקְתֺל";
        return [template, 2, 4, 6];
    },
    getIntu: function () {
        let template = "תֻקֻתְלוּ";
        return [template, 2, 4, 6];
    },
    getHumme: function () {
        let template = "יֻקֻתְלוּ";
        return [template, 2, 4, 6];
    },

    processingToForm: {
        "yuktol": [-1, -1, -1, -1, -1],
        "yimsek": [-1, -1, -1, -1, -1],
        "yisma": [-1, -1, -1, -1, -1],
        "iruh": [1, 0, 2, 1, -1, -1, -1, patakh, 0],
        "ijib": [1, 0, 2, 1, -1, -1, -1, shva, 0],
        "ihki": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "insa": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "ihibb": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "ihutt": [-1, -1, -1, -1, -1],
    },

    formsToDistractWith: {
        // pronounNum : [array of possible forms],
        0: [1, 2, 3],
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
        4: [1, 2, 3],
        5: [1, 2, 3],
        6: [1, 2, 3],
        7: [1, 2, 3],
    }
}

const yimsek = {

    formName: "yimsek",

    getAna: function () {
        let template = "אַנְזֵל";
        return [template, 2, 4, 6];
    },
    getInte: function () {
        let template = "תִנְזֵל";
        return [template, 2, 4, 6];
    },
    getInti: function () {
        let template = "תִנִזְלִי";
        return [template, 2, 4, 6];
    },
    getHuwe: function () {
        let template = "יִנְזֵל";
        return [template, 2, 4, 6];
    },
    getHiye: function () {
        let template = "תִנְזֵל";
        return [template, 2, 4, 6];
    },
    getIhna: function () {
        let template = "נִנְזֵל";
        return [template, 2, 4, 6];
    },
    getIntu: function () {
        let template = "תִנִזְלוּ";
        return [template, 2, 4, 6];
    },
    getHumme: function () {
        let template = "יִנִזְלוּ";
        return [template, 2, 4, 6];
    },

    processingToForm: {
        "yuktol": [-1, -1, -1, -1, -1],
        "yimsek": [-1, -1, -1, -1, -1],
        "yisma": [-1, -1, -1, -1, -1],
        "iruh": [1, 0, 2, 1, -1, -1, -1, patakh, 0],
        "ijib": [-1, -1, -1, -1, -1],
        "ihki": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "insa": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "ihibb": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "ihutt": [-1, -1, -1, -1, -1],
    },

    formsToDistractWith: {
        0: [0, 2, 3],
        1: [0, 2, 3],
        2: [0, 2, 3],
        3: [0, 2, 3],
        4: [0, 2, 3],
        5: [0, 2, 3],
        6: [0, 2, 3],
        7: [0, 2, 3],
    }
}

const yisma = {

    formName: "yisma",

    getAna: function () {
        let template = "אַסְמַע";
        return [template, 2, 4, 6];
    },
    getInte: function () {
        let template = "תִסְמַע";
        return [template, 2, 4, 6];
    },
    getInti: function () {
        let template = "תִסְמַעִי";
        return [template, 2, 4, 6];
    },
    getHuwe: function () {
        let template = "יִסְמַע";
        return [template, 2, 4, 6];
    },
    getHiye: function () {
        let template = "תִסְמַע";
        return [template, 2, 4, 6];
    },
    getIhna: function () {
        let template = "נִסְמַע";
        return [template, 2, 4, 6];
    },
    getIntu: function () {
        let template = "תִסְמַעוּ";
        return [template, 2, 4, 6];
    },
    getHumme: function () {
        let template = "יִסְמַעוּ";
        return [template, 2, 4, 6];
    },

    processingToForm: {
        "yuktol": [-1, -1, -1, -1, -1],
        "yimsek": [-1, -1, -1, -1, -1],
        "yisma": [-1, -1, -1, -1, -1],
        "iruh": [1, 0, 2, 1, -1, -1, -1, patakh, 0],
        "ijib": [-1, -1, -1, -1, -1],
        "ihki": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "insa": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "ihibb": [1, 0, 2, 1, -1, -1, - 1, shva, 0],
        "ihutt": [-1, -1, -1, -1, -1],
    },

    formsToDistractWith: {
        0: [0, 1, 3],
        1: [0, 1, 3],
        2: [0, 1, 3],
        3: [0, 1, 3],
        4: [0, 1, 3],
        5: [0, 1, 3],
        6: [0, 1, 3],
        7: [0, 1, 3],
    }
}

const iruh = {

    formName: "iruh",

    getAna: function () {
        let template = "אַרוּח";
        return [template, 2, -1, 5];
    },
    getInte: function () {
        let template = "תְרוּח";
        return [template, 2, -1, 5];
    },
    getInti: function () {
        let template = "תְרוּחי";
        return [template, 2, -1, 5];
    },
    getHuwe: function () {
        let template = "יְרוּח";
        return [template, 2, -1, 5];
    },
    getHiye: function () {
        let template = "תְרוּח";
        return [template, 2, -1, 5];
    },
    getIhna: function () {
        let template = "נְרוּח";
        return [template, 2, -1, 5];
    },
    getIntu: function () {
        let template = "תְרוּחוּ";
        return [template, 2, -1, 5];
    },
    getHumme: function () {
        let template = "יְרוּחוּ";
        return [template, 2, -1, 5];
    },
    processingToForm: {
        "yuktol": [-1, -1, -1, -1, -1],
        "yimsek": [-1, -1, -1, -1, -1],
        "yisma": [-1, -1, -1, -1, -1],
        "iruh": [-1, -1, -1, -1, -1],
        "ijib": [-1, -1, -1, -1, -1],
        "ihki": [-1, -1, 2, 1, -1],
        "insa": [-1, -1, 2, 1, -1],
        "ihibb": [-1, -1, 2, 1, -1],
        "ihutt": [-1, -1, 2, 1, -1],
    },

    formsToDistractWith: {
        0: [4, 6, 8],
        1: [4, 6, 8],
        2: [4, 6, 8],
        3: [4, 6, 8],
        4: [4, 6, 8],
        5: [4, 6, 8],
        6: [4, 6, 8],
        7: [4, 6, 8],
    }
}

const ijib = {
    formName: "ijib",

    getAna: function () {
        let template = "אַגִיב";
        return [template, 2, -1, 5];
    },
    getInte: function () {
        let template = "תְגִיב";
        return [template, 2, -1, 5];
    },
    getInti: function () {
        let template = "תְגִיבִי";
        return [template, 2, -1, 5];
    },
    getHuwe: function () {
        let template = "יְגִיב";
        return [template, 2, -1, 5];
    },
    getHiye: function () {
        let template = "תְגִיב";
        return [template, 2, -1, 5];
    },
    getIhna: function () {
        let template = "נְגִיב";
        return [template, 2, -1, 5];
    },
    getIntu: function () {
        let template = "תְגִיבו";
        return [template, 2, -1, 5];
    },
    getHumme: function () {
        let template = "יְגִיבוּ";
        return [template, 2, -1, 5];
    },
    processingToForm: {
        "yuktol": Math.random() > 0.5 ? [-1, -1, 1, 2, -1] : [-1, -1, -1, -1, -1],
        "yimsek": [-1, -1, 1, 2, -1],
        "yisma": [-1, -1, -1, -1, -1],
        "iruh": [-1, -1, -1, -1, -1],
        "ijib": [-1, -1, -1, -1, -1],
        "ihki": [-1, -1, 2, 1, -1],
        "insa": [-1, -1, 2, 1, -1],
        "ihibb": [-1, -1, 2, 1, -1],
        "ihutt": [-1, -1, 2, 1, -1],
    },
    formsToDistractWith: {
        0: [2, 6, 7],
        1: [2, 6, 7],
        2: [2, 6, 7],
        3: [2, 6, 7],
        4: [2, 6, 7],
        5: [2, 6, 7],
        6: [2, 6, 7],
        7: [2, 6, 7],
    }
}
const ihki = {
    formName: "ihki",

    getAna: function () {
        let template = "אַחְכִי";
        return [template, 2, 4, 6];
    },
    getInte: function () {
        let template = "תִחְכִי";
        return [template, 2, 4, 6];
    },
    getInti: function () {
        let template = "תִחְכִי";
        return [template, 2, 4, 6];
    },
    getHuwe: function () {
        let template = "יִחְכִי";
        return [template, 2, 4, 6];
    },
    getHiye: function () {
        let template = "תִחְכִי";
        return [template, 2, 4, 6];
    },
    getIhna: function () {
        let template = "נִחְכִי";
        return [template, 2, 4, 6];
    },
    getIntu: function () {
        let template = "תִחְכוּ";
        return [template, 2, 4, -1];
    },
    getHumme: function () {
        let template = "יִחְכוּ";
        return [template, 2, 4, -1];
    },
    processingToForm: {
        "yuktol": [-1, -1, -1, -1, -1],
        "yimsek": [-1, -1, -1, -1, -1],
        "yisma": [-1, -1, -1, -1, -1],
        "iruh": [-1, -1, 1, 2, -1],
        "ijib": [-1, -1, 1, 2, -1],
        "ihki": [-1, -1, -1, -1, -1],
        "insa": [-1, -1, 1, 2, 2],
        "ihibb": [-1, -1, -1, -1, -1],
        "ihutt": [-1, -1, -1, -1, -1],
    },
    formsToDistractWith: {
        0: [3, 6, 7],
        1: [3, 6, 7],
        2: [4, 6, 7],
        3: [3, 6, 7],
        4: [3, 6, 7],
        5: [3, 6, 7],
        6: [4, 6, 7],
        7: [4, 6, 7],
    }
}
const insa = {

    formName: "insa",
    getAna: function () {
        let template = "אַנְסַא";
        return [template, 2, 4, -1];
    },
    getInte: function () {
        let template = "תִנְסַא";
        return [template, 2, 4, -1];
    },
    getInti: function () {
        let template = "תִנְסִי";
        return [template, 2, 4, -1];
    },
    getHuwe: function () {
        let template = "יִנְסַא";
        return [template, 2, 4, -1];
    },
    getHiye: function () {
        let template = "תִנְסַא";
        return [template, 2, 4, -1];
    },
    getIhna: function () {
        let template = "נִנְסַא";
        return [template, 2, 4, -1];
    },
    getIntu: function () {
        let template = "תִנְסוּ";
        return [template, 2, 4, -1];
    },
    getHumme: function () {
        let template = "יִנְסוּ";
        return [template, 2, 4, -1];
    },
    processingToForm: {
        "yuktol": [-1, -1, -1, -1, -1],
        "yimsek": [-1, -1, -1, -1, -1],
        "yisma": [-1, -1, -1, -1, -1],
        "iruh": [-1, -1, 1, 2, -1],
        "ijib": [-1, -1, 1, 2, -1],
        "ihki": [-1, -1, -1, -1, -1],
        "insa": [-1, -1, -1, -1, -1],
        "ihibb": [-1, -1, -1, -1, -1],
        "ihutt": [-1, -1, -1, -1, -1],
    },
    formsToDistractWith: {
        0: [1, 3, 8],
        1: [1, 3, 8],
        2: [1, 2, 8],
        3: [1, 3, 8],
        4: [1, 3, 8],
        5: [1, 3, 8],
        6: [1, 2, 8],
        7: [1, 2, 8],
    }
}
const ihibb = {
    formName: "ihibb",

    getAna: function () {
        let template = "אַחִבّ";
        return [template, 2, 4, -1];
    },
    getInte: function () {
        let template = "תְחִבّ";
        return [template, 2, 4, -1];
    },
    getInti: function () {
        let template = "תְחִבִّי";
        return [template, 2, 4, -1];
    },
    getHuwe: function () {
        let template = "יְחִבّ";
        return [template, 2, 4, -1];
    },
    getHiye: function () {
        let template = "תְחִבّ";
        return [template, 2, 4, -1];
    },
    getIhna: function () {
        let template = "נְחִבّ";
        return [template, 2, 4, -1];
    },
    getIntu: function () {
        let template = "תְחִבّוּ";
        return [template, 2, 4, -1];
    },
    getHumme: function () {
        let template = "יְחִבّוּ";
        return [template, 2, 4, -1];
    },
    processingToForm: {
        "yuktol": [-1, -1, 0, 2, 2],
        "yimsek": [-1, -1, 0, 2, 2],
        "yisma": [-1, -1, 0, 2, 2],
        "iruh": [-1, -1, 1, 2, -1],
        "ijib": [-1, -1, 1, 2, 2],
        "ihki": [-1, -1, -1, -1, 1],
        "insa": [-1, -1, -1, -1, 1],
        "ihibb": [-1, -1, -1, -1, -1],
        "ihutt": [-1, -1, -1, -1, -1],
    },
    formsToDistractWith: {
        0: [4, 6, 8],
        1: [4, 6, 8],
        2: [4, 6, 8],
        3: [4, 6, 8],
        4: [4, 6, 8],
        5: [4, 6, 8],
        6: [4, 6, 8],
        7: [4, 6, 8],
    }
}

const ihutt = {
    formName: "ihutt",

    getAna: function () {
        let template = "אַחֻטّ";
        return [template, 2, 4, -1];
    },
    getInte: function () {
        let template = "תְחֻטّ";
        return [template, 2, 4, -1];
    },
    getInti: function () {
        let template = "תְחֻטִّי";
        return [template, 2, 4, -1];
    },
    getHuwe: function () {
        let template = "יְחֻטّ";
        return [template, 2, 4, -1];
    },
    getHiye: function () {
        let template = "תְחֻטّ";
        return [template, 2, 4, -1];
    },
    getIhna: function () {
        let template = "נְחֻטّ";
        return [template, 2, 4, -1];
    },
    getIntu: function () {
        let template = "תְחֻטّוּ";
        return [template, 2, 4, -1];
    },
    getHumme: function () {
        let template = "יְחֻטّוּ";
        return [template, 2, 4, -1];
    },
    processingToForm: {
        "yuktol": [-1, -1, 0, 2, 2],
        "yimsek": [-1, -1, 0, 2, 2],
        "yisma": [-1, -1, 0, 2, 2],
        "iruh": [-1, -1, 1, 2, 2],
        "ijib": [-1, -1, 1, 2, 2],
        "ihki": [-1, -1, -1, -1, 1],
        "insa": [-1, -1, -1, -1, 1],
        "ihibb": [-1, -1, -1, -1, -1],
        "ihutt": [-1, -1, -1, -1, -1],
    },
    formsToDistractWith: {
        0: [3, 6, 7],
        1: [3, 6, 7],
        2: [3, 6, 7],
        3: [3, 6, 7],
        4: [3, 6, 7],
        5: [3, 6, 7],
        6: [3, 6, 7],
        7: [3, 6, 7],
    }
}


export const formsFuture = {
    "yuktol": yuktol,
    "yimsek": yimsek,
    "yisma": yisma,
    "iruh": iruh,
    "ijib": ijib,
    "ihki": ihki,
    "insa": insa,
    "ihibb": ihibb,
    "ihutt": ihutt
}