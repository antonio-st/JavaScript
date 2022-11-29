function findAverage(array) {
    // your code here
    if (array.length < 1 || array == undefined) {
      return 0;
    } else {
      return array.reduce((a, b) => a + b) / array.length
      }
  
  }

  console.log(findAverage([1,2,3,4,5,6,7,8,9,10]));