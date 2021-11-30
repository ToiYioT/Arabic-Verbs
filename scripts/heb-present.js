
const HebConjugatePresent = {

    Ana: function (root) {
        return root;
    },
    AnaFem: function (root) {
        if (root[root.length - 1] == "ה") {
            return root;

        } else if (root[root.length - 2] == "י" || root[root.length - 2] == "ו") {
            return root + "ה";

        } else {
            if (root.length == 2) {
                return root + "ה";
            } else {
                return root + "ת";
            }
        }
    },
    Ihna: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ים";

        } else {
            return root + "ים";
        }
    },
    IhnaFem: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ות";

        } else {
            return root + "ות";
        }
    },
}

HebConjugatePresent.Inte = HebConjugatePresent.Ana;
HebConjugatePresent.Huwe = HebConjugatePresent.Ana;
HebConjugatePresent.Inti = HebConjugatePresent.AnaFem;
HebConjugatePresent.Hiye = HebConjugatePresent.AnaFem;
HebConjugatePresent.Intu = HebConjugatePresent.Ihna;
HebConjugatePresent.Humme = HebConjugatePresent.Ihna;
HebConjugatePresent.IntuFem = HebConjugatePresent.IhnaFem;
HebConjugatePresent.Henne = HebConjugatePresent.IhnaFem;

export let hebConjugatePresent = HebConjugatePresent;