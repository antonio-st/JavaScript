let myArray = [12, 16, 20]
function isPythagoreanTriple(integers) {
    numMyArrayA = integers[0];
    numMyArrayB = integers[1];
    numMyArrayC = integers[2];
    // `${elmyArraytwo} ${elmyArrayRes}`
    return numMyArrayA ** 2 + numMyArrayB ** 2 == numMyArrayC ** 2;

}
console.log(isPythagoreanTriple(myArray));