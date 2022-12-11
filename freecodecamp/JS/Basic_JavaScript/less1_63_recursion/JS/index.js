function sum(arr, n) {
    // Only change code below this line
      if (n <= 0) {
          return 0;
      } else {
          return sum(arr, n - 1) + arr[n - 1];
      }
  
    // Only change code above this line
  }

//без рекурсии
  function multiply(arr, n) {
    let product = 0;
    for (let i = 0; i < n; i++) {
      product += arr[i];
    }
    return product;
  }


console.log(sum([2, 3, 4], 3));

console.log(multiply([2, 3, 4], 3));