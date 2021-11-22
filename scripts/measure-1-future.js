const shva = "ְ";
const patakh = "ַ";

const yuktol = {

    formName: "yuktol",

    getAna: function () {
        return "אַפְעֺל";
    },
    getInte: function () {
        return "תֻפְעֺל";
    },
    getInti: function () {
        return "תֻפֻעְלִי";
    },
    getHuwe: function () {
        return "יֻפְעֺל";
    },
    getHiye: function () {
        return "תֻפְעֺל";
    },
    getIhna: function () {
        return "נֻפְעֺל";
    },
    getIntu: function () {
        return "תֻפֻעְלוּ";
    },
    getHumme: function () {
        return "יֻפֻעְלוּ";
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
        return "אַפְעֵל";
    },
    getInte: function () {
        return "תִפְעֵל";
    },
    getInti: function () {
        return "תִפִעְלִי";
    },
    getHuwe: function () {
        return "יִפְעֵל";
    },
    getHiye: function () {
        return "תִפְעֵל";
    },
    getIhna: function () {
        return "נִפְעֵל";
    },
    getIntu: function () {
        return "תִפִעְלוּ";
    },
    getHumme: function () {
        return "יִפִעְלוּ";
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
        return "אַפְעַל";
    },
    getInte: function () {
        return "תִפְעַל";
    },
    getInti: function () {
        return "תִפְעַלִי";
    },
    getHuwe: function () {
        return "יִפְעַל";
    },
    getHiye: function () {
        return "תִפְעַל";
    },
    getIhna: function () {
        return "נִפְעַל";
    },
    getIntu: function () {
        return "תִפְעַלוּ";
    },
    getHumme: function () {
        return "יִפְעַלוּ";
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
        return "אַפוּל";
    },
    getInte: function () {
        return "תְפוּל";
    },
    getInti: function () {
        return "תְפוּלי";
    },
    getHuwe: function () {
        return "יְפוּל";
    },
    getHiye: function () {
        return "תְפוּל";
    },
    getIhna: function () {
        return "נְפוּל";
    },
    getIntu: function () {
        return "תְפוּלוּ";
    },
    getHumme: function () {
        return "יְפוּלוּ";
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
        return "אַפִיל";
    },
    getInte: function () {
        return "תְפִיל";
    },
    getInti: function () {
        return "תְפִילִי";
    },
    getHuwe: function () {
        return "יְפִיל";
    },
    getHiye: function () {
        return "תְפִיל";
    },
    getIhna: function () {
        return "נְפִיל";
    },
    getIntu: function () {
        return "תְפִילו";
    },
    getHumme: function () {
        return "יְפִילוּ";
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
        return "אַפְעִי";
    },
    getInte: function () {
        return "תִפְעִי";
    },
    getInti: function () {
        return "תִפְעִי";
    },
    getHuwe: function () {
        return "יִפְעִי";
    },
    getHiye: function () {
        return "תִפְעִי";
    },
    getIhna: function () {
        return "נִפְעִי";
    },
    getIntu: function () {
        return "תִפְעוּ";
    },
    getHumme: function () {
        return "יִפְעוּ";
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
        2: [3, 4, 7],
        3: [3, 6, 7],
        4: [3, 6, 7],
        5: [3, 6, 7],
        6: [3, 4, 7],
        7: [3, 4, 7],
    }
}

const insa = {

    formName: "insa",
    getAna: function () {
        return "אַפְעַא";
    },
    getInte: function () {
        return "תִפְעַא";
    },
    getInti: function () {
        return "תִפְעִי";
    },
    getHuwe: function () {
        return "יִפְעַא";
    },
    getHiye: function () {
        return "תִפְעַא";
    },
    getIhna: function () {
        return "נִפְעַא";
    },
    getIntu: function () {
        return "תִפְעוּ";
    },
    getHumme: function () {
        return "יִפְעוּ";
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
        return "אַפִעّ";
    },
    getInte: function () {
        return "תְפִעّ";
    },
    getInti: function () {
        return "תְפִעִّי";
    },
    getHuwe: function () {
        return "יְפִעّ";
    },
    getHiye: function () {
        return "תְפִעّ";
    },
    getIhna: function () {
        return "נְפִעّ";
    },
    getIntu: function () {
        return "תְפִעّוּ";
    },
    getHumme: function () {
        return "יְפִעّוּ";
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
        return "אַפֻעّ";
    },
    getInte: function () {
        return "תְפֻעّ";
    },
    getInti: function () {
        return "תְפֻעִّי";
    },
    getHuwe: function () {
        return "יְפֻעّ";
    },
    getHiye: function () {
        return "תְפֻעّ";
    },
    getIhna: function () {
        return "נְפֻעّ";
    },
    getIntu: function () {
        return "תְפֻעّוּ";
    },
    getHumme: function () {
        return "יְפֻעّוּ";
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