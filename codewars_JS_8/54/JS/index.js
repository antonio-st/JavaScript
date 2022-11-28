function numberToPower(number, power){
    // Code here
    let numbIsh = number;
    for (i = 1; i < power; i++){
      number = number * numbIsh
    }
    return number;
  }


  console.log(numberToPower(2,6))