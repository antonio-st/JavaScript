## Java Script / CodeWars - Bug Fixing 

## Переключатель /Корпус - Исправление ошибки #6

О, нет! Функция объекта eval Тимми не работает. Он использует Switch / Cases для оценки заданных свойств объекта, можете ли вы исправить функцию Тимми?


---

```
function evalObject(value){
    switch(value.operation){
      case'+': return value.a + value.b;
      case'-': return value.a - value.b;
      case'/': return value.a / value.b;
      case'*': return value.a * value.b;
      case'%': return value.a % value.b;
      case'^': return Math.pow(value.a, value.b);
    }
  }


```
