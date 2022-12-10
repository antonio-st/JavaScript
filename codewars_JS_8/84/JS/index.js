let summation = function (num) {
    // Code here
     let sum = 0
      for(let i = 0; i <= num; i++) {
          sum += i
      }
      return sum
  }



  console.log(summation(10));



//   reduce()
//   var summation = function (num) {
//     return Array(num).fill(0).reduce((acc, _, index) => acc + index + 1, 0)
// }


// recursion.

// var summation = function (num) {
//     return num ? num + summation(num - 1) : num
// }
