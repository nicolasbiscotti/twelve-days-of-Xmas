'use strict';

const paragraphHead = require('./paragraphHead');

describe('Get the heading of the nth paragraph', () => {
  it('should return first day for paragraph one', () => {
    expect(paragraphHead(1)).toEqual('On the first day of Christmas');
  });
});
