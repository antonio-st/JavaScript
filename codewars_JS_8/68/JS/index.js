function getRealFloor(n) {
    if (n <= 0 ) {
      return n;
    } else if (n <= 13) {
      return n - 1;
    } else {
      return n - 2;
    }
  }

  console.log(15, getRealFloor(15));
  console.log(-3, getRealFloor(-3));
  console.log(8, getRealFloor(8));