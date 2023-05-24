"use strict";

const versesUpṬo = require("./versesUpTo");

describe("Get the first nth verses of the lyrics", () => {
  function verseIntro(verseNumber) {
    return `Intro ${verseNumber}`;
  }
  function giftDescription(giftNumber) {
    return `Gift ${giftNumber}`;
  }

  it("should return only the firsty verse", () => {
    expect(versesUpṬo(1, verseIntro, giftDescription)).toEqual(
      "Intro 1\nGift 1\n"
    );
  });

  it("should return firsty and second verses", () => {
    expect(versesUpṬo(2, verseIntro, giftDescription)).toEqual(
      "Intro 1\nGift 1\n\nIntro 2\nGift 2\nGift 1\n"
    );
  });
});
