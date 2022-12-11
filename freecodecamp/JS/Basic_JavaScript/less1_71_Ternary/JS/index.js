function checkSign(num) {
    return (num === 0) ? 'zero'
    : (num > 0) ? 'positive'
    : 'negative'
  }
  
  checkSign(10);

  console.log(checkSign(10));
  console.log(checkSign(-8));
  console.log(checkSign(0));