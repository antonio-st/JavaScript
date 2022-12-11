function amIWilson(p) {
    // check if prime is Wilson
    p = BigInt(p);
    return ((factorial(p - 1n)) + 1n) % (p * p) == 0n
  
  }
  
  function factorial(x) {
    return (x <= 1n ) ? 1n
    : x * factorial(x - 1n)
  }

  console.log(amIWilson(5));