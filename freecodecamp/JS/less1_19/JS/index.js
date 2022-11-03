/** 
С помощью let или const объявите глобальную переменную с именем myGlobal вне какой-либо функции. Инициализируйте его со значением 10.

Внутри функции fun1 назначьте 5 без использования oopsGlobal ключевыхvar слов let или const.
*/

// Declare the myGlobal variable below this line
const myGlobal = 10;


function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun2();
console.log(oopsGlobal);


/**
 * Объявите внутри локальную переменную myLocalScope и запустите тесты.
 * 
 */

function myLocalScope() {
    // Only change code below this line
    const myVar = 10;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);