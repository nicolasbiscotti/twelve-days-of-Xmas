"use strict";

const paragraphHead = require("./paragraphHead");

describe("Get the heading of the nth paragraph", () => {
  it("should return first day for paragraph one", () => {
    expect(paragraphHead(1)).toEqual("On the first day of Christmas");
  });
  it("should return second day for paragraph two", () => {
    expect(paragraphHead(2)).toEqual("On the second day of Christmas");
  });
  it("should return twelfth day for paragraph twelfth", () => {
    expect(paragraphHead(12)).toEqual("On the twelfth day of Christmas");
  });
  it("should throw an exception if no argument has been passed", () => {
    expect(paragraphHead).toThrow("You must provide a paragraph number.");
  });
  it("should throw an exception if paragraph number is greater than twelve", () => {
    expect(() => paragraphHead(13)).toThrow(
      "The paragraph number can't be greater than twelve."
    );
  });
  it("should throw an exception if paragraph number is less than one", () => {
    expect(() => paragraphHead(0)).toThrow(
      "The paragraph number can't be less than one."
    );
  });
});
