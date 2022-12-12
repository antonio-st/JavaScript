function removeEveryOther(arr){
    //your code here
  return arr.filter((item, index) => index % 2 === 0);
  }

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));