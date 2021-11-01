
export const hebConjugate = {

    getAna: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "יתי";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "תי";

        } else {
            return root + "תי";
        }
    },
    getInte: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ית";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "ת";

        } else {
            return root + "ת";
        }
    },
    getInti: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ית";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "ת";

        } else {
            return root + "ת";
        }
    },
    getHuwe: function (root) {
        return root;
    },
    getHiye: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "תה";

        } else {
            return root + "ה";
        }
    },
    getIhna: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ינו";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "נו";

        } else {
            return root + "נו";
        }
    },
    getIntu: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "יתם";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "תם";

        } else {
            return root + "תם";
        }
    },
    getHumme: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ו";

        } else {
            return root + "ו";
        }
    }
}
