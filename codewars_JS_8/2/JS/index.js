/*

Создайте функцию,
 которая возвращает значение, умноженное на 50 и увеличенное на 6. 
 Если введенное значение является строкой, 
 оно должно возвращать "Ошибку".
*/

function problem(x) {
    //your code here
    if (typeof x != 'string')
        return x * 50 + 6
    if (typeof x == 'string')
        return 'Error'
}

console.log(problem(10))
console.log(problem('10'))