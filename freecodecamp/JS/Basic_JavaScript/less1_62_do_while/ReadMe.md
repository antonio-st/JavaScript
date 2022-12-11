## Итерация с помощью JavaScript Do...While Loops

## Iterate with JavaScript Do...While Loops


Следующий тип цикла, с которым вы познакомитесь, называется циклом do...while. Он называется циклом do...while, потому что он сначала выполняет один проход кода внутри цикла, несмотря ни на что, а затем продолжает выполнение цикла, пока указанное условие оценивается как истинное.
```
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```
Приведенный выше пример ведет себя аналогично другим типам циклов, и результирующий массив будет выглядеть как [0, 1, 2, 3, 4]. Однако то, что отличает цикл do...в то время как от других циклов, заключается в том, как он ведет себя, когда условие не выполняется при первой проверке. Давайте посмотрим на это в действии. Вот обычный цикл while, который будет запускать код в цикле до тех пор, пока i < 5:
```
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}

```
В этом примере мы инициализируем значение ourArray пустым массивом, а значение i равным 5. Когда мы выполняем цикл while, условие оценивается как false, поскольку i не меньше 5, поэтому мы не выполняем код внутри петля. В результате в наш массив не будет добавлено никаких значений, и он по-прежнему будет выглядеть как [] после того, как весь код в приведенном выше примере завершится. Теперь взглянем на цикл do...while:
const ourArray = []; 
```
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

В этом случае мы инициализируем значение i равным 5, как и в случае с циклом while. Когда мы добираемся до следующей строки, нет условия для оценки, поэтому мы переходим к коду внутри фигурных скобок и выполняем его. Мы добавим один элемент в массив, а затем увеличим i, прежде чем перейдем к проверке условия. Когда мы, наконец, оцениваем условие i < 5 в последней строке, мы видим, что i теперь равно 6, что не проходит условную проверку, поэтому мы выходим из цикла и на этом все. В конце приведенного выше примера значение ourArray равно [5]. По сути, цикл do...while гарантирует, что код внутри цикла будет выполнен хотя бы один раз. Давайте попробуем заставить цикл do...while работать, помещая значения в массив.

---

Измените цикл while в коде на цикл do...while, чтобы цикл передавал только число 10 в myArray, а i было равно 11, когда ваш код закончил работу.