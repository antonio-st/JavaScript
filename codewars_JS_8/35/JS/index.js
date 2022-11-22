myNum = prompt('Введите число до 10 > ')

function simpleMultiplication(number) {
    if (number % 2 == 0) {
      return number * 8
    } else if (number % 2 != 0) {
       return number * 9
    }
 }
 

alert(simpleMultiplication(myNum));