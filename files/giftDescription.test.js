"use strict";

const giftDescription = require("./giftDescription");

describe("Get the description given the paragraph number and the gift number", () => {
  it("should throw for Paragraph number less than one", () => {
    expect(() => giftDescription(0, 3)).toThrow(
      "Paragraph number must be greater than or equal to one"
    );
  });
  it("should throw for Paragraph number greater than twelve", () => {
    expect(() => giftDescription(13, 2)).toThrow(
      "Paragraph number must be less than or equal to twelve"
    );
  });
  it("should throw for Gift number less than one", () => {
    expect(() => giftDescription(1, 0)).toThrow(
      "Gift number must be greater than or equal to one"
    );
  });
  it("should throw for Gift number greater than twelve", () => {
    expect(() => giftDescription(1, 13)).toThrow(
      "Gift number must be less than or equal to twelve"
    );
  });
  it("should return the first Gift description", () => {
    expect(giftDescription(1, 1)).toEqual("A partridge in a pear tree.");
  });
  it("should return the first Gift description", () => {
    expect(giftDescription(12, 1)).toEqual("A partridge in a pear tree.");
  });
  it("should throw for Gift number greater than the Paragraph number", () => {
    expect(() => giftDescription(1, 2)).toThrow(
      "Gift number cannot be greater than the Paragraph number"
    );
  });
  it("should return the second Gift description", () => {
    expect(giftDescription(2, 2)).toEqual("Two turtle doves and");
  });
  it("should return the second Gift description", () => {
    expect(giftDescription(12, 2)).toEqual("Two turtle doves and");
  });
});
