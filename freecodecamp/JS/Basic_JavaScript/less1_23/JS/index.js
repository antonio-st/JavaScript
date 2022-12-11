/*

Добавьте в указанную строку оператор равенства, 
чтобы функция возвращала строку , Equal 
когда val она эквивалентна 12.

 */

let enterVal = prompt();

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(enterVal));