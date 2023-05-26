"use strict";

const { MissingArgument, OutOfRange } = require("./customErrors");
const verseIntro = require("./verseIntro");

describe("Get the introduction of the nth verse", () => {
  it("should return first day for verse one", () => {
    expect(verseIntro(1)).toEqual(
      "On the first day of Christmas,\nMy true love gave to me:"
    );
  });
  it("should return second day for verse two", () => {
    expect(verseIntro(2)).toEqual(
      "On the second day of Christmas,\nMy true love gave to me:"
    );
  });
  it("should return twelfth day for verse twelfth", () => {
    expect(verseIntro(12)).toEqual(
      "On the twelfth day of Christmas,\nMy true love gave to me:"
    );
  });
  it("should throw a MissingArgument exception if no argument has been passed", () => {
    expect(verseIntro).toThrow(MissingArgument);
    expect(verseIntro).toThrow("You must provide a verse number.");
  });
  it("should throw an OutOfRange exception if verse number is greater than twelve", () => {
    function verseNumberOutOfRange() {
      verseIntro(13);
    }
    expect(verseNumberOutOfRange).toThrow(OutOfRange);
    expect(verseNumberOutOfRange).toThrow(
      "The verse number can't be greater than twelve."
    );
  });
  it("should throw an OutOfRange exception if verse number is less than one", () => {
    expect(() => verseIntro(0)).toThrow(OutOfRange);
    expect(() => verseIntro(0)).toThrow(
      "The verse number can't be less than one."
    );
  });
});
