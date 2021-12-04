
const TENSE = "present210";
const BITTALLAM = "bittallam";
const BISHTREL = "bishtrel";

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

/// measure 5
const bittallam = createNewForm();
bittallam.formName = BITTALLAM;
bittallam.Ana = buildPronoun("בַּתְפַעַّל", []);
bittallam.Inte = buildPronoun("בְּתִתְפַעַّל", []);
bittallam.Inti = buildPronoun("בְּתִתְפַעַّלִי", []);
bittallam.Huwe = buildPronoun("בִּיתְפַעַّל", []);
bittallam.Hiye = buildPronoun("בְּתִתְפַעַّל", []);
bittallam.Ihna = buildPronoun("בְּנִתְפַעַّל", []);
bittallam.Intu = buildPronoun("בְּתִתְפַעַّלוּ", []);
bittallam.Humme = buildPronoun("בִּיתְפַעַّלוּ", []);
bittallam.addDistractingFormsToAll([BISHTREL, "buktol", "bisma"]);
bittallam.populateRemainingPronouns();
bittallam.processingToForm = {
    "bishtrel": "פעל",
    "buktol": "פעל",
    "bisma": "פעל",
};


/// measure 5
const bishtrel = createNewForm();
bishtrel.formName = BISHTREL;
bishtrel.Ana = buildPronoun("בַּפְתְעֵל", []);
bishtrel.Inte = buildPronoun("בְּתִפְתְעֵל", []);
bishtrel.Inti = buildPronoun("בְּתִפְתִעְלִי", []);
bishtrel.Huwe = buildPronoun("בִּיפְתְעֵל", []);
bishtrel.Hiye = buildPronoun("בְּתִפְתְעֵל", []);
bishtrel.Ihna = buildPronoun("בְּנִפְתְעֵל", []);
bishtrel.Intu = buildPronoun("בְּתִפְתִעְלוּ", []);
bishtrel.Humme = buildPronoun("בִּיפְתִעְלוּ", []);
bishtrel.addDistractingFormsToAll([BITTALLAM, "buktol", "bisma"]);
bishtrel.populateRemainingPronouns();
bishtrel.processingToForm = {
    "bittallam": "פעל",
    "buktol": "פעל",
    "bisma": "פעל",
};

export const formsPresent210 = {
    "bittallam": bittallam,
    "bishtrel": bishtrel,
}