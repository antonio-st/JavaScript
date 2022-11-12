/*

Сравнение с оператором больше, чем

Оператор «больше чем» ( >) сравнивает значения двух чисел. Если число слева больше числа справа, возвращается true. В противном случае возвращается false.

Как и оператор равенства, оператор «больше чем» будет преобразовывать типы данных значений при сравнении.

Примеры

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

Добавьте оператор «больше чем» к указанным строкам, чтобы операторы return имели смысл.


 */

let inpVal = prompt('Enter Numbers: ')

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}




alert(testGreaterOrEqual(inpVal));