## Change the Position of Overlapping Elements with the z-index Property ##

`Измените положение перекрывающихся элементов с помощью свойства z-index`

    Когда элементы позиционируются так, чтобы они перекрывались (т. е. с помощью position: absolute | relative | fixed | sticky), элемент, следующий позже в HTML-разметке, по умолчанию будет отображаться поверх других элементов. 

    Однако z-index свойство может указывать порядок расположения элементов друг над другом. 
    
    Это должно быть целое число (т.е. целое число, а не десятичное), и более высокие значения z-indexсвойства элемента перемещают его выше в стеке, чем те, у которых более низкие значения.

<HR>
    Добавьте z-index свойство к элементу с именем класса first(красный прямоугольник) и установите для него значение 2, чтобы оно покрывало другой элемент (синий прямоугольник).




