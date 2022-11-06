/** 


Напишите функцию, nextInLine которая принимает массив ( arr) 
и число ( item) в качестве аргументов.

Добавьте число в конец массива, затем удалите первый элемент 
массива.

Затем nextInLine функция должна вернуть элемент, 
который был удален.

*/

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    item = arr.shift(0);
    return item;

    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



/*

Измените welcomeToBooleans функцию, чтобы она возвращала true, 
а не false при нажатии кнопки запуска.

 */

function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}

console.log(welcomeToBooleans())


