"use strict";

const giftDescription = require("./giftDescription");

describe("Get the description given the paragraph number and the gift number", () => {
  it("should throw paragraph number must be greater or equal to one", () => {
    expect(() => giftDescription(0, 3)).toThrow(
      "Paragraph number must be greater than or equal to one"
    );
  });
  it("should throw paragraph number must be less or equal to twelve", () => {
    expect(() => giftDescription(13, 2)).toThrow(
      "Paragraph number must be less than or equal to twelve"
    );
  });
  it("should return the first Gift", () => {
    expect(giftDescription(1, 1)).toEqual("A partridge in a pear tree.");
  });
  it("should throw gift number must be greater or equals one", () => {
    expect(() => giftDescription(1, 0)).toThrow(
      "Gift number must be greater than or equal to one"
    );
  });
  it("should throw gift number must be less or equal to twelve", () => {
    expect(() => giftDescription(1, 13)).toThrow(
      "Gift number must be less than or equal to twelve"
    );
  });
  it("should return the first Gift", () => {
    expect(giftDescription(12, 1)).toEqual("A partridge in a pear tree.");
  });
});
