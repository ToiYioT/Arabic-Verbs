
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
yikarrer.Ana = buildPronoun("אַֽפַֽ֫עֵֽّל", []);
yikarrer.Inte = buildPronoun("תְֽ֫פַעֵֽّל", []);
yikarrer.Inti = buildPronoun("תְֽ֫פַעֵֽّלִֽי", []);
yikarrer.Huwe = buildPronoun("יְֽפַֽ֫עֵֽّל", []);
yikarrer.Hiye = buildPronoun("תְֽ֫פַעֵֽّל", []);
yikarrer.Ihna = buildPronoun("נְֽ֫פַעֵֽّל", []);
yikarrer.Intu = buildPronoun("תְֽ֫פַעֵֽّלֽוּ", []);
yikarrer.Humme = buildPronoun("יְֽפַֽ֫עֵֽّלֽוּ", []);
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
yikarreb.Ana = buildPronoun("אַֽפַֽ֫עֵֽّל", []);
yikarreb.Inte = buildPronoun("תְֽ֫פַעֵֽّל", []);
yikarreb.Inti = buildPronoun("תְֽ֫פַעְّלִֽי", []);
yikarreb.Huwe = buildPronoun("יְֽפַֽ֫עֵֽّל", []);
yikarreb.Hiye = buildPronoun("תְֽ֫פַעֵֽّל", []);
yikarreb.Ihna = buildPronoun("נְֽ֫פַעֵֽّל", []);
yikarreb.Intu = buildPronoun("תְֽ֫פַעְّלֽוּ", []);
yikarreb.Humme = buildPronoun("יְֽפַֽ֫עְّלֽוּ", []);
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
yisaafer.Ana = buildPronoun("אַֽפַֽ֫אעֵֽל", []);
yisaafer.Inte = buildPronoun("תְֽ֫פַאעֵֽל", []);
yisaafer.Inti = buildPronoun("תְֽ֫פַאעְלֽי", []);
yisaafer.Huwe = buildPronoun("יְֽפַֽ֫אעֵֽל", []);
yisaafer.Hiye = buildPronoun("תְֽ֫פַאעֵֽל", []);
yisaafer.Ihna = buildPronoun("נְֽ֫פַאעֵֽל", []);
yisaafer.Intu = buildPronoun("תְֽ֫פַאעְלֽוּ", []);
yisaafer.Humme = buildPronoun("יְֽפַֽ֫אעְלֽוּ", []);
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
yittallam.Ana = buildPronoun("אַֽתְפַֽ֫עַֽّל", []);
yittallam.Inte = buildPronoun("תִֽיתְפַֽ֫עַֽّל", []);
yittallam.Inti = buildPronoun("תִֽיתְפַֽ֫עַֽّלִֽי", []);
yittallam.Huwe = buildPronoun("יִֽתְפַֽ֫עַֽّל", []);
yittallam.Hiye = buildPronoun("תִֽיתְפַֽ֫עַֽّל", []);
yittallam.Ihna = buildPronoun("נִֽיתְפַֽ֫עַֽّל", []);
yittallam.Intu = buildPronoun("תִֽיתְפַֽ֫עַֽّלֽוּ", []);
yittallam.Humme = buildPronoun("יִֽתְפַֽ֫עַֽّלֽוּ", []);
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
yitnaazal.Ana = buildPronoun("אַֽתְפַֽ֫אעַֽל", []);
yitnaazal.Inte = buildPronoun("תִֽיתְפַֽ֫אעַֽל", []);
yitnaazal.Inti = buildPronoun("תִֽיתְפַֽ֫אעַֽלִֽי", []);
yitnaazal.Huwe = buildPronoun("יִֽתְפַֽ֫אעַֽל", []);
yitnaazal.Hiye = buildPronoun("תִֽיתְפַֽ֫אעַֽל", []);
yitnaazal.Ihna = buildPronoun("נִֽיתְפַֽ֫אעַֽל", []);
yitnaazal.Intu = buildPronoun("תִֽיתְפַֽ֫אעַֽלֽוּ", []);
yitnaazal.Humme = buildPronoun("יִֽתְפַֽ֫אעַֽלֽוּ", []);
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
yinimsek.Ana = buildPronoun("אַֽ֫נִֽיפְעֵֽל", []);
yinimsek.Inte = buildPronoun("תִֽ֫ינִֽיפְעֵֽל", []);
yinimsek.Inti = buildPronoun("תִֽינְפִֽ֫יעְלִֽי", []);
yinimsek.Huwe = buildPronoun("יִֽ֫נִֽיפְעֵֽל", []);
yinimsek.Hiye = buildPronoun("תִֽ֫ינִֽיפְעֵֽל", []);
yinimsek.Ihna = buildPronoun("נִֽ֫ינִֽיפְעֵֽל", []);
yinimsek.Intu = buildPronoun("תִֽינְפִֽ֫יעְלֽוּ", []);
yinimsek.Humme = buildPronoun("יִֽנְפִֽ֫יעְלֽוּ", []);
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
yishtrel.Ana = buildPronoun("אַֽ֫פְתְעֵֽל", []);
yishtrel.Inte = buildPronoun("תִֽ֫יפְתְעֵֽל", []);
yishtrel.Inti = buildPronoun("תִֽיפְתִֽ֫יעְלִֽי", []);
yishtrel.Huwe = buildPronoun("יִֽ֫פְתְעֵֽל", []);
yishtrel.Hiye = buildPronoun("תִֽ֫יפְתְעֵֽל", []);
yishtrel.Ihna = buildPronoun("נִֽ֫יפְתְעֵֽל", []);
yishtrel.Intu = buildPronoun("תִֽיפְתִֽ֫יעְלֽוּ", []);
yishtrel.Humme = buildPronoun("יִֽפְתִֽ֫יעְלֽוּ", []);
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
yistaamel.Ana = buildPronoun("אַֽסְתַֽ֫פְעֵֽל", []);
yistaamel.Inte = buildPronoun("תִֽיסְתַֽ֫פְעֵֽל", []);
yistaamel.Inti = buildPronoun("תִֽיסְתַֽ֫פִֽיעְלִֽי", []);
yistaamel.Huwe = buildPronoun("יִֽסְתַֽ֫פְעֵֽל", []);
yistaamel.Hiye = buildPronoun("תִֽיסְתַֽ֫פְעֵֽל", []);
yistaamel.Ihna = buildPronoun("נִֽיסְתַֽ֫פְעֵֽל", []);
yistaamel.Intu = buildPronoun("תִֽיסְתַֽ֫פִֽיעְלֽוּ", []);
yistaamel.Humme = buildPronoun("יִֽסְתַֽ֫פִֽיעְלֽוּ", []);
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