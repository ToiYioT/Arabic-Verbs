
const TENSE = "past210";
const KARRAR = "karrar";
const SAAFAR = "saafar";
const TALLAM = "tallam";
const TNAAZAL = "tnaazal";
const INMASAK = "inmasak";
const ISHTARAL = "ishtaral";
const ISTAAMAL = "istaamal";


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

/// measure 2
const karrar = createNewForm();
karrar.formName = KARRAR;
karrar.Ana = buildPronoun("פַעַّלֵת", []);
karrar.Inte = buildPronoun("פַעַّלֵת", []);
karrar.Inti = buildPronoun("פַעַّלְתי", []);
karrar.Huwe = buildPronoun("פַעַّל", []);
karrar.Hiye = buildPronoun("פַעַّלַת", []);
karrar.Ihna = buildPronoun("פַעַّלְנַא", []);
karrar.Intu = buildPronoun("פַעַّלְתוּ", []);
karrar.Humme = buildPronoun("פַעַّלוּ", []);
karrar.addDistractingFormsToAll(["saafar", "tallam", "katab"]);
karrar.populateRemainingPronouns();
karrar.processingToForm = {
    "saafar": "פעל",
    "tallam": "פעל",
    "katab": "פעל",
};


/// measure 3
const saafar = createNewForm();
saafar.formName = SAAFAR;
saafar.Ana = buildPronoun("פַאעַלֵת", []);
saafar.Inte = buildPronoun("פַאעַלֵת", []);
saafar.Inti = buildPronoun("פַאעַלְתִי", []);
saafar.Huwe = buildPronoun("פַאעַל", []);
saafar.Hiye = buildPronoun("פַאעַלַת", []);
saafar.Ihna = buildPronoun("פַאעַלְנַא", []);
saafar.Intu = buildPronoun("פַאעַלְתוּ", []);
saafar.Humme = buildPronoun("פַאעַלוּ", []);
saafar.addDistractingFormsToAll(["tnaazal", "istaamal", "karrar"]);
saafar.populateRemainingPronouns();
saafar.processingToForm = {
    "tnaazal": "פעל",
    "istaamal": "פעל",
    "karrar": "פעל",
};

/// measure 5
const tallam = createNewForm();
tallam.formName = TALLAM;
tallam.Ana = buildPronoun("תְפַעַّלֵת", []);
tallam.Inte = buildPronoun("תְפַעַّלֵת", []);
tallam.Inti = buildPronoun("תְפַעַّלְתִי", []);
tallam.Huwe = buildPronoun("תְפַעַّל", []);
tallam.Hiye = buildPronoun("תְפַעַّלַת", []);
tallam.Ihna = buildPronoun("תְפַעַّלְנַא", []);
tallam.Intu = buildPronoun("תְפַעַّלְתוּ", []);
tallam.Humme = buildPronoun("תְפַעַّלוּ", []);
tallam.addDistractingFormsToAll(["inmasak", "tnaazal", "katab"]);
tallam.populateRemainingPronouns();
tallam.processingToForm = {
    "inmasak": "פעל",
    "tnaazal": "פעל",
    "katab": "פעל",
};


/// measure 6
const tnaazal = createNewForm();
tnaazal.formName = TNAAZAL;
tnaazal.Ana = buildPronoun("תְפַאעַלֵת", []);
tnaazal.Inte = buildPronoun("תְפַאעַלֵת", []);
tnaazal.Inti = buildPronoun("תְפַאעַלְתִי", []);
tnaazal.Huwe = buildPronoun("תְפַאעַל", []);
tnaazal.Hiye = buildPronoun("תְפַאעַלַת", []);
tnaazal.Ihna = buildPronoun("תְפַאעַלְנַא", []);
tnaazal.Intu = buildPronoun("תְפַאעַלְתוּ", []);
tnaazal.Humme = buildPronoun("תְפַאעַלוּ", []);
tnaazal.addDistractingFormsToAll([ISHTARAL, "saafar", "tallam"]);
tnaazal.populateRemainingPronouns();
tnaazal.processingToForm = {
    "ishtaral": "פעל",
    "saafar": "פעל",
    "tallam": "פעל",
};


/// measure 7
const inmasak = createNewForm();
inmasak.formName = INMASAK;
inmasak.Ana = buildPronoun("אִנְפַעַלֵת", []);
inmasak.Inte = buildPronoun("אִנְפַעַלֵת", []);
inmasak.Inti = buildPronoun("אִנְפַעַלְתִי", []);
inmasak.Huwe = buildPronoun("אִנְפַעַל", []);
inmasak.Hiye = buildPronoun("אִנְפַעְלַת", []);
inmasak.Ihna = buildPronoun("אִנְפַעַלְנַא", []);
inmasak.Intu = buildPronoun("אִנְפַעַלְתוּ", []);
inmasak.Humme = buildPronoun("אִנְפַעַלוּ", []);
inmasak.addDistractingFormsToAll([ISHTARAL, "katab", "istaamal"]);
inmasak.populateRemainingPronouns();
inmasak.processingToForm = {
    "ishtaral": "פעל",
    "istaamal": "פעל",
    "katab": "פעל",
};


/// measure 8
const ishtaral = createNewForm();
ishtaral.formName = ISHTARAL;
ishtaral.Ana = buildPronoun("אִפְתַעַלֵת", []);
ishtaral.Inte = buildPronoun("אִפְתַעַלֵת", []);
ishtaral.Inti = buildPronoun("אִפְתַעַלְתִי", []);
ishtaral.Huwe = buildPronoun("אִפְתַעַל", []);
ishtaral.Hiye = buildPronoun("אִפְתַעְלַת", []);
ishtaral.Ihna = buildPronoun("אִפְתַעַלְנַא", []);
ishtaral.Intu = buildPronoun("אִפְתַעַלְתוּ", []);
ishtaral.Humme = buildPronoun("אִפְתַעַלוּ", []);
ishtaral.addDistractingFormsToAll([TALLAM, "katab", "inmasak"]);
ishtaral.populateRemainingPronouns();
ishtaral.processingToForm = {
    "tallam": "פעל",
    "katab": "פעל",
    "inmasak": "פעל",
};


/// measure 10
const istaamal = createNewForm();
istaamal.formName = ISTAAMAL;
istaamal.Ana = buildPronoun("אִסְתַפְעַלֵת", []);
istaamal.Inte = buildPronoun("אִסְתַפְעַלֵת", []);
istaamal.Inti = buildPronoun("אִסְתַפְעַלְתִי", []);
istaamal.Huwe = buildPronoun("אִסְתַפְעַל", []);
istaamal.Hiye = buildPronoun("אִסְתַפְעַלַת", []);
istaamal.Ihna = buildPronoun("אִסְתַפְעַלְנַא", []);
istaamal.Intu = buildPronoun("אִסְתַפְעַלְתוּ", []);
istaamal.Humme = buildPronoun("אִסְתַפְעַלוּ", []);
istaamal.addDistractingFormsToAll([TALLAM, "katab", "saafar"]);
istaamal.populateRemainingPronouns();
istaamal.processingToForm = {
    "tallam": "פעל",
    "katab": "פעל",
    "saafar": "פעל",
};



export const formsPast210 = {
    "karrar": karrar,
    "saafar": saafar,
    "tallam": tallam,
    "tnaazal": tnaazal,
    "inmasak": inmasak,
    "ishtaral": ishtaral,
    "istaamal": istaamal,
}