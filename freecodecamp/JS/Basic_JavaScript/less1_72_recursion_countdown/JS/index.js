// Only change code below this line
function countdown(n) {
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}
  // Only change code above this line

  // function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));
