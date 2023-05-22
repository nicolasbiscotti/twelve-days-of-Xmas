'use strict';

function paragraphList(paragraph, giftDescription) {
  const giftList = [];
  for(let p = 1, line = 1; p <= paragraph; p++, line++) {
    giftList.push(giftDescription(paragraph, line));  
  }
  return giftList;
}

module.exports = paragraphList;