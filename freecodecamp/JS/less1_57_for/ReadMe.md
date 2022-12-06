## Iterate with JavaScript For Loops ##

You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

```

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

```

ourArray will now have the value [0, 1, 2, 3, 4].


> Use a for loop to push the values 1 through 5 onto myArray.



<hr>


## Итерация с JavaScript для циклов

Вы можете запустить один и тот же код несколько раз, используя цикл.

Наиболее распространенный тип цикла JavaScript называется forциклом, потому что он выполняется определенное количество раз.

Циклы for объявляются с тремя необязательными выражениями, разделенными точкой с запятой:

for (a; b; c), где aоператор инициализации, оператор bусловия и cконечное выражение.

Оператор инициализации выполняется только один раз перед запуском цикла. Обычно он используется для определения и настройки вашей переменной цикла.

Оператор условия оценивается в начале каждой итерации цикла и будет продолжаться до тех пор, пока он оценивается как true. Когда условие находится falseв начале итерации, выполнение цикла прекращается. Это означает, что если условие начинается как ложное, ваш цикл никогда не будет выполняться.

Окончательное выражение выполняется в конце каждой итерации цикла перед следующей проверкой условия и обычно используется для увеличения или уменьшения счетчика цикла.

В следующем примере мы инициализируем i = 0и повторяем, пока наше условие i < 5истинно. Мы будем увеличивать iна 1в каждой итерации цикла с i++нашим окончательным выражением.

```

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

```
> ourArrayтеперь будет иметь значение [0, 1, 2, 3, 4].

<hr>

Используйте for цикл, чтобы поместить значения от 1 до 5 в myArray.



