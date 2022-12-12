countSquares = cuts => cuts == 0 ? 1 : 6 * cuts * cuts + 2


console.log(countSquares(10));