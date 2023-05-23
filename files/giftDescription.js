"use strict";

function giftDescription(paragraph, giftNumber) {
  if (paragraph < 1) {
    throw new Error("Paragraph number must be greater than or equal to one");
  }
  if (paragraph > 12) {
    throw new Error("Paragraph number must be greater than or equal to twelve");
  }
  checkGiftNumberRange(giftNumber);
  return "A partridge in a pear tree.";
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
