## Iterate Through an Array with a For Loop

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:
```
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.
#
> Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.




---


## Перебор массива с помощью цикла for

Распространенной задачей в JavaScript является перебор содержимого массива. Один из способов сделать это — использовать forцикл. Этот код выведет каждый элемент массива arrна консоль:
```
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```
Помните, что индексация массивов начинается с нуля, что означает, что последний индекс массива равен length - 1. Наше условие для этого цикла i < arr.lengthостанавливает цикл, когда iравно length. В этом случае последняя итерация, i === 4т.е. когда iстановится равно arr.length - 1и выводится 6на консоль. Затем iувеличивается до 5, и цикл завершается, потому i < arr.lengthчто false.

##

> Объявите и инициализируйте переменную totalв 0. Используйте forцикл, чтобы добавить значение каждого элемента myArrмассива в total.



