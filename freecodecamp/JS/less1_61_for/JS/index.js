function multiplyAll(arr) {
    // Only change code below this line
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++){
          product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }

   console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
   console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));

