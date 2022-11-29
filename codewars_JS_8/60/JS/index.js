function makeNegative(num) {
    if (num < 0) {
      return num;
    } else {
      return num * -1;
    }
  }

  console.log(-5, '=>', makeNegative(-5));
  console.log(28, '=>', makeNegative(28));