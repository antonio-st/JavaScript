## Узнайте, как работают кривые Безье

В последнем задании было введено свойство animation-timing-function и несколько ключевых слов, которые изменяют скорость анимации в течение ее продолжительности. CSS предлагает опцию, отличную от ключевых слов, которая обеспечивает еще более точный контроль над тем, как воспроизводится анимация, благодаря использованию кривых Безье.

В CSS-анимации кривые Безье используются с помощью функции cubic-bezier. Форма кривой показывает, как воспроизводится анимация. Кривая находится в системе координат 1 на 1. Ось X этой системы координат - это продолжительность анимации (думайте об этом как о шкале времени), а ось Y - это изменение в анимации.

Функция кубического Безье состоит из четырех основных точек, которые расположены на этой сетке 1 на 1: p0, p1, p2 и p3. p0 и p3 заданы для вас - это начальная и конечная точки, которые всегда расположены соответственно в начале координат (0, 0) и (1, 1). Вы устанавливаете значения x и y для двух других точек, и то, где вы размещаете их в сетке, определяет форму кривой, которой будет следовать анимация. Это делается в CSS путем объявления значений x и y "якорных" точек p1 и p2 в форме: (x1, y1, x2, y2). Собрав все это воедино, вот пример кривой Безье в CSS-коде:

```
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

В приведенном выше примере значения x и y эквивалентны для каждой точки (x1 = 0,25 = y1 и x2 = 0,75 = y2), что, если вы помните из урока геометрии, приводит к линии, которая простирается от начала координат до точки (1, 1). Эта анимация представляет собой линейное изменение элемента в течение продолжительности анимации и аналогична использованию ключевого слова linear. Другими словами, он меняется с постоянной скоростью.

Для элемента с идентификатором ball1 измените значение свойства animation-timing-function с линейного на эквивалентное значение функции кубического Безье. Используйте значения точек, приведенные в приведенном выше примере.



---

```
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 549px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>

```