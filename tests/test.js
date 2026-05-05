const { distanceBetweenPoints } = require('../index');

describe('lengthOfLine', () => {
    it('the length of line between (0,0) and (0,0) should be 0', () => {
      const distance = distanceBetweenPoints(0,0,0,0);
      expect(distance).toBe(0);
    });
  });

describe('lengthOfHorizontalLine', () => {
    it('the length of line between (0,0) and (5,0) should be 5', () => {
      const distance = distanceBetweenPoints(0,0,5,0);
      expect(distance).toBe(5);
    });
  });

describe('lengthOfVerticalLine', () => {
    it('the length of line between (0,0) and (0,5) should be 5', () => {
      const distance = distanceBetweenPoints(0,0,0,5);
      expect(distance).toBe(5);
    });
  });

describe('lengthOfDiagonalLine', () => {
    it('the length of line between (0,0) and (5,5) should be 5', () => {
      const distance = distanceBetweenPoints(0,0,5,5);
      expect(distance).toBe(5);
    });
  });