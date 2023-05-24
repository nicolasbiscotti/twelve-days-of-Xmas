"use strict";

const versesUpṬo = require("./versesUpTo");

describe("Get the first nth verses of the lyrics", () => {
  it("should return only the firsty verse", () => {
    expect(versesUpṬo(1)).toEqual(
      "On the first day of Christmas" +
        "\n" +
        "My true love gave to me:" +
        "\n" +
        "A partridge in a pear tree." +
        "\n"
    );
  });

  it("should return firsty and second verses", () => {
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
