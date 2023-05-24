"use strict";

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
      throw new Error("You must provide a verse number.");
    }
  },
  (verseNumber) => {
    if (verseNumber > 12) {
      throw new Error("The verse number can't be greater than twelve.");
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
  let lineHead = "On the ordinal day of Christmas";
  lineHead = lineHead.replace("ordinal", ordinalNumbers[verseNumber - 1]);
  return lineHead;
}

module.exports = verseIntro;
