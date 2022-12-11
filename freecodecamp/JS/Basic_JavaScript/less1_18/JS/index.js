// Write Reusable JavaScript with Functions

/*

    Create a function called reusableFunction which prints the string Hi World to the dev console.
    Call the function.
*/

function reusableFunction() {
    console.log('Hi World')
}

reusableFunction();

/*   Создайте вызываемую функцию functionWithArgs, которая принимает два аргумента и выводит их сумму в консоль разработчика.
    Вызовите функцию с двумя числами в качестве аргументов.
 */

function functionWithArgs(myNumb1, myNumb2) {
    console.log(myNumb1 + ' +', myNumb2 + ' =', myNumb1 + myNumb2)
}
functionWithArgs(10, 18)

/**
Создайте функцию timesFive, которая принимает один аргумент, умножает его на 5и возвращает новое значение.
 */
function timesFive(arg) {
    return arg * 5
}

console.log(timesFive(30));