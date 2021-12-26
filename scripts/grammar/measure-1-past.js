
const TENSE = "past";
const KATAB = "katab";
const NIZEL = "nizel";
const HAKA = "haka";
const NISI = "nisi";
const HABB = "habb";
const RAH = "rah";
const JAB = "jab";

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

        processingToForm: ""
    }
}


const katab = createNewForm();
katab.formName = KATAB;
katab.representativeRoot = "כּתבּ";
katab.Ana = buildPronoun("פַעַלְת", [NIZEL, HAKA, HABB, RAH]);
katab.Inte = buildPronoun("פַעַלְת", [NIZEL, HAKA, HABB, RAH]);
katab.Inti = buildPronoun("פַעַלְתִי", [NIZEL, HAKA, HABB, RAH]);
katab.Huwe = buildPronoun("פַעַל", [NIZEL, HAKA, NISI, HABB]);
katab.Hiye = buildPronoun("פַעְלַת", [NIZEL, HAKA, HABB, RAH]);
katab.Ihna = buildPronoun("פַעַלְנַא", [NIZEL, HAKA, HABB, RAH]);
katab.Intu = buildPronoun("פַעַלְתוּ", [NIZEL, HAKA, HABB, RAH]);
katab.Humme = buildPronoun("פַעַלוּ", [NIZEL, HAKA, HABB, RAH]);
katab.populateRemainingPronouns();
katab.processingToForm = {
    "nizel": "פעל",
    "haka": "פְעלא",
    "nisi": "פְעלי",
    "habb": "פְעלא",
    "rah": "פְעלא",
};


const nizel = createNewForm();
nizel.formName = NIZEL;
nizel.representativeRoot = "נזל";
nizel.Ana = buildPronoun("פְעִלְת", [KATAB, HAKA, HABB, RAH]);
nizel.Inte = buildPronoun("פְעִלְת", [KATAB, HAKA, HABB, RAH]);
nizel.Inti = buildPronoun("פְעִלְתִי", [KATAB, HAKA, HABB, RAH]);
nizel.Huwe = buildPronoun("פִעֵל", [KATAB, HAKA, NISI, HABB]);
nizel.Hiye = buildPronoun("פִעְלַת", [KATAB, HAKA, HABB, RAH]);
nizel.Ihna = buildPronoun("פְעִלְנַא", [KATAB, HAKA, HABB, RAH]);
nizel.Intu = buildPronoun("פְעִלְתוּ", [KATAB, HAKA, HABB, RAH]);
nizel.Humme = buildPronoun("פִעְלוּ", [KATAB, HAKA, HABB, RAH]);
nizel.populateRemainingPronouns();
nizel.processingToForm = {
    "katab": "פעל",
    "haka": "פְעלא",
    "nisi": "פְעלי",
    "habb": "פְעלא",
    "rah": "פְעלא",
};


const haka = createNewForm();
haka.formName = HAKA;
haka.representativeRoot = "חכּא";
haka.Ana = buildPronoun("פַעֵית", [NISI, HABB, RAH, JAB]);
haka.Inte = buildPronoun("פַעֵית", [NISI, HABB, RAH, JAB]);
haka.Inti = buildPronoun("פַעֵיתִי", [NISI, HABB, RAH, JAB]);
haka.Huwe = buildPronoun("פַעַא", [NISI, HABB, RAH]);
haka.Hiye = buildPronoun("פַעַת", [NISI, HABB, RAH]);
haka.Ihna = buildPronoun("פַעֵינַא", [NISI, HABB, RAH, JAB]);
haka.Intu = buildPronoun("פַעֵיתוּ", [NISI, HABB, RAH, JAB]);
haka.Humme = buildPronoun("פַעוּ", [NISI, HABB, KATAB]);
haka.populateRemainingPronouns();
haka.processingToForm = {
    "katab": Math.random() > 0.5 ? "פע" : "פעל",
    "nisi": "פעי",
    "habb": "פעל",
    "rah": "פאע",
    "jab": "פאע",
};



const nisi = createNewForm();
nisi.formName = NISI;
nisi.representativeRoot = "נסי";
nisi.Ana = buildPronoun("פְעִית", [HAKA, HABB, RAH, JAB]);
nisi.Inte = buildPronoun("פְעִית", [HAKA, HABB, RAH, JAB]);
nisi.Inti = buildPronoun("פְעִיתִי", [HAKA, HABB, RAH, JAB]);
nisi.Huwe = buildPronoun("פִעִי", [HAKA, HABB, RAH]);
nisi.Hiye = buildPronoun("פִעְיַת", [HAKA, HABB, RAH]);
nisi.Ihna = buildPronoun("פְעִינַא", [HAKA, HABB, RAH, JAB]);
nisi.Intu = buildPronoun("פְעִיתוּ", [HAKA, HABB, RAH, JAB]);
nisi.Humme = buildPronoun("פִעְיוּ", [HAKA, HABB, RAH, KATAB]);
nisi.populateRemainingPronouns();
nisi.processingToForm = {
    "katab": Math.random() > 0.5 ? "פע" : "פעל",
    "haka": "פעל",
    "habb": "פעל",
    "rah": "פאע",
    "jab": "פאע",
};

const habb = createNewForm();
habb.formName = HABB;
habb.representativeRoot = "חבּ";
habb.Ana = buildPronoun("פַעֵّית", [NISI, RAH, JAB]);
habb.Inte = buildPronoun("פַעֵّית", [NISI, RAH, JAB]);
habb.Inti = buildPronoun("פַעֵّיתִי", [NISI, RAH, JAB]);
habb.Huwe = buildPronoun("פַעّ", [HAKA, NISI, RAH]);
habb.Hiye = buildPronoun("פַעַّת", [KATAB, NISI, RAH]);
habb.Ihna = buildPronoun("פַעֵّינַא", [NISI, RAH, JAB]);
habb.Intu = buildPronoun("פַעֵّיתוּ", [NISI, RAH, JAB]);
habb.Humme = buildPronoun("פַעّוּ", [NISI, RAH, KATAB]);
habb.populateRemainingPronouns();
habb.processingToForm = {
    "jab": "פאע",
    "nisi": "פעי",
    "rah": "פאע",
    "haka": "פעל",
    "katab": "פעל",
};


const rah = createNewForm();
rah.formName = RAH;
rah.representativeRoot = "ראח";
rah.Ana = buildPronoun("פֻלְת", [HAKA, NISI, HABB, JAB]);
rah.Inte = buildPronoun("פֻלְת", [HAKA, NISI, HABB, JAB]);
rah.Inti = buildPronoun("פֻלְתִי", [HAKA, NISI, HABB, JAB]);
rah.Huwe = buildPronoun("פַאל", [HAKA, NISI, HABB]);
rah.Hiye = buildPronoun("פַאלַת", [HAKA, NISI, HABB]);
rah.Ihna = buildPronoun("פֻלְנַא", [HAKA, NISI, HABB, JAB]);
rah.Intu = buildPronoun("פֻלְתוּ", [HAKA, NISI, HABB, JAB]);
rah.Humme = buildPronoun("פַאלוּ", [HAKA, NISI, HABB]);
rah.populateRemainingPronouns();
rah.processingToForm = {
    "haka": "פלא",
    "nisi": "פלי",
    "habb": "פל",
    "jab": "פעל",
};


const jab = createNewForm();
jab.formName = JAB;
jab.representativeRoot = "ג'אבּ";
jab.Ana = buildPronoun("פִלְת", [HAKA, NISI, HABB, RAH]);
jab.Inte = buildPronoun("פִלְת", [HAKA, NISI, HABB, RAH]);
jab.Inti = buildPronoun("פִלְתִי", [HAKA, NISI, HABB, RAH]);
jab.Huwe = buildPronoun("פַאל", [HAKA, NISI, HABB]);
jab.Hiye = buildPronoun("פַאלַת", [KATAB, NISI, HABB]);
jab.Ihna = buildPronoun("פִלְנַא", [HAKA, NISI, HABB, RAH]);
jab.Intu = buildPronoun("פִלְתוּ", [HAKA, NISI, HABB, RAH]);
jab.Humme = buildPronoun("פַאלוּ", [HAKA, NISI, HABB]);
jab.populateRemainingPronouns();
jab.processingToForm = {
    "haka": "פלא",
    "nisi": "פלי",
    "habb": "פל",
    "rah": "פעל",
    "katab": "פעל",
};


export const formsPast = {
    "katab": katab,
    "nizel": nizel,
    "haka": haka,
    "nisi": nisi,
    "habb": habb,
    "rah": rah,
    "jab": jab
}