function typeOfSum(a, b) {
    // good luck
    return typeof(a + b);
  }

  console.log(typeOfSum(12,1));
  console.log(typeOfSum('d', 1));
  console.log(typeOfSum(1, 'a'));
  console.log(typeOfSum(null, 1));
  console.log(typeOfSum(null, undefined));