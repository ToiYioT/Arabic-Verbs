
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
bikarrer.Ana = buildPronoun("בַּפַעֵّל", []);
bikarrer.Inte = buildPronoun("בִּתְפַעֵّל", []);
bikarrer.Inti = buildPronoun("בִּתְפַעֵّלִי", []);
bikarrer.Huwe = buildPronoun("בִּיפַעֵّל", []);
bikarrer.Hiye = buildPronoun("בִּתְפַעֵّל", []);
bikarrer.Ihna = buildPronoun("מִנְפַעֵّל", []);
bikarrer.Intu = buildPronoun("בִּתְפַעֵّלוּ", []);
bikarrer.Humme = buildPronoun("בִּיפַעֵّלוּ", []);
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
bikarreb.Ana = buildPronoun("בַּפַעֵّל", []);
bikarreb.Inte = buildPronoun("בִּתְפַעֵّל", []);
bikarreb.Inti = buildPronoun("בִּתְפַעְّלִי", []);
bikarreb.Huwe = buildPronoun("בִּיפַעֵّל", []);
bikarreb.Hiye = buildPronoun("בִּתְפַעֵّל", []);
bikarreb.Ihna = buildPronoun("מִנְפַעֵّל", []);
bikarreb.Intu = buildPronoun("בִּתְפַעְّלוּ", []);
bikarreb.Humme = buildPronoun("בִּיפַעְّלוּ", []);
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
bisaafer.Ana = buildPronoun("בַּפַאעֵל", []);
bisaafer.Inte = buildPronoun("בִּתְפַאעֵל", []);
bisaafer.Inti = buildPronoun("בִּתְפַאעְלי", []);
bisaafer.Huwe = buildPronoun("בִּיפַאעֵל", []);
bisaafer.Hiye = buildPronoun("בִּתְפַאעֵל", []);
bisaafer.Ihna = buildPronoun("מִנְפַאעֵל", []);
bisaafer.Intu = buildPronoun("בִּתְפַאעְלוּ", []);
bisaafer.Humme = buildPronoun("בִּיפַאעְלוּ", []);
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
bittallam.Ana = buildPronoun("בַּתְפַעַّל", []);
bittallam.Inte = buildPronoun("בְּתִתְפַעַّל", []);
bittallam.Inti = buildPronoun("בְּתִתְפַעַّלִי", []);
bittallam.Huwe = buildPronoun("בִּיתְפַעַّל", []);
bittallam.Hiye = buildPronoun("בְּתִתְפַעַّל", []);
bittallam.Ihna = buildPronoun("מְנִתְפַעַّל", []);
bittallam.Intu = buildPronoun("בְּתִתְפַעַّלוּ", []);
bittallam.Humme = buildPronoun("בִּיתְפַעַّלוּ", []);
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
bitnaazal.Ana = buildPronoun("בַּתְפַאעַל", []);
bitnaazal.Inte = buildPronoun("בְּתִתְפַאעַל", []);
bitnaazal.Inti = buildPronoun("בְּתִתְפַאעַלִי", []);
bitnaazal.Huwe = buildPronoun("בִּיתְפַאעַל", []);
bitnaazal.Hiye = buildPronoun("בְּתִתְפַאעַל", []);
bitnaazal.Ihna = buildPronoun("מְנִתְפַאעַל", []);
bitnaazal.Intu = buildPronoun("בְּתִתְפַאעַלוּ", []);
bitnaazal.Humme = buildPronoun("בִּיתְפַאעַלוּ", []);
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
binimsek.Ana = buildPronoun("בַּנִפְעֵל", []);
binimsek.Inte = buildPronoun("בְּתִנִפְעֵל", []);
binimsek.Inti = buildPronoun("בְּתִנְפִעְלִי", []);
binimsek.Huwe = buildPronoun("בִּינִפְעֵל", []);
binimsek.Hiye = buildPronoun("בְּתִנִפְעֵל", []);
binimsek.Ihna = buildPronoun("מְנִנִפְעֵל", []);
binimsek.Intu = buildPronoun("בְּתִנְפִעְלוּ", []);
binimsek.Humme = buildPronoun("בִּינְפִעְלוּ", []);
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
bishtrel.Ana = buildPronoun("בַּפְתְעֵל", []);
bishtrel.Inte = buildPronoun("בְּתִפְתְעֵל", []);
bishtrel.Inti = buildPronoun("בְּתִפְתִעְלִי", []);
bishtrel.Huwe = buildPronoun("בִּיפְתְעֵל", []);
bishtrel.Hiye = buildPronoun("בְּתִפְתְעֵל", []);
bishtrel.Ihna = buildPronoun("מְנִפְתְעֵל", []);
bishtrel.Intu = buildPronoun("בְּתִפְתִעְלוּ", []);
bishtrel.Humme = buildPronoun("בִּיפְתִעְלוּ", []);
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
bistaamel.Ana = buildPronoun("בַּסְתַפְעֵל", []);
bistaamel.Inte = buildPronoun("בְּתִסְתַפְעֵל", []);
bistaamel.Inti = buildPronoun("בְּתִסְתַפִעְלִי", []);
bistaamel.Huwe = buildPronoun("בִּיסְתַפְעֵל", []);
bistaamel.Hiye = buildPronoun("בְּתִסְתַפְעֵל", []);
bistaamel.Ihna = buildPronoun("מְנִסְתַפְעֵל", []);
bistaamel.Intu = buildPronoun("בְּתִסְתַפִעְלוּ", []);
bistaamel.Humme = buildPronoun("בִּיסְתַפִעְלוּ", []);
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