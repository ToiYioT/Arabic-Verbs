
const TENSE = "future210";
const YIKARRER = "yikarrer";
const YIKARREB = "yikarreb";
const YISAAFER = "yisaafer";
const YITTALLAM = "yittallam";
const YITNAAZAL = "yitnaazal";
const YINIMSEK = "yinimsek";
const YISHTREL = "yishtrel";
const YISTAAMEL = "yistaamel";


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
const yikarrer = createNewForm();
yikarrer.formName = YIKARRER;
yikarrer.representativeRoot = "קרר";
yikarrer.Ana = buildPronoun("אַפַעֵّל", []);
yikarrer.Inte = buildPronoun("תְפַעֵّל", []);
yikarrer.Inti = buildPronoun("תְפַעֵّלִי", []);
yikarrer.Huwe = buildPronoun("יְפַעֵّל", []);
yikarrer.Hiye = buildPronoun("תְפַעֵّל", []);
yikarrer.Ihna = buildPronoun("נְפַעֵّל", []);
yikarrer.Intu = buildPronoun("תְפַעֵّלוּ", []);
yikarrer.Humme = buildPronoun("יְפַעֵّלוּ", []);
yikarrer.addDistractingFormsToAll(["yisaafer", "yittallam", "yisma"]);
yikarrer.populateRemainingPronouns();
yikarrer.processingToForm = {
    "yisaafer": "פעל",
    "yittallam": "פעל",
    "yisma": "פעל",
};

const yikarreb = createNewForm();
yikarreb.formName = YIKARREB;
yikarreb.representativeRoot = "קרבּ";
yikarreb.Ana = buildPronoun("אַפַעֵّל", []);
yikarreb.Inte = buildPronoun("תְפַעֵّל", []);
yikarreb.Inti = buildPronoun("תְפַעְّלִי", []);
yikarreb.Huwe = buildPronoun("יְפַעֵّל", []);
yikarreb.Hiye = buildPronoun("תְפַעֵّל", []);
yikarreb.Ihna = buildPronoun("נְפַעֵّל", []);
yikarreb.Intu = buildPronoun("תְפַעְّלוּ", []);
yikarreb.Humme = buildPronoun("יְפַעְّלוּ", []);
yikarreb.addDistractingFormsToAll(["yisaafer", "yittallam", "yisma"]);
yikarreb.populateRemainingPronouns();
yikarreb.processingToForm = {
    "yisaafer": "פעל",
    "yittallam": "פעל",
    "yisma": "פעל",
};


/// measure 3
const yisaafer = createNewForm();
yisaafer.formName = YISAAFER;
yisaafer.representativeRoot = "ספר";
yisaafer.Ana = buildPronoun("אַפַאעֵל", []);
yisaafer.Inte = buildPronoun("תְפַאעֵל", []);
yisaafer.Inti = buildPronoun("תְפַאעְלי", []);
yisaafer.Huwe = buildPronoun("יְפַאעֵל", []);
yisaafer.Hiye = buildPronoun("תְפַאעֵל", []);
yisaafer.Ihna = buildPronoun("נְפַאעֵל", []);
yisaafer.Intu = buildPronoun("תְפַאעְלוּ", []);
yisaafer.Humme = buildPronoun("יְפַאעְלוּ", []);
yisaafer.addDistractingFormsToAll(["yitnaazal", "yistaamel", "yikarrer"]);
yisaafer.populateRemainingPronouns();
yisaafer.processingToForm = {
    "yitnaazal": "פעל",
    "yistaamel": "פעל",
    "yikarrer": "פעל",
};

/// measure 5
const yittallam = createNewForm();
yittallam.formName = YITTALLAM;
yittallam.representativeRoot = "עלם";
yittallam.Ana = buildPronoun("אַתְפַעַّל", []);
yittallam.Inte = buildPronoun("תִתְפַעַّל", []);
yittallam.Inti = buildPronoun("תִתְפַעַّלִי", []);
yittallam.Huwe = buildPronoun("יִתְפַעַّל", []);
yittallam.Hiye = buildPronoun("תִתְפַעַّל", []);
yittallam.Ihna = buildPronoun("נִתְפַעַّל", []);
yittallam.Intu = buildPronoun("תִתְפַעַّלוּ", []);
yittallam.Humme = buildPronoun("יִתְפַעַّלוּ", []);
yittallam.addDistractingFormsToAll(["yinimsek", "yitnaazal", "yisma"]);
yittallam.populateRemainingPronouns();
yittallam.processingToForm = {
    "yinimsek": "פעל",
    "yitnaazal": "פעל",
    "yisma": "פעל",
};


/// measure 6
const yitnaazal = createNewForm();
yitnaazal.formName = YITNAAZAL;
yitnaazal.representativeRoot = "נזל";
yitnaazal.Ana = buildPronoun("אַתְפַאעַל", []);
yitnaazal.Inte = buildPronoun("תִתְפַאעַל", []);
yitnaazal.Inti = buildPronoun("תִתְפַאעַלִי", []);
yitnaazal.Huwe = buildPronoun("יִתְפַאעַל", []);
yitnaazal.Hiye = buildPronoun("תִתְפַאעַל", []);
yitnaazal.Ihna = buildPronoun("נִתְפַאעַל", []);
yitnaazal.Intu = buildPronoun("תִתְפַאעַלוּ", []);
yitnaazal.Humme = buildPronoun("יִתְפַאעַלוּ", []);
yitnaazal.addDistractingFormsToAll([YISHTREL, "yisaafer", "yittallam"]);
yitnaazal.populateRemainingPronouns();
yitnaazal.processingToForm = {
    "yishtrel": "פעל",
    "yisaafer": "פעל",
    "yittallam": "פעל",
};


/// measure 7
const yinimsek = createNewForm();
yinimsek.formName = YINIMSEK;
yinimsek.representativeRoot = "מסכּ";
yinimsek.Ana = buildPronoun("אַנִפְעֵל", []);
yinimsek.Inte = buildPronoun("תִנִפְעֵל", []);
yinimsek.Inti = buildPronoun("תִנְפִעְלִי", []);
yinimsek.Huwe = buildPronoun("יִנִפְעֵל", []);
yinimsek.Hiye = buildPronoun("תִנִפְעֵל", []);
yinimsek.Ihna = buildPronoun("נִנִפְעֵל", []);
yinimsek.Intu = buildPronoun("תִנְפִעְלוּ", []);
yinimsek.Humme = buildPronoun("יִנְפִעְלוּ", []);
yinimsek.addDistractingFormsToAll([YISHTREL, "yisma", "yistaamel"]);
yinimsek.populateRemainingPronouns();
yinimsek.processingToForm = {
    "yishtrel": "פעל",
    "yistaamel": "פעל",
    "yisma": "פעל",
};


/// measure 8
const yishtrel = createNewForm();
yishtrel.formName = YISHTREL;
yishtrel.representativeRoot = "שע'ל";
yishtrel.Ana = buildPronoun("אַפְתְעֵל", []);
yishtrel.Inte = buildPronoun("תִפְתְעֵל", []);
yishtrel.Inti = buildPronoun("תִפְתִעְלִי", []);
yishtrel.Huwe = buildPronoun("יִפְתְעֵל", []);
yishtrel.Hiye = buildPronoun("תִפְתְעֵל", []);
yishtrel.Ihna = buildPronoun("נִפְתְעֵל", []);
yishtrel.Intu = buildPronoun("תִפְתִעְלוּ", []);
yishtrel.Humme = buildPronoun("יִפְתִעְלוּ", []);
yishtrel.addDistractingFormsToAll([YITTALLAM, "yuktol", "yinimsek"]);
yishtrel.populateRemainingPronouns();
yishtrel.processingToForm = {
    "yittallam": "פעל",
    "yuktol": "פעל",
    "yinimsek": "פעל",
};


/// measure 10
const yistaamel = createNewForm();
yistaamel.formName = YISTAAMEL;
yistaamel.representativeRoot = "עמל";
yistaamel.Ana = buildPronoun("אַסְתַפְעֵל", []);
yistaamel.Inte = buildPronoun("תִסְתַפְעֵל", []);
yistaamel.Inti = buildPronoun("תִסְתַפִעְלִי", []);
yistaamel.Huwe = buildPronoun("יִסְתַפְעֵל", []);
yistaamel.Hiye = buildPronoun("תִסְתַפְעֵל", []);
yistaamel.Ihna = buildPronoun("נִסְתַפְעֵל", []);
yistaamel.Intu = buildPronoun("תִסְתַפִעְלוּ", []);
yistaamel.Humme = buildPronoun("יִסְתַפִעְלוּ", []);
yistaamel.addDistractingFormsToAll([YITTALLAM, "yisma", "yisaafer"]);
yistaamel.populateRemainingPronouns();
yistaamel.processingToForm = {
    "yittallam": "פעל",
    "yisma": "פעל",
    "yisaafer": "פעל",
};



export const formsFuture210 = {
    "yikarrer": yikarrer,
    "yikarreb": yikarreb,
    "yisaafer": yisaafer,
    "yittallam": yittallam,
    "yitnaazal": yitnaazal,
    "yinimsek": yinimsek,
    "yishtrel": yishtrel,
    "yistaamel": yistaamel,
}