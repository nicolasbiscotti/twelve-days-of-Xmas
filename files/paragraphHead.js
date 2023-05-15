'use strict';

const ordinalNumbers = [
  "first", "second", "third", "fourth", "fifth", "sixth",
  "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"
];

function paragraphHead(paragraph) {
  if ( paragraph === undefined ) {
    throw new Error('You must provide a paragraph number.');
  }
  if ( paragraph > 12 ) {
    throw new Error("The paragraph number can't be greater than twelve.");
  }
  let lineHead = "On the ordinal day of Christmas";
  lineHead = lineHead.replace("ordinal", ordinalNumbers[paragraph - 1]);
  return lineHead;
}

module.exports = paragraphHead;
