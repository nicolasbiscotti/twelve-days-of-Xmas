"use strict";

const giftDescriptionList = [
  "A partridge in a pear tree.",
  "Two turtle doves and",
  "Three french hens",
];

function giftDescription(paragraphNumber, giftNumber) {
  checkParagraphNumberRange(paragraphNumber);
  checkGiftNumberRange(paragraphNumber, giftNumber);
  return giftDescriptionList[giftNumber - 1];
}

function checkParagraphNumberRange(paragraphNumber) {
  if (paragraphNumber < 1) {
    throw new Error("Paragraph number must be greater than or equal to one");
  }
  if (paragraphNumber > 12) {
    throw new Error("Paragraph number must be less than or equal to twelve");
  }
}

function checkGiftNumberRange(paragraphNumber, giftNumber) {
  if (giftNumber < 1) {
    throw new Error("Gift number must be greater than or equal to one");
  }
  if (giftNumber > 12) {
    throw new Error("Gift number must be less than or equal to twelve");
  }
  if (giftNumber > paragraphNumber) {
    throw new Error("Gift number cannot be greater than the Paragraph number");
  }
}

module.exports = giftDescription;
