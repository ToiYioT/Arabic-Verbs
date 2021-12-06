
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
buktol.Ana = buildPronoun("בַּפְעֺל", []);
buktol.Inte = buildPronoun("בְּתֻפְעֺל", []);
buktol.Inti = buildPronoun("בְּתֻפֻעְלִי", []);
buktol.Huwe = buildPronoun("בּוּפְעֺל", []);
buktol.Hiye = buildPronoun("בְּתֻפְעֺל", []);
buktol.Ihna = buildPronoun("מְנֻפְעֺל", []);
buktol.Intu = buildPronoun("בְּתֻפֻעְלוּ", []);
buktol.Humme = buildPronoun("בּוּפֻעְלוּ", []);
buktol.addDistractingFormsToAll([BIMSEK, BISMA, BIRUH]);
buktol.populateRemainingPronouns();
buktol.processingToForm = {
    "bimsek": "פעל",
    "bisma": "פעל",
    "biruh": "פַעאל",
};


const bimsek = createNewForm();
bimsek.formName = BIMSEK;
bimsek.Ana = buildPronoun("בַּפְעֵל", []);
bimsek.Inte = buildPronoun("בְּתִפְעֵל", []);
bimsek.Inti = buildPronoun("בְּתִפִעְלִי", []);
bimsek.Huwe = buildPronoun("בִּיפְעֵל", []);
bimsek.Hiye = buildPronoun("בְּתִפְעֵל", []);
bimsek.Ihna = buildPronoun("מְנִפְעֵל", []);
bimsek.Intu = buildPronoun("בְּתִפִעְלוּ", []);
bimsek.Humme = buildPronoun("בִּיפִעְלוּ", []);
bimsek.addDistractingFormsToAll([BUKTOL, BISMA, BIRUH]);
bimsek.populateRemainingPronouns();
bimsek.processingToForm = {
    "buktol": "פעל",
    "bisma": "פעל",
    "biruh": "פַעאל",
};


const bisma = createNewForm();
bisma.formName = BISMA;
bisma.Ana = buildPronoun("בַּפְעַל", []);
bisma.Inte = buildPronoun("בְּתִפְעַל", []);
bisma.Inti = buildPronoun("בְּתִפְעַלִי", []);
bisma.Huwe = buildPronoun("בִּיפְעַל", []);
bisma.Hiye = buildPronoun("בְּתִפְעַל", []);
bisma.Ihna = buildPronoun("מְנִפְעַל", []);
bisma.Intu = buildPronoun("בְּתִפְעַלוּ", []);
bisma.Humme = buildPronoun("בִּיפְעַלוּ", []);
bisma.addDistractingFormsToAll([BUKTOL, BIMSEK, BIRUH]);
bisma.populateRemainingPronouns();
bisma.processingToForm = {
    "buktol": "פעל",
    "bimsek": "פעל",
    "biruh": "פַעאל",
};


const biruh = createNewForm();
biruh.formName = BIRUH;
biruh.Ana = buildPronoun("בַּפוּל", []);
biruh.Inte = buildPronoun("בִּתְפוּל", []);
biruh.Inti = buildPronoun("בִּתְפוּלי", []);
biruh.Huwe = buildPronoun("בִּיפוּל", []);
biruh.Hiye = buildPronoun("בִּתְפוּל", []);
biruh.Ihna = buildPronoun("מִנְפוּל", []);
biruh.Intu = buildPronoun("בִּתְפוּלוּ", []);
biruh.Humme = buildPronoun("בִּיפוּלוּ", []);
biruh.addDistractingFormsToAll([BIJIB, BINSA, BIHUTT]);
biruh.populateRemainingPronouns();
biruh.processingToForm = {
    "bijib": "פעל",
    "binsa": "פלא",
    "bihutt": "פל",
};

const bijib = createNewForm();
bijib.formName = BIJIB;
bijib.Ana = buildPronoun("בַּפִיל", []);
bijib.Inte = buildPronoun("בִּתְפִיל", []);
bijib.Inti = buildPronoun("בִּתְפִילִי", []);
bijib.Huwe = buildPronoun("בִּיפִיל", []);
bijib.Hiye = buildPronoun("בִּתְפִיל", []);
bijib.Ihna = buildPronoun("מִנְפִיל", []);
bijib.Intu = buildPronoun("בִּתְפִילו", []);
bijib.Humme = buildPronoun("בִּיפִילוּ", []);
bijib.addDistractingFormsToAll([BISMA, BINSA, BIHIBB]);
bijib.populateRemainingPronouns();
bijib.processingToForm = {
    "bisma": "פעל",
    "binsa": "פלא",
    "bihibb": "פל",
};


const bihki = createNewForm();
bihki.formName = BIHKI;
bihki.Ana = buildPronoun("בַּפְעִי", [BINSA]);
bihki.Inte = buildPronoun("בְּתִפְעִי", [BINSA]);
bihki.Inti = buildPronoun("בְּתִפְעִי", [BIJIB]);
bihki.Huwe = buildPronoun("בִּיפְעִי", [BINSA]);
bihki.Hiye = buildPronoun("בְּתִפְעִי", [BINSA]);
bihki.Ihna = buildPronoun("מְנִפְעִי", [BINSA]);
bihki.Intu = buildPronoun("בְּתִפְעוּ", [BIJIB]);
bihki.Humme = buildPronoun("בִּיפְעוּ", [BIJIB]);
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
binsa.Ana = buildPronoun("בַּפְעַא", [BIRUH]);
binsa.Inte = buildPronoun("בְּתִפְעַא", [BIRUH]);
binsa.Inti = buildPronoun("בְּתִפְעִי", [BISMA]);
binsa.Huwe = buildPronoun("בִּיפְעַא", [BIRUH]);
binsa.Hiye = buildPronoun("בְּתִפְעַא", [BIRUH]);
binsa.Ihna = buildPronoun("מְנִפְעַא", [BIRUH]);
binsa.Intu = buildPronoun("בְּתִפְעוּ", [BISMA]);
binsa.Humme = buildPronoun("בִּיפְעוּ", [BISMA]);
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
bihibb.Ana = buildPronoun("בַּפִעّ", []);
bihibb.Inte = buildPronoun("בִּתְפִעّ", []);
bihibb.Inti = buildPronoun("בִּתְפִעִّי", []);
bihibb.Huwe = buildPronoun("בִּיפִעّ", []);
bihibb.Hiye = buildPronoun("בִּתְפִעّ", []);
bihibb.Ihna = buildPronoun("מִנְפִעّ", []);
bihibb.Intu = buildPronoun("בִּתְפִעّוּ", []);
bihibb.Humme = buildPronoun("בִּיפִעّוּ", []);
bihibb.addDistractingFormsToAll([BIJIB, BINSA, BIHUTT]);
bihibb.populateRemainingPronouns();
bihibb.processingToForm = {
    "bijib": "פיע",
    "binsa": "פעל",
    "bihutt": "פעל",
};

const bihutt = createNewForm();
bihutt.formName = BIHUTT;
bihutt.Ana = buildPronoun("בַּפֻעّ", []);
bihutt.Inte = buildPronoun("בִּתְפֻעّ", []);
bihutt.Inti = buildPronoun("בִּתְפֻעִّי", []);
bihutt.Huwe = buildPronoun("בִּיפֻעّ", []);
bihutt.Hiye = buildPronoun("בִּתְפֻעّ", []);
bihutt.Ihna = buildPronoun("מִנְפֻעّ", []);
bihutt.Intu = buildPronoun("בִּתְפֻעّוּ", []);
bihutt.Humme = buildPronoun("בִּיפֻעّוּ", []);
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