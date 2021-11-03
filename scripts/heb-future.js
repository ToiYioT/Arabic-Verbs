
export const hebConjugateFuture = {

    getAna: function (root) {
        return "א" + root.substring(1, root.length);
    },
    getInte: function (root) {
        return "ת" + root.substring(1, root.length);
    },
    getInti: function (root) {
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
    getHuwe: function (root) {
        return root;
    },
    getHiye: function (root) {
        return "ת" + root.substring(1, root.length);
    },
    getIhna: function (root) {
        return "נ" + root.substring(1, root.length);
    },
    getIntu: function (root) {
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
    getHumme: function (root) {
        if (root[root.length - 1] == "ה") {
            return "י" + root.substring(1, root.length - 1) + "ו";

        } else if (root[root.length - 2] == "י") {
            return "י" + root.substring(1, root.length) + "ו";

        } else if (root[root.length - 2] == "ו") {
            return "י" + root.substring(1, 3) + root[root.length - 1] + "ו";

        } else {
            return "י" + root.substring(1, root.length) + "ו";
        }
    }
}
