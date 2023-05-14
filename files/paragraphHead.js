'use strict';

const ordinalNumbers = [
  "first", "second", "third", "fourth", "fifth", "sixth",
  "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"
];

function paragraphHead(paragraph) {
  let lineHead = "On the ordinal day of Christmas";
  lineHead = lineHead.replace("ordinal", ordinalNumbers[paragraph - 1]);
  return lineHead;
}

module.exports = paragraphHead;
