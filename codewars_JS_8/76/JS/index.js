// Sum Numbers
function sum (numbers) {
    "use strict";
  return numbers.reduce((sum, current) => sum + current, 0);
    
};

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));