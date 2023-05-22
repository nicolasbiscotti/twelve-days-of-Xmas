'use strict';

const paragraphList = require('./paragraphList');

describe('Get the list of gifts of the nth paragraph', () => {
  
  it('should call giftDescription with paragraph 1 and line 1 one time', () => {
    let checkParameters;
    let timesCalled = 0;
    function giftDescription(paragraph, line) {
      if (paragraph === 1 && line === 1) {
        checkParameters = 1;
      }
      timesCalled++;
    }
    paragraphList(1, giftDescription);
    expect(checkParameters).toEqual(1);
    expect(timesCalled).toEqual(1);
  });
  
  it('should return a list of length one with the string "A partridge in a peat tree."', () => {
    function giftDescription(paragraph, line) {
      return 'A partridge in a pear tree.';
    }
    expect(paragraphList(1, giftDescription)).toEqual(['A partridge in a pear tree.']);
  });
  
  it('should call giftDescription two times', () => {
    let timesCalled = 0;
    function giftDescription(paragraph, line) {
      timesCalled++;
    }
    paragraphList(2, giftDescription);
    expect(timesCalled).toEqual(2);
  });
  
   it('should call giftDescription with paragraph 2', () => {
    let firstTimeWithOne = false;
    let secontTimeWithTwo = false; 
    function giftDescription(paragraph, line) {
      if (!firstTimeWithOne && paragraph === 2 && line === 1) {
        firstTimeWithOne = true;
      } else if (firstTimeWithOne && paragraph === 2 && line === 2) {
        secontTimeWithTwo = true;
      }
    }
    paragraphList(2, giftDescription);
    expect(firstTimeWithOne).toBe(true);
    expect(secontTimeWithTwo).toBe(true);
  });
  
});