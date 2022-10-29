alert('JS работает!')


/*
Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

*/

let nameUser = 'Джон';
let admin = nameUser;
console.log(admin)

/* 
Придумайте правильные имена
важность: 3

    Создайте переменную для названия нашей планеты. Как бы вы её назвали?
    Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

*/

let ourEarth = 1;
currentUserName = 'Antonio';
console.log(ourEarth, currentUserName)


// Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript.
// Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например:

let name = 'Antonio';
console.log(`Hi, ${name}!`);

console.log(`200 ** 2 = ${200 ** 2}`)

// БУЛЕВЫЙ ТИП

let isGreater = 25 > 23;
console.log(`25 > 23 -> ${isGreater}`)

//null
let age = null; //значение age неизвестно

//undefined

let years;
console.log(years) // значение не присвоено

// Оператор typeof, тип переменной

typeof 0;
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof 'Hi');
console.log(typeof null);
console.log(typeof alert);
console.log(typeof true);