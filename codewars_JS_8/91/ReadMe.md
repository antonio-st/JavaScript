## Java Script / CodeWars - Removing Elements

## Удаление элементов

Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
Пример:
```
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
```
Ни один из массивов не будет пустым, так что вам не нужно беспокоиться об этом!



```
function removeEveryOther(arr){
    //your code here
  return arr.filter((item, index) => index % 2 === 0);
  }

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

```