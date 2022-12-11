function rangeOfNumbers(startNum, endNum) {
    if (startNum - endNum === 0) {
    return [startNum];
   } else {
    const numbers = rangeOfNumbers(startNum + 1, endNum);    
    numbers.unshift(startNum);
    return numbers;
   }
  };
  
  console.log(rangeOfNumbers(3, 9));
