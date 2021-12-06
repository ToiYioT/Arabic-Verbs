const HebConjugateFuture = {

    Ana: function (root) {
        return "א" + root.substring(1, root.length);
    },
    Inte: function (root) {
        return "ת" + root.substring(1, root.length);
    },
    Inti: function (root) {
        if (root[root.length - 1] == "ה") {
            return "ת" + root.substring(1, root.length - 1) + "י";

        } else if (root[root.length - 2] == "י") {
            return "ת" + root.substring(1, root.length) + "י";

        } else if (root[root.length - 2] == "ו") {
            return "ת" + root.substring(1, 3) + root[root.length - 1] + "י";

        } else {
            return "ת" + root.substring(1, root.length) + "י";
        }
    },
    Huwe: function (root) {
        return root;
    },
    Hiye: function (root) {
        return "ת" + root.substring(1, root.length);
    },
    Ihna: function (root) {
        return "נ" + root.substring(1, root.length);
    },
    Intu: function (root) {
        if (root[root.length - 1] == "ה") {
            return "ת" + root.substring(1, root.length - 1) + "ו";

        } else if (root[root.length - 2] == "י") {
            return "ת" + root.substring(1, root.length) + "ו";

        } else if (root[root.length - 2] == "ו") {
            return "ת" + root.substring(1, 3) + root[root.length - 1] + "ו";

        } else {
            return "ת" + root.substring(1, root.length) + "ו";
        }
    },
    Humme: function (root) {
        if (root[root.length - 1] == "ה") {
            return "י" + root.substring(1, root.length - 1) + "ו";

        } else if (root[root.length - 2] == "י") {
            return "י" + root.substring(1, root.length) + "ו";

        } else if (root[root.length - 2] == "ו") {
            return "י" + root.substring(1, 3) + root[root.length - 1] + "ו";

        } else {
            return "י" + root.substring(1, root.length) + "ו";
        }
    },
}
HebConjugateFuture.AnaFem = HebConjugateFuture.Ana;
HebConjugateFuture.IntuFem = HebConjugateFuture.Intu;
HebConjugateFuture.IhnaFem = HebConjugateFuture.Ihna;
HebConjugateFuture.Henne = HebConjugateFuture.Humme;

export let hebConjugateFuture = HebConjugateFuture;

