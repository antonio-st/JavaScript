
let value1 = +prompt('Введите первое число');
let value2 = +prompt('Введите второе число');
let operation = prompt('Введите знак операции'); // любой: +, -, *, /, %

function calcResult(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        case '<':
            return value1 < value2;
        case '>':
            return value1 > value2;
    }
}

alert(calcResult(operation, value1, value2));