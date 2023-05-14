'use strict';

function paragraphHead(paragraph) {
  let ordinalNumber = "";
  let lineHead = "On the ordinal day of Christmas";
  if (paragraph === 1) {
    ordinalNumber = "first";
  }
  lineHead.replace("ordinal", ordinalNumber);
  return lineHead;
}

module.exports = paragraphHead;
