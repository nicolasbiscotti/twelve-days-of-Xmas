"use strict";

const versesUpṬo = require("./versesUpTo");

describe("Get the first nth verses of the lyrics", () => {
  it("should return only the firsty verse", () => {
    function verseIntro(verseNumber) {
      return `Intro ${verseNumber}`;
    }
    function giftDescription(giftNumber) {
      return `Gift ${giftNumber}`;
    }
    expect(versesUpṬo(1, verseIntro, giftDescription)).toEqual(
      "Intro 1\nGift 1\n"
    );
  });

  xit("should return firsty and second verses", () => {
    expect(versesUpṬo(2)).toEqual(
      "On the first day of Christmas" +
        "\n" +
        "My true love gave to me:" +
        "\n" +
        "A partridge in a pear tree." +
        "\n" +
        "\n" +
        "On the second day of Christmas" +
        "\n" +
        "My true love gave to me:" +
        "\n" +
        "Two turtle doves and" +
        "\n" +
        "A partridge in a pear tree." +
        "\n"
    );
  });
});
