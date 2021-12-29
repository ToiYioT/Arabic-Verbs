
const TENSE = "participle";
const SAKEN = "saken";
const RAYEH = "rayeh";
const MASHI = "mashi";
const MITTAKKED = "mittakked";
const MAWJOOD = "mawjood";

const SAKAN = "sakan";
const MUWAJEED = "muwajeed";

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
        AnaFem: "",
        Ihna: "",
        IhnaFem: "",
        populateRemainingPronouns: function () {
            this.Inte = this.Ana;
            this.Inti = this.AnaFem;
            this.Intu = this.Ihna;
            this.IntuFem = this.IhnaFem;
            this.Huwe = this.Ana;
            this.Hiye = this.AnaFem;
            this.Humme = this.Ihna;
            this.Henne = this.IhnaFem;
        },
        addDistractingFormsToAll: function (newDistractingForm) {

            this.Ana.distractingForms.push(...newDistractingForm);
            this.AnaFem.distractingForms.push(...newDistractingForm);
            this.Ihna.distractingForms.push(...newDistractingForm);
            this.IhnaFem.distractingForms.push(...newDistractingForm);
        },

        processingToForm: ""
    }
}

const saken = createNewForm();
saken.formName = SAKEN;
saken.representativeRoot = "סכּנ";
saken.Ana = buildPronoun("פַאעֵל", []);
saken.AnaFem = buildPronoun("פַאעְלֵה", []);
saken.Ihna = buildPronoun("פַאעְלִין", []);
saken.IhnaFem = buildPronoun("פַאעְלַאת", []);
saken.addDistractingFormsToAll([SAKAN, MAWJOOD, MITTAKKED]);
saken.populateRemainingPronouns();
saken.processingToForm = {
    "sakan": "פעל",
    "mawjood": "פעל",
    "mittakked": "פעל",
};


const rayeh = createNewForm();
rayeh.formName = RAYEH;
rayeh.representativeRoot = "ריח";
rayeh.Ana = buildPronoun("פַאעֵל", [SAKAN]);
rayeh.AnaFem = buildPronoun("פַאעְלַה", [SAKEN]);
rayeh.Ihna = buildPronoun("פַאעְלִין", [SAKAN]);
rayeh.IhnaFem = buildPronoun("פַאעְלַאת", [SAKAN]);
rayeh.addDistractingFormsToAll([MITTAKKED, MAWJOOD]);
rayeh.populateRemainingPronouns();
rayeh.processingToForm = {
    "sakan": "פעל",
    "saken": "פעל",
    "mittakked": "פעל",
    "mawjood": "פעל",
};


const mashi = createNewForm();
mashi.formName = MASHI;
mashi.representativeRoot = "משי";
mashi.Ana = buildPronoun("פַאעִל", []);
mashi.AnaFem = buildPronoun("פַאעְלֵה", []);
mashi.Ihna = buildPronoun("פַאעְלִין", []);
mashi.IhnaFem = buildPronoun("פַאעְלַאת", []);
mashi.addDistractingFormsToAll([SAKAN, MAWJOOD, MITTAKKED]);
mashi.populateRemainingPronouns();
mashi.processingToForm = {
    "sakan": "פעל",
    "mawjood": "פעל",
    "mittakked": "פעל",
};


const mittakked = createNewForm();
mittakked.formName = MITTAKKED;
mittakked.representativeRoot = "אכּד";
mittakked.Ana = buildPronoun("מִתְפַעֵّל", []);
mittakked.AnaFem = buildPronoun("מִתְפַעְّלֵה", []);
mittakked.Ihna = buildPronoun("מִתְפַעְّלִין", []);
mittakked.IhnaFem = buildPronoun("מִתְפַעְّלַאת", []);
mittakked.addDistractingFormsToAll([MAWJOOD, SAKEN, SAKAN]);
mittakked.populateRemainingPronouns();
mittakked.processingToForm = {
    "mawjood": "פעל",
    "saken": "פעל",
    "sakan": "פעל",
};


const mawjood = createNewForm();
mawjood.formName = MAWJOOD;
mawjood.representativeRoot = "וג'ד";
mawjood.Ana = buildPronoun("מַפְעוּל", []);
mawjood.AnaFem = buildPronoun("מַפְעוּלֵה", []);
mawjood.Ihna = buildPronoun("מַפְעוּלִין", []);
mawjood.IhnaFem = buildPronoun("מַפְעוּלַאת", []);
mawjood.addDistractingFormsToAll([MITTAKKED, SAKEN, MUWAJEED]);
mawjood.populateRemainingPronouns();
mawjood.processingToForm = {
    "mittakked": "פעל",
    "saken": "פעל",
    "muwajeed": "פעל",
};


// distracting forms, not real

const sakan = createNewForm();
sakan.formName = SAKAN;
sakan.representativeRoot = "סכּן";
sakan.Ana = buildPronoun("פַאעַל", []);
sakan.AnaFem = buildPronoun("פַאעְלַה", []);
sakan.Ihna = buildPronoun("פַאעַלִין", []);
sakan.IhnaFem = buildPronoun("פַאעַלַאת", []);
sakan.populateRemainingPronouns();
sakan.fakeForm = true;


const muwajeed = createNewForm();
muwajeed.formName = MUWAJEED;
muwajeed.representativeRoot = "וג'ד";
muwajeed.Ana = buildPronoun("מֻפַאעִיל", []);
muwajeed.AnaFem = buildPronoun("מֻפַאעְלֵה", []);
muwajeed.Ihna = buildPronoun("מֻפַאעְלִין", []);
muwajeed.IhnaFem = buildPronoun("מֻפַאעְלַאת", []);
muwajeed.addDistractingFormsToAll([MITTAKKED, SAKEN]);
muwajeed.populateRemainingPronouns();
muwajeed.fakeForm = true;


export const formsParticiple = {
    "saken": saken,
    "rayeh": rayeh,
    "mashi": mashi,
    "mittakked": mittakked,
    "mawjood": mawjood,

    "sakan": sakan,
    "muwajeed": muwajeed
}