"use strict";

const { InvalidArgument } = require("./customErrors");

const giftDescriptionList = [
  "A partridge in a pear tree.",
  "Two turtle doves and",
  "Three french hens",
  "Four calling birds",
  "Five golden rings",
  "Six geese a-laying",
  "Seven swans a-swimming",
  "Eight maids a-milking",
  "Nine ladies dancing",
  "Ten lords a-leaping",
  "Eleven pipers piping",
  "Twelve drummers drumming",
];

function giftDescription(verseNumber) {
  checkVerseNumberRange(verseNumber);
  return giftDescriptionList[verseNumber - 1];
}

function checkVerseNumberRange(verseNumber) {
  if (verseNumber < 1) {
    throw new InvalidArgument(
      "Verse number must be greater than or equal to one"
    );
  }
  if (verseNumber > 12) {
    throw new InvalidArgument("Verse number must be less than or equal to twelv");
  }
}

module.exports = giftDescription;
