"use strict";

const versesUpTo = require("./versesUpTo");
const realVerseIntro = require("./verseIntro");
const realGiftDescription = require("./giftDescription");

describe("Get the first nth verses of the lyrics", () => {
  function verseIntro(verseNumber) {
    return `Intro ${verseNumber}`;
  }
  function giftDescription(giftNumber) {
    return `Gift ${giftNumber}`;
  }

  it("should return only the firsty verse", () => {
    expect(versesUpTo(1, verseIntro, giftDescription)).toEqual(
      "Intro 1\nGift 1\n"
    );
  });

  it("should return firsty and second verses", () => {
    expect(versesUpTo(2, verseIntro, giftDescription)).toEqual(
      "Intro 1\nGift 1\n\nIntro 2\nGift 2\nGift 1\n"
    );
  });

  it("should return the complete lyrics of 12-days-of-Xmas", () => {
    console.log(versesUpTo(12, realVerseIntro, realGiftDescription));
  });
});
