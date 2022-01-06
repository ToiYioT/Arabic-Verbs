
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

/// measure 2
const karrar = createNewForm();
karrar.formName = KARRAR;
karrar.representativeRoot = "קרר";
karrar.Ana = buildPronoun("פַֽעַֽّ֫לֵֽת", []);
karrar.Inte = buildPronoun("פַֽעַֽّ֫לֵֽת", []);
karrar.Inti = buildPronoun("פַֽעַֽّ֫לְתֽי", []);
karrar.Huwe = buildPronoun("פַֽ֫עַֽّל", []);
karrar.Hiye = buildPronoun("פַֽ֫עַֽّלַֽת", []);
karrar.Ihna = buildPronoun("פַֽעַֽّ֫לְנַֽא", []);
karrar.Intu = buildPronoun("פַֽעַֽّ֫לְתֽוּ", []);
karrar.Humme = buildPronoun("פַֽ֫עַֽّלֽוּ", []);
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
saafar.representativeRoot = "ספר";
saafar.Ana = buildPronoun("פַֽאעַֽ֫לֵֽת", []);
saafar.Inte = buildPronoun("פַֽאעַֽ֫לֵֽת", []);
saafar.Inti = buildPronoun("פַֽאעַֽ֫לְתִֽי", []);
saafar.Huwe = buildPronoun("פַֽ֫אעַֽל", []);
saafar.Hiye = buildPronoun("פַֽ֫אעַֽלַֽת", []);
saafar.Ihna = buildPronoun("פַֽאעַֽ֫לְנַֽא", []);
saafar.Intu = buildPronoun("פַֽאעַֽ֫לְתֽוּ", []);
saafar.Humme = buildPronoun("פַֽ֫אעַֽלֽוּ", []);
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
tallam.representativeRoot = "עלם";
tallam.Ana = buildPronoun("תְֽפַעַֽّ֫לֵֽת", []);
tallam.Inte = buildPronoun("תְֽפַעַֽّ֫לֵֽת", []);
tallam.Inti = buildPronoun("תְֽפַעַֽّ֫לְתִֽי", []);
tallam.Huwe = buildPronoun("תְֽ֫פַעַֽّל", []);
tallam.Hiye = buildPronoun("תְֽ֫פַעַֽّלַֽת", []);
tallam.Ihna = buildPronoun("תְֽפַעַֽّ֫לְנַֽא", []);
tallam.Intu = buildPronoun("תְֽפַעַֽّ֫לְתֽוּ", []);
tallam.Humme = buildPronoun("תְֽ֫פַעַֽّלֽוּ", []);
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
tnaazal.representativeRoot = "נזל";
tnaazal.Ana = buildPronoun("תְֽפַאעַֽ֫לֵֽת", []);
tnaazal.Inte = buildPronoun("תְֽפַאעַֽ֫לֵת", []);
tnaazal.Inti = buildPronoun("תְֽפַאעַֽ֫לְתִֽי", []);
tnaazal.Huwe = buildPronoun("תְֽ֫פַאעַֽל", []);
tnaazal.Hiye = buildPronoun("תְֽ֫פַאעַֽלַֽת", []);
tnaazal.Ihna = buildPronoun("תְֽפַאעַֽ֫לְנַֽא", []);
tnaazal.Intu = buildPronoun("תְֽפַאעַֽ֫לְתֽוּ", []);
tnaazal.Humme = buildPronoun("תְֽ֫פַאעַֽלֽוּ", []);
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
inmasak.representativeRoot = "מסכּ";
inmasak.Ana = buildPronoun("אִֽינְפַֽעַֽ֫לֵת", []);
inmasak.Inte = buildPronoun("אִֽינְפַֽעַֽ֫לֵת", []);
inmasak.Inti = buildPronoun("אִֽינְפַֽעַֽ֫לְתִֽי", []);
inmasak.Huwe = buildPronoun("אִֽינְפַֽ֫עַֽל", []);
inmasak.Hiye = buildPronoun("אִֽינְפַֽ֫עְלַֽת", []);
inmasak.Ihna = buildPronoun("אִֽינְפַֽעַֽ֫לְנַֽא", []);
inmasak.Intu = buildPronoun("אִֽינְפַֽעַֽ֫לְתֽוּ", []);
inmasak.Humme = buildPronoun("אִֽינְפַֽ֫עַֽלֽוּ", []);
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
ishtaral.representativeRoot = "שע'ל";
ishtaral.Ana = buildPronoun("אִֽיפְתַֽעַֽ֫לֵֽת", []);
ishtaral.Inte = buildPronoun("אִֽיפְתַֽעַֽ֫לֵֽת", []);
ishtaral.Inti = buildPronoun("אִֽיפְתַֽעַֽ֫לְתִֽי", []);
ishtaral.Huwe = buildPronoun("אִֽיפְתַֽ֫עַֽל", []);
ishtaral.Hiye = buildPronoun("אִֽיפְתַֽ֫עְלַֽת", []);
ishtaral.Ihna = buildPronoun("אִֽיפְתַֽעַֽ֫לְנַֽא", []);
ishtaral.Intu = buildPronoun("אִֽיפְתַֽעַֽ֫לְתֽוּ", []);
ishtaral.Humme = buildPronoun("אִֽיפְתַֽ֫עַֽלֽוּ", []);
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
istaamal.representativeRoot = "עמל";
istaamal.Ana = buildPronoun("אִֽיסְתַֽפְעַֽ֫לֵֽת", []);
istaamal.Inte = buildPronoun("אִֽיסְתַֽפְעַֽ֫לֵֽת", []);
istaamal.Inti = buildPronoun("אִֽיסְתַֽפְעַֽ֫לְתִֽי", []);
istaamal.Huwe = buildPronoun("אִֽיסְתַֽ֫פְעַֽל", []);
istaamal.Hiye = buildPronoun("אִֽיסְתַֽ֫פְעַֽלַֽת", []);
istaamal.Ihna = buildPronoun("אִֽיסְתַֽפְעַֽ֫לְנַֽא", []);
istaamal.Intu = buildPronoun("אִֽיסְתַֽפְעַֽ֫לְתֽוּ", []);
istaamal.Humme = buildPronoun("אִֽיסְתַֽ֫פְעַֽלֽוּ", []);
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