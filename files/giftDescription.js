"use strict";

function giftDescription(paragraph, giftNumber) {
  if (giftNumber < 1) {
    throw new Error("Gift number must be greater than or equals one");
  }
  return "A partridge in a pear tree.";
}

module.exports = giftDescription;
