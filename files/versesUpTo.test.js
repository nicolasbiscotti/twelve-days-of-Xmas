"use strict";

const versesUpṬo = require("./versesUpTo");

describe("Get the first nth verses of the lyrics", () => {
  it("should return only the firsty versse", () => {
    expect(versesUpṬo(1)).toEqual(
      "On the first day of Christmas" +
        "\n" +
        "My true love gave to me:" +
        "\n" +
        "A partridge in a pear tree." +
        "\n"
    );
  });
});
