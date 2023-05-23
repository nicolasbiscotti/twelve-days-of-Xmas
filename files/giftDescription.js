"use strict";

function giftDescription(paragraph, giftNumber) {
  if (giftNumber < 1) {
    throw new Error("Gift number must be greater than or equals one");
  }
  if (giftNumber > 12) {
    throw new Error("Gift number must be less than or equal to twelve");
  }
  return "A partridge in a pear tree.";
}

module.exports = giftDescription;
