const readline = require('readline');

function distanceBetweenPoints(x1, y1, x2, y2){
    return 0;
}

if (require.main === module) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    rl.question('Enter x1 y1 x2 y2 separated by spaces: ', (numbers) => {
      const [x1, y1, x2, y2] = numbers.trim().split(/\s+/).map(Number);
  
      if ([x1, y1, x2, y2].some(Number.isNaN)) {
        console.log('Please enter exactly 4 valid numbers.');
        rl.close();
        return;
      }
  
      console.log(
        'The distance between the two points is:',
        distanceBetweenPoints(x1, y1, x2, y2)
      );
      rl.close();
    });
  }
  
  module.exports = { distanceBetweenPoints };