const shva = "ְ";
const patakh = "ַ";

const TENSE = "future";
const YUKTOL = "yuktol";
const YIMSEK = "yimsek";
const YISMA = "yisma";
const IRUH = "iruh";
const IJIB = "ijib";
const IHKI = "ihki";
const INSA = "insa";
const IHIBB = "ihibb";
const IHUTT = "ihutt";

function buildPronoun(template, distractions) {
    return {
        template: template,
        distractingForms: distractions
    }
}

function createNewForm() {
    return {
        formName: "default",
        tense: TENSE,
        Ana: "",
        Inte: "",
        Inti: "",
        Huwe: "",
        Hiye: "",
        Ihna: "",
        Intu: "",
        Humme: "",

        processingToForm: ""
    }
}

const yuktol = createNewForm();
yuktol.formName = YUKTOL;
yuktol.Ana = buildPronoun("אַפְעֺל", [YIMSEK, YISMA, IRUH]);
yuktol.Inte = buildPronoun("תֻפְעֺל", [YIMSEK, YISMA, IRUH]);
yuktol.Inti = buildPronoun("תֻפֻעְלִי", [YIMSEK, YISMA, IRUH]);
yuktol.Huwe = buildPronoun("יֻפְעֺל", [YIMSEK, YISMA, IRUH]);
yuktol.Hiye = buildPronoun("תֻפְעֺל", [YIMSEK, YISMA, IRUH]);
yuktol.Ihna = buildPronoun("נֻפְעֺל", [YIMSEK, YISMA, IRUH]);
yuktol.Intu = buildPronoun("תֻפֻעְלוּ", [YIMSEK, YISMA, IRUH]);
yuktol.Humme = buildPronoun("יֻפֻעְלוּ", [YIMSEK, YISMA, IRUH]);
yuktol.processingToForm = {
    "yimsek": "פעל",
    "yisma": "פעל",
    "iruh": "פַעאל",
};


const yimsek = createNewForm();
yimsek.formName = YIMSEK;
yimsek.Ana = buildPronoun("אַפְעֵל", [YUKTOL, YISMA, IRUH]);
yimsek.Inte = buildPronoun("תִפְעֵל", [YUKTOL, YISMA, IRUH]);
yimsek.Inti = buildPronoun("תִפִעְלִי", [YUKTOL, YISMA, IRUH]);
yimsek.Huwe = buildPronoun("יִפְעֵל", [YUKTOL, YISMA, IRUH]);
yimsek.Hiye = buildPronoun("תִפְעֵל", [YUKTOL, YISMA, IRUH]);
yimsek.Ihna = buildPronoun("נִפְעֵל", [YUKTOL, YISMA, IRUH]);
yimsek.Intu = buildPronoun("תִפִעְלוּ", [YUKTOL, YISMA, IRUH]);
yimsek.Humme = buildPronoun("יִפִעְלוּ", [YUKTOL, YISMA, IRUH]);
yimsek.processingToForm = {
    "yuktol": "פעל",
    "yisma": "פעל",
    "iruh": "פַעאל",
};


const yisma = createNewForm();
yisma.formName = YISMA;
yisma.Ana = buildPronoun("אַפְעַל", [YUKTOL, YIMSEK, IRUH]);
yisma.Inte = buildPronoun("תִפְעַל", [YUKTOL, YIMSEK, IRUH]);
yisma.Inti = buildPronoun("תִפְעַלִי", [YUKTOL, YIMSEK, IRUH]);
yisma.Huwe = buildPronoun("יִפְעַל", [YUKTOL, YIMSEK, IRUH]);
yisma.Hiye = buildPronoun("תִפְעַל", [YUKTOL, YIMSEK, IRUH]);
yisma.Ihna = buildPronoun("נִפְעַל", [YUKTOL, YIMSEK, IRUH]);
yisma.Intu = buildPronoun("תִפְעַלוּ", [YUKTOL, YIMSEK, IRUH]);
yisma.Humme = buildPronoun("יִפְעַלוּ", [YUKTOL, YIMSEK, IRUH]);
yisma.processingToForm = {
    "yuktol": "פעל",
    "yimsek": "פעל",
    "iruh": "פַעאל",
};


const iruh = createNewForm();
iruh.formName = IRUH;
iruh.Ana = buildPronoun("אַפוּל", [IJIB, INSA, IHUTT]);
iruh.Inte = buildPronoun("תְפוּל", [IJIB, INSA, IHUTT]);
iruh.Inti = buildPronoun("תְפוּלי", [IJIB, INSA, IHUTT]);
iruh.Huwe = buildPronoun("יְפוּל", [IJIB, INSA, IHUTT]);
iruh.Hiye = buildPronoun("תְפוּל", [IJIB, INSA, IHUTT]);
iruh.Ihna = buildPronoun("נְפוּל", [IJIB, INSA, IHUTT]);
iruh.Intu = buildPronoun("תְפוּלוּ", [IJIB, INSA, IHUTT]);
iruh.Humme = buildPronoun("יְפוּלוּ", [IJIB, INSA, IHUTT]);
iruh.processingToForm = {
    "ijib": "פעל",
    "insa": "פלא",
    "ihutt": "פל",
};

const ijib = createNewForm();
ijib.formName = IJIB;
ijib.Ana = buildPronoun("אַפִיל", [YISMA, INSA, IHIBB]);
ijib.Inte = buildPronoun("תְפִיל", [YISMA, INSA, IHIBB]);
ijib.Inti = buildPronoun("תְפִילִי", [YISMA, INSA, IHIBB]);
ijib.Huwe = buildPronoun("יְפִיל", [YISMA, INSA, IHIBB]);
ijib.Hiye = buildPronoun("תְפִיל", [YISMA, INSA, IHIBB]);
ijib.Ihna = buildPronoun("נְפִיל", [YISMA, INSA, IHIBB]);
ijib.Intu = buildPronoun("תְפִילו", [YISMA, INSA, IHIBB]);
ijib.Humme = buildPronoun("יְפִילוּ", [YISMA, INSA, IHIBB]);
ijib.processingToForm = {
    "yisma": "פעל",
    "insa": "פלא",
    "ihibb": "פל",
};


const ihki = createNewForm();
ihki.formName = IHKI;
ihki.Ana = buildPronoun("אַפְעִי", [IRUH, INSA, IHIBB]);
ihki.Inte = buildPronoun("תִפְעִי", [IRUH, INSA, IHIBB]);
ihki.Inti = buildPronoun("תִפְעִי", [IRUH, IJIB, IHIBB]);
ihki.Huwe = buildPronoun("יִפְעִי", [IRUH, INSA, IHIBB]);
ihki.Hiye = buildPronoun("תִפְעִי", [IRUH, INSA, IHIBB]);
ihki.Ihna = buildPronoun("נִפְעִי", [IRUH, INSA, IHIBB]);
ihki.Intu = buildPronoun("תִפְעוּ", [IRUH, IJIB, IHIBB]);
ihki.Humme = buildPronoun("יִפְעוּ", [IRUH, IJIB, IHIBB]);
ihki.processingToForm = {
    "iruh": "פוע",
    "ijib": "פיע",
    "insa": "פעא",
    "ihibb": "פע",
};

const insa = createNewForm();
insa.formName = INSA;
insa.Ana = buildPronoun("אַפְעַא", [YIMSEK, IRUH, IHUTT]);
insa.Inte = buildPronoun("תִפְעַא", [YIMSEK, IRUH, IHUTT]);
insa.Inti = buildPronoun("תִפְעִי", [YIMSEK, YISMA, IHUTT]);
insa.Huwe = buildPronoun("יִפְעַא", [YIMSEK, IRUH, IHUTT]);
insa.Hiye = buildPronoun("תִפְעַא", [YIMSEK, IRUH, IHUTT]);
insa.Ihna = buildPronoun("נִפְעַא", [YIMSEK, IRUH, IHUTT]);
insa.Intu = buildPronoun("תִפְעוּ", [YIMSEK, YISMA, IHUTT]);
insa.Humme = buildPronoun("יִפְעוּ", [YIMSEK, YISMA, IHUTT]);
insa.processingToForm = {
    "yimsek": "פעל",
    "yisma": "פעל",
    "iruh": "פוע",
    "ihutt": "פע",
};

const ihibb = createNewForm();
ihibb.formName = IHIBB;
ihibb.Ana = buildPronoun("אַפִעّ", [IJIB, INSA, IHUTT]);
ihibb.Inte = buildPronoun("תְפִעّ", [IJIB, INSA, IHUTT]);
ihibb.Inti = buildPronoun("תְפִעִّי", [IJIB, INSA, IHUTT]);
ihibb.Huwe = buildPronoun("יְפִעّ", [IJIB, INSA, IHUTT]);
ihibb.Hiye = buildPronoun("תְפִעّ", [IJIB, INSA, IHUTT]);
ihibb.Ihna = buildPronoun("נְפִעّ", [IJIB, INSA, IHUTT]);
ihibb.Intu = buildPronoun("תְפִעّוּ", [IJIB, INSA, IHUTT]);
ihibb.Humme = buildPronoun("יְפִעّוּ", [IJIB, INSA, IHUTT]);
ihibb.processingToForm = {
    "ijib": "פיע",
    "insa": "פעל",
    "ihutt": "פעל",
};

const ihutt = createNewForm();
ihutt.formName = IHUTT;
ihutt.Ana = buildPronoun("אַפֻעّ", [IRUH, INSA, IHIBB]);
ihutt.Inte = buildPronoun("תְפֻעّ", [IRUH, INSA, IHIBB]);
ihutt.Inti = buildPronoun("תְפֻעִّי", [IRUH, INSA, IHIBB]);
ihutt.Huwe = buildPronoun("יְפֻעّ", [IRUH, INSA, IHIBB]);
ihutt.Hiye = buildPronoun("תְפֻעّ", [IRUH, INSA, IHIBB]);
ihutt.Ihna = buildPronoun("נְפֻעّ", [IRUH, INSA, IHIBB]);
ihutt.Intu = buildPronoun("תְפֻעّוּ", [IRUH, INSA, IHIBB]);
ihutt.Humme = buildPronoun("יְפֻעّוּ", [IRUH, INSA, IHIBB]);
ihutt.processingToForm = {
    "iruh": "פוע",
    "insa": "פעל",
    "ihibb": "פעל",
};

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