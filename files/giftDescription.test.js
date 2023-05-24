"use strict";

const giftDescription = require("./giftDescription");

describe("Get the gift description given the verse number", () => {
  it("should throw for verse number less than one", () => {
    expect(() => giftDescription(0)).toThrow(
      "Verse number must be greater than or equal to one"
    );
  });
  it("should throw for Verse number greater than twelve", () => {
    expect(() => giftDescription(13)).toThrow(
      "Verse number must be less than or equal to twelve"
    );
  });

  it("should return the first Gift description", () => {
    expect(giftDescription(1)).toEqual("A partridge in a pear tree.");
  });
  it("should return the second Gift description", () => {
    expect(giftDescription(2)).toEqual("Two turtle doves and");
  });
  it("should return the third Gift description", () => {
    expect(giftDescription(3)).toEqual("Three french hens");
  });
  it("should return the fourth Gift description", () => {
    expect(giftDescription(4)).toEqual("Four calling birds");
  });

  it("should return the twelfth Gift description", () => {
    expect(giftDescription(12)).toEqual("Twelve drummers drumming");
  });
});
