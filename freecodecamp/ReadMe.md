## CSS HTML tags and selectors ##

  `opacity`
  + Значение 1 непрозрачно, то есть совсем непрозрачно.
  + Значение 0,5 означает полупрозрачность.
  + Значение 0 полностью прозрачно.
  
```
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;

```
<HR>

```
  `box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  ```
  + тень для элемента


<HR>

  `border: 1px solid #ccc;`
  + рамка
  
    `border-radius: 5px;`
      + округляем края

<HR>

  `background-color: rgba(45, 45, 45, 0.1);`

  <HR>

  `padding: 10px;`
  + внутренний отступ

  `margin: 10px 5px;`
  + внешний отступ
  
<HR>

`text-align: justify;`
  + выравнивание текста

<HR>

  `<strong>`
  + наклонный
  + подчеркнутый текст

  `text-transform: `

  + lowercase	"transform me"
  + uppercase	"TRANSFORM ME"
  + capitalize	"Transform Me"
  + initial	Use the default value
  + inherit	Use the text-transform value from the parent element
  + none	Default: Use the original text

<HR>

  `width: 245px;` 
  `height: 150px;`
  + ширина / высота


  `font-size: 52px`
   + размер шрифта


  `font-weight: 800`
   + Свойство font-weight устанавливает, насколько толстыми или тонкими будут символы в разделе текста.

  `line-height: 25px;`
    + изменяет количество вертикального пространства, которое получает каждая строка текста.


  `a:hover { color: blue ;}`
    + определяет свойства после наведения, в данном случае ссылка.


<HR>

```
h2 {
`position: relative;`
`top: 15px;` 
`bottom: 10px`
}

```
- Когда для позиции элемента установлено значение relative, это позволяет вам указать, как CSS должен перемещать его относительно его текущей позиции в обычном потоке страницы. 
- Он сочетается со свойствами смещения CSS left или right, и top или bottom. 
- Они говорят, на сколько пикселей, процентов или ems нужно отодвинуть элемент от того места, где он обычно расположен.

```

h2 {
`position: relative;`
`left: 15px;`
`bottom: 10px;`
}

```
  - данный код сместит элемент снизу вверх (bottom) и слева направо (left)

<HR>


#searchbar {
    `position: absolute;`
    `top: 50px;`
    `right: 50px`
  }

  - Cвойства CSS — absolute, который фиксирует элемент на месте относительно его родительского контейнера. 
  - В отличие от relativeположения, это удаляет элемент из обычного потока документа, поэтому окружающие элементы игнорируют его. 
  - Свойства смещения CSS (сверху или снизу и слева или справа) используются для настройки положения.
  
    + Один нюанс с абсолютным позиционированием заключается в том, что оно будет заблокировано относительно своего ближайшего предка. 
    + Если вы забудете добавить правило позиции к родительскому элементу (обычно это делается с помощью position: relative;), 


<HR>

```
  a {
 text-decoration: none;
  }

```
  - убрать с сылок подчеркивание для меню

<HR>

```

nav li {`
display: inline;`
margin-right: 20px;`
}
```
- расположит меню в одну строку с отступом

<HR>

```
#navbar {
position: fixed;
top: 0px;
left: 0px;
width: 100%;
background-color: #767676;
}

```

`position: fixed;` - сделать меню неподвижным
  Одно ключевое различие между позициями fixed и absolute заключается в том, что элемент с фиксированной позицией не будет перемещаться при прокрутке пользователем.

<HR>

```

#left {`
float: left;`
width: 50%;`
}


#right {`
float: right;`
width: 40%;`
}
```
  - Следующий инструмент позиционирования на самом деле не использует position, а устанавливает float свойство элемента. 
  - Плавающие элементы удаляются из обычного потока документа и помещаются либо в родительский элемент, left  либо right в родительский элемент.
  - Он обычно используется со width свойством, чтобы указать, сколько горизонтального пространства требуется плавающему элементу.

  + Данная разметка будет хорошо работать в виде двухколоночного макета с элементами sectionи asideрядом друг с другом. 


<HR>

```
.first {`
 background-color: red;`
position: absolute;`
z-index: 2;`
}
```
  - `z-index` свойство может указывать порядок расположения элементов друг над другом. 
  Это должно быть целое число (т.е. целое число, а не десятичное), и более высокие значения z-index свойства элемента перемещают его 
  выше в стеке, чем те, у которых более низкие значения.




<HR>

```

div {
background-color: blue;
height: 100px;
width: 100px;
margin: auto;

}

```
- Центрировать элемент по горизонтали, используя свойство `margin`

- Этот метод работает и для изображений. Изображения являются встроенными элементами по умолчанию, но их можно изменить на блочные элементы, если задать для `display` свойства значение `block`.


<HR>

```

div {
display: inline-block;
height: 100px;
width: 100px;
}

<div class="blue"></div>

<div class="white"></div>

```
- расположить в одну линию

<HR>

### CSS3 introduced the hsl() ###

+ Оттенок (Hue)
- это то, что люди обычно называют «цветом». Если вы представляете спектр цветов, начиная с красного слева, переходя к зеленому в середине и синему справа, оттенок — это то место, где цвет соответствует этой линии. 
  - В hsl()оттенке используется концепция цветового круга вместо спектра, где угол цвета на круге задается как значение от 0 до 360.

+ Насыщенность (Saturation) — это количество серого в цвете. Полностью насыщенный цвет не содержит серого, а минимально насыщенный цвет почти полностью серый. 
  - Это дается в процентах, где 100% соответствует полному насыщению.

+ Яркость (Lightness) — это количество белого или черного в цвете. 
  - Процент дается в диапазоне от 0 % (черный) до 100 % (белый), где 50 % — нормальный цвет.
  - 
+ Color	HSL

- red	    hsl(0, 100%, 50%)
- yellow	hsl(60, 100%, 50%)
- green	  hsl(120, 100%, 50%)
- cyan	  hsl(180, 100%, 50%)
- blue	  hsl(240, 100%, 50%)
- magenta	hsl(300, 100%, 50%)


<HR>


### линейный градиент CSS ###
  ``` background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);```
- Первый аргумент задает направление, с которого начинается переход цвета - его можно указать как степень, 
  + где 90deg делается горизонтальный градиент (слева направо) и 45deg диагональный градиент (снизу слева направо вверх). 
  + Следующие аргументы определяют порядок цветов, используемых в градиенте.

`Пример:`

+ background: linear-gradient(90deg, red, yellow, rgb(204, 2)


<HR>

## Функция repeating-linear-gradient() ##

```
 background: repeating-linear-gradient(
   90deg,
   yellow 0px,
   blue 40px,
   green 40px,
   red 80px
  )

```

<HR>

background: url('https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png')

- фон

<HR>

```
 p {
  transform: scale(2);`
}
```

+ Чтобы изменить масштаб элемента, в CSS есть transformсвойство, а также его scale() 
функция. 

Следующий пример кода удваивает размер всех элементов абзаца на странице:


<hr>

```
 #bottom {
 background-color: blue;
 transform: skewX(24deg);
 }
```
Следующий код `transform: skewX(24deg)` наклоняет элемент абзаца на 24 градуса по оси X. (можно использовать обратный наклон -32)

<hr>


- #top {
-  transform: skewY(-10deg);

- }- 

`skewY()` свойство искажает элемент по оси Y (вертикальной).

<hr>

```
.center {
position: absolute;
margin: auto;
top: 0;
right: 0;
bottom: 0;
left: 0;- width: 100px;
height: 100px;
background-color: transparent;
border-radius: 50%;
box-shadow: 25px 10px 0px 0px blue;
}
```
Луна


<hr>

```
<style>
.heart {
position: absolute;
margin: auto;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: pink;
height: 50px;
width: 50px;
transform: ;
}
.heart::after {
background-color: blue;
content: "";
border-radius: 25%;
position: absolute;
width: 50px;
height: 50px;
top: 0px;
left: 25px;
}
.heart::before {
content: ;
background-color: pink;
border-radius: 50%;
position: absolute;
width: 50px;
height: 50px;
top: -25px;
left: 0px;
}
</style>
<div class="heart"></div>
```
> Превратите элемент на экране в сердце.
 + ::before и ::after псевдоэлементы. 
 + ::before создает псевдоэлемент, который является первым дочерним элементом выбранного элемента; ::after создает псевдоэлемент, 
 который является последним дочерним элементом выбранного элемента


<hr>


#anim {
animation-name: colorful;
animation-duration: 3s;
}

@keyframes colorful {
0% {
background-color: blue;
}
100% {
background-color: yellow;
}
}

> анимирование элемента
> 
<HR>

```
button {
border-radius: 5px;
color: white;
background-color: #0F5897;
padding: 5px 10px 8px 10px;
}

button:hover {
animation-name: background-color;
animation-duration: 500ms;
/* Only change code below this line */
animation-fill-mode: forwards;
/* Only change code above this line */
}

@keyframes background-color {
100% {
    background-color: #4791d0;
}
}
```
> анимация для кнопок


<hr>

```
div {
height: 40px;
width: 70%;
background: black;
margin: 50px auto;
border-radius: 5px;
position: relative;
}

#rect {
animation-name: rainbow;
animation-duration: 4s;
}

@keyframes rainbow {
0% {
background-color: blue;
top: 0px;
left: 0px;

}

50% {
background-color: green;
top: 50px;
left: 25px;

}

100% {
background-color: yellow;
top: 0px;
left: -25px;
}
}
```
> анимация при включении position: relative

---

HTML5 представил несколько новых элементов, которые дают разработчикам больше возможностей, а также включают функции доступности. Эти теги включают , среди прочего ```main, header, footer, nav, article, и section.```

Элемент ```main``` используется для переноса основного контента, и на странице должен быть только один элемент.

Тег ```main``` также имеет встроенную функцию ориентира, которую вспомогательные технологии могут использовать для быстрого перехода к основному контенту.

---