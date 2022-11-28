function countPositivesSumNegatives(input) {
let sumNum = 0;
let negNum = 0;
if (input == 0 || input == null) {
  return []
} else {
      for (let i = 0; i <= input.length; i++){
        if (input[i] > 0) {
          sumNum += 1;
        } else if (input[i] < 0){
          negNum +=input[i];
        }
      } 
    }   
      return [sumNum, negNum];
      }

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
