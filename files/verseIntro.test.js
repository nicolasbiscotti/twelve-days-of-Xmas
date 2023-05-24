"use strict";

const verseIntro = require("./verseIntro");

describe("Get the introduction of the nth verse", () => {
  it("should return first day for verse one", () => {
    expect(verseIntro(1)).toEqual("On the first day of Christmas\nMy true love gave to me:");
  });
  it("should return second day for verse two", () => {
    expect(verseIntro(2)).toEqual("On the second day of Christmas\nMy true love gave to me:");
  });
  it("should return twelfth day for verse twelfth", () => {
    expect(verseIntro(12)).toEqual("On the twelfth day of Christmas\nMy true love gave to me:");
  });
  it("should throw an exception if no argument has been passed", () => {
    expect(verseIntro).toThrow("You must provide a verse number.");
  });
  it("should throw an exception if verse number is greater than twelve", () => {
    expect(() => verseIntro(13)).toThrow(
      "The verse number can't be greater than twelve."
    );
  });
  it("should throw an exception if verse number is less than one", () => {
    expect(() => verseIntro(0)).toThrow(
      "The verse number can't be less than one."
    );
  });
});