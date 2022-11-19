/*





Объедините два ifоператора в один оператор, который возвращает строку Outside, 
если valона не находится между 10и 20включительно. 
В противном случае вернуть строку Inside.



 */
let enterNum = prompt('Введите число: ', 'От 0 до 50')

function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}

alert(testLogicalOr(enterNum));