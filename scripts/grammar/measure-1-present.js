
const TENSE = "present";
const BUKTOL = "buktol";
const BIMSEK = "bimsek";
const BISMA = "bisma";
const BIRUH = "biruh";
const BIJIB = "bijib";
const BIHKI = "bihki";
const BINSA = "binsa";
const BIHIBB = "bihibb";
const BIHUTT = "bihutt";

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
        addDistractingFormsToAll: function (newDistractingForm) {

            this.Ana.distractingForms.push(...newDistractingForm);
            this.Inte.distractingForms.push(...newDistractingForm);
            this.Inti.distractingForms.push(...newDistractingForm);
            this.Huwe.distractingForms.push(...newDistractingForm);
            this.Hiye.distractingForms.push(...newDistractingForm);
            this.Ihna.distractingForms.push(...newDistractingForm);
            this.Intu.distractingForms.push(...newDistractingForm);
            this.Humme.distractingForms.push(...newDistractingForm);
        },

        processingToForm: ""
    }
}

const buktol = createNewForm();
buktol.formName = BUKTOL;
buktol.representativeRoot = "קתל";
buktol.Ana = buildPronoun("בַּֽ֫פְעֽוֹל", []);
buktol.Inte = buildPronoun("בְּֽ֫תוּפְעֽוֹל", []);
buktol.Inti = buildPronoun("בְּֽ֫תוּפֽוּעְלִֽי", []);
buktol.Huwe = buildPronoun("בּֽ֫וּפְעֽוֹל", []);
buktol.Hiye = buildPronoun("בְּֽ֫תוּפְֽעוֹל", []);
buktol.Ihna = buildPronoun("מְֽ֫נוּפְעֽוֹל", []);
buktol.Intu = buildPronoun("בְּֽ֫תוּפֽוּעְלֽוּ", []);
buktol.Humme = buildPronoun("בּֽ֫וּפֽוּעְלֽוּ", []);
buktol.addDistractingFormsToAll([BIMSEK, BISMA, BIRUH]);
buktol.populateRemainingPronouns();
buktol.processingToForm = {
    "bimsek": "פעל",
    "bisma": "פעל",
    "biruh": "פַעאל",
};


const bimsek = createNewForm();
bimsek.formName = BIMSEK;
bimsek.representativeRoot = "מסכּ";
bimsek.Ana = buildPronoun("בַּֽ֫פְעֵֽל", []);
bimsek.Inte = buildPronoun("בְּֽ֫תִיפְעֵֽל", []);
bimsek.Inti = buildPronoun("בְּֽ֫תִיפִֽיעְלִֽי", []);
bimsek.Huwe = buildPronoun("בִּֽ֫יפְעֵֽל", []);
bimsek.Hiye = buildPronoun("בְּֽ֫תִיפְעֵֽל", []);
bimsek.Ihna = buildPronoun("מְֽ֫נִיפְעֵֽל", []);
bimsek.Intu = buildPronoun("בְּֽ֫תִיפִֽיעְלֽוּ", []);
bimsek.Humme = buildPronoun("בִּֽ֫יפִֽיעְלֽוּ", []);
bimsek.addDistractingFormsToAll([BUKTOL, BISMA, BIRUH]);
bimsek.populateRemainingPronouns();
bimsek.processingToForm = {
    "buktol": "פעל",
    "bisma": "פעל",
    "biruh": "פַעאל",
};


const bisma = createNewForm();
bisma.formName = BISMA;
bisma.representativeRoot = "סמע";
bisma.Ana = buildPronoun("בַּֽ֫פְעַֽל", []);
bisma.Inte = buildPronoun("בְּֽ֫תִיפְעַֽל", []);
bisma.Inti = buildPronoun("בְּֽ֫תִיפְעַֽלִֽי", []);
bisma.Huwe = buildPronoun("בִּֽ֫יפְעַֽל", []);
bisma.Hiye = buildPronoun("בְּֽ֫תִיפְעַֽל", []);
bisma.Ihna = buildPronoun("מְֽ֫נִיפְעַֽל", []);
bisma.Intu = buildPronoun("בְּֽ֫תִיפְעַֽלֽוּ", []);
bisma.Humme = buildPronoun("בִּֽ֫יפְעַֽלֽוּ", []);
bisma.addDistractingFormsToAll([BUKTOL, BIMSEK, BIRUH]);
bisma.populateRemainingPronouns();
bisma.processingToForm = {
    "buktol": "פעל",
    "bimsek": "פעל",
    "biruh": "פַעאל",
};


const biruh = createNewForm();
biruh.formName = BIRUH;
biruh.representativeRoot = "רוח";
biruh.Ana = buildPronoun("בַּֽפֽ֫וּל", []);
biruh.Inte = buildPronoun("בִּֽיתְפֽ֫וּל", []);
biruh.Inti = buildPronoun("בִּֽיתְפֽ֫וּלֽי", []);
biruh.Huwe = buildPronoun("בִּֽיפֽ֫וּל", []);
biruh.Hiye = buildPronoun("בִּֽיתְפֽ֫וּל", []);
biruh.Ihna = buildPronoun("מִֽינְפֽ֫וּל", []);
biruh.Intu = buildPronoun("בִּֽיתְפֽ֫וּלֽוּ", []);
biruh.Humme = buildPronoun("בִּֽיפֽ֫וּלֽוּ", []);
biruh.addDistractingFormsToAll([BIJIB, BINSA, BIHUTT]);
biruh.populateRemainingPronouns();
biruh.processingToForm = {
    "bijib": "פעל",
    "binsa": "פלא",
    "bihutt": "פל",
};

const bijib = createNewForm();
bijib.formName = BIJIB;
bijib.representativeRoot = "ג'יבּ";
bijib.Ana = buildPronoun("בַּֽפִֽ֫יל", []);
bijib.Inte = buildPronoun("בִּֽיתְפִֽ֫יל", []);
bijib.Inti = buildPronoun("בִּֽיתְפִֽ֫ילִֽי", []);
bijib.Huwe = buildPronoun("בִּֽיפִֽ֫יל", []);
bijib.Hiye = buildPronoun("בִּֽיתְפִֽ֫יל", []);
bijib.Ihna = buildPronoun("מִֽינְפִֽ֫יל", []);
bijib.Intu = buildPronoun("בִּֽיתְפִֽ֫ילֽוּ", []);
bijib.Humme = buildPronoun("בִּֽיפִֽ֫ילֽוּ", []);
bijib.addDistractingFormsToAll([BISMA, BINSA, BIHIBB]);
bijib.populateRemainingPronouns();
bijib.processingToForm = {
    "bisma": "פעל",
    "binsa": "פלא",
    "bihibb": "פל",
};


const bihki = createNewForm();
bihki.formName = BIHKI;
bihki.representativeRoot = "חכּי";
bihki.Ana = buildPronoun("בַּֽ֫פְעִֽי", [BINSA]);
bihki.Inte = buildPronoun("בְּֽ֫תִיפְעִֽי", [BINSA]);
bihki.Inti = buildPronoun("בְּֽ֫תִיפְעִֽי", [BIJIB]);
bihki.Huwe = buildPronoun("בִּֽ֫יפְעִֽי", [BINSA]);
bihki.Hiye = buildPronoun("בְּֽ֫תִיפְעִֽי", [BINSA]);
bihki.Ihna = buildPronoun("מְֽ֫נִיפְעִֽי", [BINSA]);
bihki.Intu = buildPronoun("בְּֽ֫תִיפְעֽוּ", [BIJIB]);
bihki.Humme = buildPronoun("בִּֽ֫יפְעֽוּ", [BIJIB]);
bihki.addDistractingFormsToAll([BIRUH, BIHIBB]);
bihki.populateRemainingPronouns();
bihki.processingToForm = {
    "biruh": "פוע",
    "bijib": "פיע",
    "binsa": "פעא",
    "bihibb": "פע",
};

const binsa = createNewForm();
binsa.formName = BINSA;
binsa.representativeRoot = "נסא";
binsa.Ana = buildPronoun("בַּֽ֫פְעַֽא", [BIRUH]);
binsa.Inte = buildPronoun("בְּֽ֫תִיפְעַֽא", [BIRUH]);
binsa.Inti = buildPronoun("בְּֽ֫תִיפְעִֽי", [BISMA]);
binsa.Huwe = buildPronoun("בִּֽ֫יפְעַֽא", [BIRUH]);
binsa.Hiye = buildPronoun("בְּֽ֫תִיפְעַֽא", [BIRUH]);
binsa.Ihna = buildPronoun("מְֽ֫נִיפְעַֽא", [BIRUH]);
binsa.Intu = buildPronoun("בְּֽ֫תִיפְעֽוּ", [BISMA]);
binsa.Humme = buildPronoun("בִּֽ֫יפְעֽוּ", [BISMA]);
binsa.addDistractingFormsToAll([BIMSEK, BIHUTT]);
binsa.populateRemainingPronouns();
binsa.processingToForm = {
    "bimsek": "פעל",
    "bisma": "פעל",
    "biruh": "פוע",
    "bihutt": "פע",
};

const bihibb = createNewForm();
bihibb.formName = BIHIBB;
bihibb.representativeRoot = "חבּ";
bihibb.Ana = buildPronoun("בַּֽפִֽ֫יעّ", []);
bihibb.Inte = buildPronoun("בִּֽיתְפִֽ֫יעّ", []);
bihibb.Inti = buildPronoun("בִּֽיתְפִֽ֫יעִֽّי", []);
bihibb.Huwe = buildPronoun("בִּֽיפִֽ֫יעّ", []);
bihibb.Hiye = buildPronoun("בִּֽיתְפִֽ֫יעّ", []);
bihibb.Ihna = buildPronoun("מִֽינְפִֽ֫יעّ", []);
bihibb.Intu = buildPronoun("בִּֽיתְפִֽ֫יעֽّוּ", []);
bihibb.Humme = buildPronoun("בִּֽיפִֽ֫יעֽّוּ", []);
bihibb.addDistractingFormsToAll([BIJIB, BINSA, BIHUTT]);
bihibb.populateRemainingPronouns();
bihibb.processingToForm = {
    "bijib": "פיע",
    "binsa": "פעל",
    "bihutt": "פעל",
};

const bihutt = createNewForm();
bihutt.formName = BIHUTT;
bihutt.representativeRoot = "חט";
bihutt.Ana = buildPronoun("בַּֽפֽ֫וּעّ", []);
bihutt.Inte = buildPronoun("בִּֽיתְפֽ֫וּעّ", []);
bihutt.Inti = buildPronoun("בִּֽיתְפֽ֫וּעִֽّי", []);
bihutt.Huwe = buildPronoun("בִּֽיפֽ֫וּעّ", []);
bihutt.Hiye = buildPronoun("בִּֽיתְפֽ֫וּעّ", []);
bihutt.Ihna = buildPronoun("מִֽינְפֽ֫וּעّ", []);
bihutt.Intu = buildPronoun("בִּֽיתְפֽ֫וּעֽّוּ", []);
bihutt.Humme = buildPronoun("בִּֽיפֽ֫וּעֽّוּ", []);
bihutt.addDistractingFormsToAll([BIRUH, BINSA, BIHIBB]);
bihutt.populateRemainingPronouns();
bihutt.processingToForm = {
    "biruh": "פוע",
    "binsa": "פעל",
    "bihibb": "פעל",
};

export const formsPresent = {
    "buktol": buktol,
    "bimsek": bimsek,
    "bisma": bisma,
    "biruh": biruh,
    "bijib": bijib,
    "bihki": bihki,
    "binsa": binsa,
    "bihibb": bihibb,
    "bihutt": bihutt
}