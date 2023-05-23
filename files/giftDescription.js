"use strict";

function giftDescription(paragraphNumber, giftNumber) {
  let giftDescription = "A partridge in a pear tree.";

  chaeckParagraphNumberRange(paragraphNumber);
  checkGiftNumberRange(paragraphNumber, giftNumber);

  if (giftNumber === 2) {
    giftDescription = "Two turtle doves and";
  }

  return giftDescription;
}

function chaeckParagraphNumberRange(paragraphNumber) {
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
