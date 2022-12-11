##  Анимация нескольких элементов с переменной скоростью

В предыдущем испытании вы изменили скорость анимации для двух элементов с одинаковой анимацией, изменив их @keyframesправила.

 Вы можете достичь той же цели, манипулируя animation-durationнесколькими элементами.

В анимации, запущенной в редакторе кода, на небе есть три звезды, которые мерцают с одинаковой частотой в непрерывном цикле. Чтобы заставить их мерцать с разной скоростью, вы можете установить animation-durationсвойство на разные значения для каждого элемента.

---
Установите animation-durationдля элементов с классами star-1, star-2и star-3значение 1 с, 0,9 с и 1,1 с соответственно.

---

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
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
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
<div class="star-3 stars"></div>

```




