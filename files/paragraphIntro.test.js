'use strict';

const paragraphIntro = require('./paragraphIntro');

describe('Get the Introduction of the nth paragraph', () => {
  it('should return "My true love gave to me:"', () => {
    expect(paragraphIntro()).toEqual('My true love gave to me:');
  });
});