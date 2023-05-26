"use strict";

const { MissingArgument, OutOfRange } = require("./customErrors");

const ordinalNumbers = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];

const verseValidations = [
  (verseNumber) => {
    if (verseNumber === undefined) {
      throw new MissingArgument("You must provide a verse number.");
    }
  },
  (verseNumber) => {
    if (verseNumber > 12) {
      throw new OutOfRange("The verse number can't be greater than twelve.");
    }
  },
  (verseNumber) => {
    if (verseNumber < 1) {
      throw new Error("The verse number can't be less than one.");
    }
  },
];

function verseIntro(verseNumber) {
  verseValidations.forEach((validation) => validation(verseNumber));
  let introduction =
    "On the ordinal day of Christmas,\nMy true love gave to me:";
  introduction = introduction.replace(
    "ordinal",
    ordinalNumbers[verseNumber - 1]
  );
  return introduction;
}

module.exports = verseIntro;
