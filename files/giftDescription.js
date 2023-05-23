"use strict";

function giftDescription(paragraph, giftNumber) {
  checkGiftNumberRange(giftNumber);
  return "A partridge in a pear tree.";
}

function checkGiftNumberRange(giftNumber) {
  if (giftNumber < 1) {
    throw new Error("Gift number must be greater than or equals one");
  }
  if (giftNumber > 12) {
    throw new Error("Gift number must be less than or equal to twelve");
  }
}

module.exports = giftDescription;
