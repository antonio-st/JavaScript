/** 

Добавьте локальную переменную в myOutfit функцию, 
чтобы переопределить значение outerWear строкой sweater.
*/

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = 'sweater'
    // Only change code above this line
    return outerWear;
}

console.log(myOutfit());


/*
Создайте функцию addFive без каких-либо аргументов. 
Эта функция добавляет 5 к sum переменной, но возвращает
 значение undefined.
 */

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum += 5;
}

// Only change code above this line

console.log(addThree());
console.log(addFive());