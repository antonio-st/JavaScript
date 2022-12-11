// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ['Java Script', 28, 'Python'];
console.log(myArray)


// Вложенный массив
const myArray2 = [['Java', 2], ['JavaScript', 1]];
console.log(myArray2[0])


//Create a variable called myData and set it to equal the first value of myArray using bracket notation.
const myArray3 = [50, 60, 70];
let myData = myArray3[0]
console.log(myArray3)


// Modify the data stored at index 0 of myArray to a value of 45.
const myArray4 = [18, 64, 99];
myArray4[0] = 45;
console.log(myArray4)

// Используя обозначение в скобках, выберите элемент из myArrayтаких, который myDataравен 8.

const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData2 = myArray5[2][1];
console.log(myData2)