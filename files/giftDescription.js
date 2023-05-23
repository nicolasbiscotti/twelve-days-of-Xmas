"use strict";

function giftDescription(paragraphNumber, giftNumber) {
  chaeckParagraphNumberRange(paragraphNumber);
  checkGiftNumberRange(giftNumber);
  return "A partridge in a pear tree.";
}

function chaeckParagraphNumberRange(paragraphNumber) {
  if (paragraphNumber < 1) {
    throw new Error("Paragraph number must be greater than or equal to one");
  }
  if (paragraphNumber > 12) {
    throw new Error("Paragraph number must be less than or equal to twelve");
  }
}

function checkGiftNumberRange(giftNumber) {
  if (giftNumber < 1) {
    throw new Error("Gift number must be greater than or equal to one");
  }
  if (giftNumber > 12) {
    throw new Error("Gift number must be less than or equal to twelve");
  }
}

module.exports = giftDescription;
