"use strict";

const giftDescription = require("./giftDescription");

describe("Get the description given the paragraph number and the gift number", () => {
  it("should return the first Gift", () => {
    expect(giftDescription(1, 1)).toEqual("A partridge in a pear tree.");
  });
});
