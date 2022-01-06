
const TENSE = "present210";
const BIKARRER = "bikarrer";
const BIKARREB = "bikarreb";
const BISAAFER = "bisaafer";
const BITTALLAM = "bittallam";
const BITNAAZAL = "bitnaazal";
const BINIMSEK = "binimsek";
const BISHTREL = "bishtrel";
const BISTAAMEL = "bistaamel";


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
const bikarrer = createNewForm();
bikarrer.formName = BIKARRER;
bikarrer.representativeRoot = "קרר";
bikarrer.Ana = buildPronoun("בַּֽפַֽ֫עֵֽّל", []);
bikarrer.Inte = buildPronoun("בִּֽיתְפַֽ֫עֵֽّל", []);
bikarrer.Inti = buildPronoun("בִּֽיתְפַֽ֫עֵֽّלִֽי", []);
bikarrer.Huwe = buildPronoun("בִּֽיפַֽ֫עֵֽّל", []);
bikarrer.Hiye = buildPronoun("בִּֽיתְפַֽ֫עֵֽّל", []);
bikarrer.Ihna = buildPronoun("מִֽינְפַֽ֫עֵֽّל", []);
bikarrer.Intu = buildPronoun("בִּֽיתְפַֽ֫עֵֽّלֽוּ", []);
bikarrer.Humme = buildPronoun("בִּֽיפַֽ֫עֵֽّלֽוּ", []);
bikarrer.addDistractingFormsToAll(["bisaafer", "bittallam", "bisma"]);
bikarrer.populateRemainingPronouns();
bikarrer.processingToForm = {
    "bisaafer": "פעל",
    "bittallam": "פעל",
    "bisma": "פעל",
};

const bikarreb = createNewForm();
bikarreb.formName = BIKARREB;
bikarreb.representativeRoot = "קרבּ";
bikarreb.Ana = buildPronoun("בַּֽפַֽ֫עֵֽّל", []);
bikarreb.Inte = buildPronoun("בִּֽיתְפַֽ֫עֵֽّל", []);
bikarreb.Inti = buildPronoun("בִּֽיתְפַֽ֫עְّלִֽי", []);
bikarreb.Huwe = buildPronoun("בִּֽיפַֽ֫עֵֽّל", []);
bikarreb.Hiye = buildPronoun("בִּֽיתְפַֽ֫עֵֽّל", []);
bikarreb.Ihna = buildPronoun("מִֽינְפַֽ֫עֵֽّל", []);
bikarreb.Intu = buildPronoun("בִּֽיתְפַֽ֫עְّלֽוּ", []);
bikarreb.Humme = buildPronoun("בִּֽיפַֽ֫עְّלֽוּ", []);
bikarreb.addDistractingFormsToAll(["bisaafer", "bittallam", "bisma"]);
bikarreb.populateRemainingPronouns();
bikarreb.processingToForm = {
    "bisaafer": "פעל",
    "bittallam": "פעל",
    "bisma": "פעל",
};


/// measure 3
const bisaafer = createNewForm();
bisaafer.formName = BISAAFER;
bisaafer.representativeRoot = "ספר";
bisaafer.Ana = buildPronoun("בַּֽפַֽ֫אעֵֽל", []);
bisaafer.Inte = buildPronoun("בִּֽיתְפַֽ֫אעֵֽל", []);
bisaafer.Inti = buildPronoun("בִּֽיתְפַֽ֫אעְלֽי", []);
bisaafer.Huwe = buildPronoun("בִּֽיפַֽ֫אעֵֽל", []);
bisaafer.Hiye = buildPronoun("בִּֽיתְפַֽ֫אעֵֽל", []);
bisaafer.Ihna = buildPronoun("מִֽינְפַֽ֫אעֵֽל", []);
bisaafer.Intu = buildPronoun("בִּֽיתְפַֽ֫אעְלֽוּ", []);
bisaafer.Humme = buildPronoun("בִּֽיפַֽ֫אעְלֽוּ", []);
bisaafer.addDistractingFormsToAll(["bitnaazal", "bistaamel", "bikarrer"]);
bisaafer.populateRemainingPronouns();
bisaafer.processingToForm = {
    "bitnaazal": "פעל",
    "bistaamel": "פעל",
    "bikarrer": "פעל",
};

/// measure 5
const bittallam = createNewForm();
bittallam.formName = BITTALLAM;
bittallam.representativeRoot = "עלם";
bittallam.Ana = buildPronoun("בַּֽתְפַֽ֫עַֽّל", []);
bittallam.Inte = buildPronoun("בְּֽתִיתְפַֽ֫עַֽّל", []);
bittallam.Inti = buildPronoun("בְּֽתִיתְפַֽ֫עַֽّלִֽי", []);
bittallam.Huwe = buildPronoun("בִּֽיתְפַֽ֫עַֽّל", []);
bittallam.Hiye = buildPronoun("בְּֽתִיתְפַֽ֫עַֽّל", []);
bittallam.Ihna = buildPronoun("מְֽנִיתְפַֽ֫עַֽّל", []);
bittallam.Intu = buildPronoun("בְּֽתִיתְפַֽ֫עַֽّלֽוּ", []);
bittallam.Humme = buildPronoun("בִּֽיתְפַֽ֫עַֽّלֽוּ", []);
bittallam.addDistractingFormsToAll(["binimsek", "bitnaazal", "bisma"]);
bittallam.populateRemainingPronouns();
bittallam.processingToForm = {
    "binimsek": "פעל",
    "bitnaazal": "פעל",
    "bisma": "פעל",
};


/// measure 6
const bitnaazal = createNewForm();
bitnaazal.formName = BITNAAZAL;
bitnaazal.representativeRoot = "נזל";
bitnaazal.Ana = buildPronoun("בַּֽתְפַֽ֫אעַֽל", []);
bitnaazal.Inte = buildPronoun("בְּֽתִיתְפַֽ֫אעַֽל", []);
bitnaazal.Inti = buildPronoun("בְּֽתִיתְפַֽ֫אעַֽלִֽי", []);
bitnaazal.Huwe = buildPronoun("בִּֽיתְפַֽ֫אעַֽל", []);
bitnaazal.Hiye = buildPronoun("בְּֽתִיתְפַֽ֫אעַֽל", []);
bitnaazal.Ihna = buildPronoun("מְֽנִיתְפַֽ֫אעַֽל", []);
bitnaazal.Intu = buildPronoun("בְּֽתִיתְפַֽ֫אעַֽלֽוּ", []);
bitnaazal.Humme = buildPronoun("בִּֽיתְפַֽ֫אעַֽלֽוּ", []);
bitnaazal.addDistractingFormsToAll([BISHTREL, "bisaafer", "bittallam"]);
bitnaazal.populateRemainingPronouns();
bitnaazal.processingToForm = {
    "bishtrel": "פעל",
    "bisaafer": "פעל",
    "bittallam": "פעל",
};


/// measure 7
const binimsek = createNewForm();
binimsek.formName = BINIMSEK;
binimsek.representativeRoot = "מסכּ";
binimsek.Ana = buildPronoun("בַּֽ֫נִֽיפְעֵֽל", []);
binimsek.Inte = buildPronoun("בְּֽ֫תִינִֽיפְעֵֽל", []);
binimsek.Inti = buildPronoun("בְּֽתִינְפִֽ֫יעְלִֽי", []);
binimsek.Huwe = buildPronoun("בִּֽ֫ינִֽיפְעֵֽל", []);
binimsek.Hiye = buildPronoun("בְּֽ֫תִינִֽיפְעֵֽל", []);
binimsek.Ihna = buildPronoun("מְֽ֫נִינִֽיפְעֵֽל", []);
binimsek.Intu = buildPronoun("בְּֽתִינְפִֽ֫יעְלֽוּ", []);
binimsek.Humme = buildPronoun("בִּֽינְפִֽ֫יעְלֽוּ", []);
binimsek.addDistractingFormsToAll([BISHTREL, "bisma", "bistaamel"]);
binimsek.populateRemainingPronouns();
binimsek.processingToForm = {
    "bishtrel": "פעל",
    "bistaamel": "פעל",
    "bisma": "פעל",
};


/// measure 8
const bishtrel = createNewForm();
bishtrel.formName = BISHTREL;
bishtrel.representativeRoot = "שע'ל";
bishtrel.Ana = buildPronoun("בַּֽ֫פְתְעֵֽל", []);
bishtrel.Inte = buildPronoun("בְּֽ֫תִיפְתְעֵֽל", []);
bishtrel.Inti = buildPronoun("בְּֽתִיפְתִֽ֫יעְלִֽי", []);
bishtrel.Huwe = buildPronoun("בִּֽ֫יפְתְעֵֽל", []);
bishtrel.Hiye = buildPronoun("בְּֽ֫תִיפְתְעֵֽל", []);
bishtrel.Ihna = buildPronoun("מְֽ֫נִיפְתְעֵֽל", []);
bishtrel.Intu = buildPronoun("בְּֽתִיפְתִֽ֫יעְלֽוּ", []);
bishtrel.Humme = buildPronoun("בִּֽיפְתִֽ֫יעְלֽוּ", []);
bishtrel.addDistractingFormsToAll([BITTALLAM, "buktol", "binimsek"]);
bishtrel.populateRemainingPronouns();
bishtrel.processingToForm = {
    "bittallam": "פעל",
    "buktol": "פעל",
    "binimsek": "פעל",
};


/// measure 10
const bistaamel = createNewForm();
bistaamel.formName = BISTAAMEL;
bistaamel.representativeRoot = "עמל";
bistaamel.Ana = buildPronoun("בַּֽסְתַֽ֫פְעֵֽל", []);
bistaamel.Inte = buildPronoun("בְּֽתִיסְתַֽ֫פְעֵֽל", []);
bistaamel.Inti = buildPronoun("בְּֽתִיסְתַֽ֫פִֽיעְלִֽי", []);
bistaamel.Huwe = buildPronoun("בִּֽיסְתַֽ֫פְעֵֽל", []);
bistaamel.Hiye = buildPronoun("בְּֽתִיסְתַֽ֫פְעֵֽל", []);
bistaamel.Ihna = buildPronoun("מְֽנִיסְתַֽ֫פְעֵֽל", []);
bistaamel.Intu = buildPronoun("בְּֽתִיסְתַֽ֫פִֽיעְלֽוּ", []);
bistaamel.Humme = buildPronoun("בִּֽיסְתַֽ֫פִֽיעְלֽוּ", []);
bistaamel.addDistractingFormsToAll([BITTALLAM, "bisma", "bisaafer"]);
bistaamel.populateRemainingPronouns();
bistaamel.processingToForm = {
    "bittallam": "פעל",
    "buktol": "פעל",
    "bisma": "פעל",
    "bisaafer": "פעל",
};



export const formsPresent210 = {
    "bikarrer": bikarrer,
    "bikarreb": bikarreb,
    "bisaafer": bisaafer,
    "bittallam": bittallam,
    "bitnaazal": bitnaazal,
    "binimsek": binimsek,
    "bishtrel": bishtrel,
    "bistaamel": bistaamel,
}

// const BIKARRER = "bikarrer";
// const BISAAFER = "bisaafer";
// const BITTALLAM = "bittallam";
// const BITNAAZAL = "bitnaazal";
// const BINIMSEK = "binimsek";
// const BISHTREL = "bishtrel";
// const BISTAAMEL = "bistaamel";