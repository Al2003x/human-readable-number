module.exports = function toReadable(number) {
    let stOut = "";
    let derivatives = [];
    let redable = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    if (number == 0) return "zero";
    if (number < 20) return redable[number];
    else if (number < 100) {
        derivatives[1] = number % 10;
        derivatives[0] = Math.trunc(number / 10) * 10;

        stOut = redable[derivatives[0]] + " " + redable[derivatives[1]];
        stOut = stOut.trim();

        return stOut;
    } else if (number < 1000) {
        derivatives[0] = Math.trunc(number / 100);
        derivatives[1] = number % 100;

        if (derivatives[1] > 19) {
            derivatives[1] = Math.trunc(derivatives[1] / 10) * 10;
            derivatives[2] = number % 10;
        } else derivatives[2] = 0;

        stOut =
            redable[derivatives[0]] +
            " hundred " +
            redable[derivatives[1]] +
            " " +
            redable[derivatives[2]];
        stOut = stOut.trim();
        return stOut;
    }
};
