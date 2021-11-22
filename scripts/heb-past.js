
export const hebConjugatePast = {

    Ana: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "יתי";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "תי";

        } else {
            return root + "תי";
        }
    },
    Inte: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ית";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "ת";

        } else {
            return root + "ת";
        }
    },
    Inti: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ית";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "ת";

        } else {
            return root + "ת";
        }
    },
    Huwe: function (root) {
        return root;
    },
    Hiye: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "תה";

        } else {
            return root + "ה";
        }
    },
    Ihna: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ינו";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "נו";

        } else {
            return root + "נו";
        }
    },
    Intu: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "יתם";

        } else if (root[root.length - 2] == "י") {
            return root.substring(0, root.length - 2) +
                root.substring(root.length - 1, root.length) + "תם";

        } else {
            return root + "תם";
        }
    },
    Humme: function (root) {
        if (root[root.length - 1] == "ה") {
            return root.substring(0, root.length - 1) + "ו";

        } else {
            return root + "ו";
        }
    }
}
