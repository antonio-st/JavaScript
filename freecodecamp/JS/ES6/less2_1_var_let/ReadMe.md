## Compare Scopes of the var and let Keywords


## Сравните области действия переменной и пусть ключевые слова

Если вы не знакомы с let, ознакомьтесь с этой задачей о разнице между let и var .

Когда вы объявляете переменную с varключевым словом, она объявляется глобально или локально, если она объявлена ​​внутри функции.

Ключевое let слово ведет себя аналогично, но с некоторыми дополнительными функциями. Когда вы объявляете переменную с letключевым словом внутри блока, оператора или выражения, ее область действия ограничивается этим блоком, оператором или выражением.

Например:
```
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```
Здесь консоль отобразит значения [0, 1, 2] и 3.

С var ключевым словом iобъявляется глобально. Поэтому при i++выполнении он обновляет глобальную переменную. Этот код похож на следующий:

```
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```
Здесь консоль отобразит значения [0, 1, 2]и 3.

Такое поведение вызовет проблемы, если вы создадите функцию и сохраните ее для последующего использования внутри цикла for, в котором используется iпеременная. Это связано с тем, что хранимая функция всегда будет ссылаться на значение обновленной глобальной iпеременной.
```
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```
Здесь консоль отобразит значение 3.

Как вы можете видеть, printNumTwo()печатает 3, а не 2. Это связано с тем, что значение, назначенное для, iбыло обновлено, и printNumTwo()возвращает глобальное значение i, а не значение, iкоторое было при создании функции в цикле for. Ключевое letслово не следует этому поведению:
```
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```
Здесь консоль отобразит значение 2и сообщение об ошибке i is not defined.

i не определен, потому что он не был объявлен в глобальной области. Он объявляется только в forоператоре цикла. printNumTwo()вернул правильное значение, поскольку три разные iпеременные с уникальными значениями (0, 1 и 2) были созданы ключевым letсловом в операторе цикла.

---
Исправьте код так, чтобы iобъявленная в ifоператоре переменная была отдельной от iобъявленной в первой строке функции. Убедитесь, что varключевое слово нигде в вашем коде не используется.

Это упражнение предназначено для того, чтобы проиллюстрировать разницу между тем, как ключевые слова varи letназначают область действия объявленной переменной. При программировании функции, подобной той, что используется в этом упражнении, часто лучше использовать разные имена переменных, чтобы избежать путаницы.
