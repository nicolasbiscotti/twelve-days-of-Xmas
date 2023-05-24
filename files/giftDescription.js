"use strict";

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
    throw new Error("Verse number must be greater than or equal to one");
  }
  if (verseNumber > 12) {
    throw new Error("Verse number must be less than or equal to twelve");
  }
}

module.exports = giftDescription;
