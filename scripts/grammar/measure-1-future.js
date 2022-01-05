
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
        representativeRoot: "",
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
        populateRemainingPronouns: function () {
            this.AnaFem = this.Ana;
            this.IntuFem = this.Intu;
            this.Henne = this.Humme;
            this.IhnaFem = this.Ihna;
        },

        processingToForm: ""
    }
}

const yuktol = createNewForm();
yuktol.formName = YUKTOL;
yuktol.representativeRoot = "קתל";
yuktol.Ana = buildPronoun("אַֽ֫פְעֽוֹל", [YIMSEK, YISMA, IRUH]);
yuktol.Inte = buildPronoun("תֽ֫וּפְעֽוֹל", [YIMSEK, YISMA, IRUH]);
yuktol.Inti = buildPronoun("תֽ֫וּפֽוּעְלִֽי", [YIMSEK, YISMA, IRUH]);
yuktol.Huwe = buildPronoun("יֽ֫וּפְעֽוֹל", [YIMSEK, YISMA, IRUH]);
yuktol.Hiye = buildPronoun("תֽ֫וּפְעֽוֹל", [YIMSEK, YISMA, IRUH]);
yuktol.Ihna = buildPronoun("נֽ֫וּפְעֽוֹל", [YIMSEK, YISMA, IRUH]);
yuktol.Intu = buildPronoun("תֽ֫וּפֽוּעְלֽוּ", [YIMSEK, YISMA, IRUH]);
yuktol.Humme = buildPronoun("יֽ֫וּפֽוּעְלֽוּ", [YIMSEK, YISMA, IRUH]);
yuktol.populateRemainingPronouns();
yuktol.processingToForm = {
    "yimsek": "פעל",
    "yisma": "פעל",
    "iruh": "פַעאל",
};


const yimsek = createNewForm();
yimsek.formName = YIMSEK;
yimsek.representativeRoot = "מסכּ";
yimsek.Ana = buildPronoun("אַֽ֫פְעֵֽל", [YUKTOL, YISMA, IRUH]);
yimsek.Inte = buildPronoun("תִֽ֫יפְעֵֽל", [YUKTOL, YISMA, IRUH]);
yimsek.Inti = buildPronoun("תִֽ֫יפִֽיעְלִֽי", [YUKTOL, YISMA, IRUH]);
yimsek.Huwe = buildPronoun("יִֽ֫פְעֵֽל", [YUKTOL, YISMA, IRUH]);
yimsek.Hiye = buildPronoun("תִֽ֫יפְעֵֽל", [YUKTOL, YISMA, IRUH]);
yimsek.Ihna = buildPronoun("נִֽ֫יפְעֵֽל", [YUKTOL, YISMA, IRUH]);
yimsek.Intu = buildPronoun("תִֽ֫יפִֽיעְלֽוּ", [YUKTOL, YISMA, IRUH]);
yimsek.Humme = buildPronoun("יִֽ֫פִֽיעְלֽוּ", [YUKTOL, YISMA, IRUH]);
yimsek.populateRemainingPronouns();
yimsek.processingToForm = {
    "yuktol": "פעל",
    "yisma": "פעל",
    "iruh": "פַעאל",
};


const yisma = createNewForm();
yisma.formName = YISMA;
yisma.representativeRoot = "סמע";
yisma.Ana = buildPronoun("אַֽ֫פְעַֽל", [YUKTOL, YIMSEK, IRUH]);
yisma.Inte = buildPronoun("תִֽ֫יפְעַֽל", [YUKTOL, YIMSEK, IRUH]);
yisma.Inti = buildPronoun("תִֽ֫יפְעַֽלִֽי", [YUKTOL, YIMSEK, IRUH]);
yisma.Huwe = buildPronoun("יִֽ֫פְעַֽל", [YUKTOL, YIMSEK, IRUH]);
yisma.Hiye = buildPronoun("תִֽ֫יפְעַֽל", [YUKTOL, YIMSEK, IRUH]);
yisma.Ihna = buildPronoun("נִֽ֫יפְעַֽל", [YUKTOL, YIMSEK, IRUH]);
yisma.Intu = buildPronoun("תִֽ֫יפְעַֽלֽוּ", [YUKTOL, YIMSEK, IRUH]);
yisma.Humme = buildPronoun("יִֽ֫פְעַֽלֽוּ", [YUKTOL, YIMSEK, IRUH]);
yisma.populateRemainingPronouns();
yisma.processingToForm = {
    "yuktol": "פעל",
    "yimsek": "פעל",
    "iruh": "פַעאל",
};


const iruh = createNewForm();
iruh.formName = IRUH;
iruh.representativeRoot = "רוח";
iruh.Ana = buildPronoun("אַֽפֽ֫וּל", [IJIB, INSA, IHUTT]);
iruh.Inte = buildPronoun("תְֽ֫פוּל", [IJIB, INSA, IHUTT]);
iruh.Inti = buildPronoun("תְֽ֫פוּלֽי", [IJIB, INSA, IHUTT]);
iruh.Huwe = buildPronoun("יִֽפֽ֫וּל", [IJIB, INSA, IHUTT]);
iruh.Hiye = buildPronoun("תְֽ֫פוּל", [IJIB, INSA, IHUTT]);
iruh.Ihna = buildPronoun("נְֽ֫פוּל", [IJIB, INSA, IHUTT]);
iruh.Intu = buildPronoun("תְֽ֫פוּלֽוּ", [IJIB, INSA, IHUTT]);
iruh.Humme = buildPronoun("יִֽפֽ֫וּלֽוּ", [IJIB, INSA, IHUTT]);
iruh.populateRemainingPronouns();
iruh.processingToForm = {
    "ijib": "פעל",
    "insa": "פלא",
    "ihutt": "פל",
};

const ijib = createNewForm();
ijib.formName = IJIB;
ijib.representativeRoot = "ג'יבּ";
ijib.Ana = buildPronoun("אַֽפִֽ֫יל", [YISMA, INSA, IHIBB]);
ijib.Inte = buildPronoun("תְֽ֫פִיל", [YISMA, INSA, IHIBB]);
ijib.Inti = buildPronoun("תְֽ֫פִילִֽי", [YISMA, INSA, IHIBB]);
ijib.Huwe = buildPronoun("יִֽפִֽ֫יל", [YISMA, INSA, IHIBB]);
ijib.Hiye = buildPronoun("תְֽ֫פִיל", [YISMA, INSA, IHIBB]);
ijib.Ihna = buildPronoun("נְֽ֫פִיל", [YISMA, INSA, IHIBB]);
ijib.Intu = buildPronoun("תְֽ֫פִילֽוּ", [YISMA, INSA, IHIBB]);
ijib.Humme = buildPronoun("יִֽפִֽ֫ילֽוּ", [YISMA, INSA, IHIBB]);
ijib.populateRemainingPronouns();
ijib.processingToForm = {
    "yisma": "פעל",
    "insa": "פלא",
    "ihibb": "פל",
};


const ihki = createNewForm();
ihki.formName = IHKI;
ihki.representativeRoot = "חכּי";
ihki.Ana = buildPronoun("אַֽ֫פְעִֽי", [IRUH, INSA, IHIBB]);
ihki.Inte = buildPronoun("תִֽ֫יפְעִֽי", [IRUH, INSA, IHIBB]);
ihki.Inti = buildPronoun("תִֽ֫יפְעִֽי", [IRUH, IJIB, IHIBB]);
ihki.Huwe = buildPronoun("יִֽ֫פְעִֽי", [IRUH, INSA, IHIBB]);
ihki.Hiye = buildPronoun("תִֽ֫יפְעִֽי", [IRUH, INSA, IHIBB]);
ihki.Ihna = buildPronoun("נִֽ֫יפְעִֽי", [IRUH, INSA, IHIBB]);
ihki.Intu = buildPronoun("תִֽ֫יפְעֽוּ", [IRUH, IJIB, IHIBB]);
ihki.Humme = buildPronoun("יִֽ֫פְעֽוּ", [IRUH, IJIB, IHIBB]);
ihki.populateRemainingPronouns();
ihki.processingToForm = {
    "iruh": "פוע",
    "ijib": "פיע",
    "insa": "פעא",
    "ihibb": "פע",
};

const insa = createNewForm();
insa.formName = INSA;
insa.representativeRoot = "נסא";
insa.Ana = buildPronoun("אַֽ֫פְעַֽא", [YIMSEK, IRUH, IHUTT]);
insa.Inte = buildPronoun("תִֽ֫יפְעַֽא", [YIMSEK, IRUH, IHUTT]);
insa.Inti = buildPronoun("תִֽ֫יפְעִֽי", [YIMSEK, YISMA, IHUTT]);
insa.Huwe = buildPronoun("יִֽ֫פְעַֽא", [YIMSEK, IRUH, IHUTT]);
insa.Hiye = buildPronoun("תִֽ֫יפְעַֽא", [YIMSEK, IRUH, IHUTT]);
insa.Ihna = buildPronoun("נִֽ֫יפְעַֽא", [YIMSEK, IRUH, IHUTT]);
insa.Intu = buildPronoun("תִֽ֫יפְעֽוּ", [YIMSEK, YISMA, IHUTT]);
insa.Humme = buildPronoun("יִֽ֫פְעֽוּ", [YIMSEK, YISMA, IHUTT]);
insa.populateRemainingPronouns();
insa.processingToForm = {
    "yimsek": "פעל",
    "yisma": "פעל",
    "iruh": "פוע",
    "ihutt": "פע",
};

const ihibb = createNewForm();
ihibb.formName = IHIBB;
ihibb.representativeRoot = "חבּ";
ihibb.Ana = buildPronoun("אַֽפִֽ֫יעّ", [IJIB, INSA, IHUTT]);
ihibb.Inte = buildPronoun("תְֽפִֽ֫יעّ", [IJIB, INSA, IHUTT]);
ihibb.Inti = buildPronoun("תְֽ֫פִיעִֽّי", [IJIB, INSA, IHUTT]);
ihibb.Huwe = buildPronoun("יִֽפִֽ֫יעّ", [IJIB, INSA, IHUTT]);
ihibb.Hiye = buildPronoun("תְֽפִֽ֫יעّ", [IJIB, INSA, IHUTT]);
ihibb.Ihna = buildPronoun("נְֽפִֽ֫יעّ", [IJIB, INSA, IHUTT]);
ihibb.Intu = buildPronoun("תְֽ֫פִיעֽّוּ", [IJIB, INSA, IHUTT]);
ihibb.Humme = buildPronoun("יִֽפִֽ֫יעֽّוּ", [IJIB, INSA, IHUTT]);
ihibb.populateRemainingPronouns();
ihibb.processingToForm = {
    "ijib": "פיע",
    "insa": "פעל",
    "ihutt": "פעל",
};

const ihutt = createNewForm();
ihutt.formName = IHUTT;
ihutt.representativeRoot = "חט";
ihutt.Ana = buildPronoun("אַֽפֽ֫וּעّ", [IRUH, INSA, IHIBB]);
ihutt.Inte = buildPronoun("תְֽפֽ֫וּעّ", [IRUH, INSA, IHIBB]);
ihutt.Inti = buildPronoun("תְֽ֫פוּעִֽّי", [IRUH, INSA, IHIBB]);
ihutt.Huwe = buildPronoun("יִֽפֽ֫וּעّ", [IRUH, INSA, IHIBB]);
ihutt.Hiye = buildPronoun("תְֽפֽ֫וּעّ", [IRUH, INSA, IHIBB]);
ihutt.Ihna = buildPronoun("נְֽפֽ֫וּעّ", [IRUH, INSA, IHIBB]);
ihutt.Intu = buildPronoun("תְֽפֽ֫וּעֽّוּ", [IRUH, INSA, IHIBB]);
ihutt.Humme = buildPronoun("יְֽפֽ֫וּעֽّוּ", [IRUH, INSA, IHIBB]);
ihutt.populateRemainingPronouns();
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