const { distanceBetweenPoints } = require('../index');

describe('lengthOfLine', () => {
    it('the length of the line starting and ending at same point should be 0', () => {
      const distance = distanceBetweenPoints(0,0,0,0);
      expect(distance).toBe(0);
    });
  });