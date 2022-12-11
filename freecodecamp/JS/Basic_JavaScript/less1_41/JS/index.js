
function abTest(a, b) {
    // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  } else
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(2, 2, '=>', abTest(2,2));
  console.log(-20, 5, '=>', abTest(-20,5));
  console.log(10, 4, '=>', abTest(10,4));