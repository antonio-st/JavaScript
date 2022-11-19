let myArray = [12, 16, 20]
function isPythagoreanTriple(integers) {
    integers.sort((a, b) => a - b)
    const [a, b, c] = integers;
    return Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2);
}
console.log(isPythagoreanTriple(myArray));