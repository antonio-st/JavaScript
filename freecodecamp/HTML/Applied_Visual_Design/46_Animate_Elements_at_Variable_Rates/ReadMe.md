## Анимация элементов с переменной скоростью

Существует множество способов изменить скорость анимации аналогично анимированных элементов. До сих пор это было достигнуто путем применения animation-iteration-countсвойства и установки @keyframesправил.

Для иллюстрации анимация справа состоит из двух звезд, каждая из которых уменьшается в размере и непрозрачности на отметке 20% в правиле @keyframes, что создает мерцающую анимацию. Вы можете изменить @keyframes правило для одного из элементов, чтобы звезды мерцали с разной скоростью.

> Измените скорость анимации для элемента с именем класса star-1, изменив его @keyframes правило на 50%.


```
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    50%  {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>

```



