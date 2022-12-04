## Record Collection codewars 2022 solution


You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
> If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
> If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
> If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
> If value is an empty string, delete the given prop property from the album.

> Note: A copy of the recordCollection object is used for the tests.



<hr>


## Коллекция записей

Вам дан объектный литерал, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный идентификационный номер в качестве ключа и несколько других свойств. Не все альбомы имеют полную информацию.

Вы начинаете с updateRecordsфункции, которая принимает литерал объекта records, содержащий коллекцию музыкальных альбомов, id, а prop(like artistили tracks) и value. Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный функции.

> Ваша функция всегда должна возвращать весь объект коллекции записей.
> Если prop нет tracks и value не является пустой строкой, обновите или установите для этого альбома propзначение value.
> Если propесть, tracks но в альбоме нет tracks свойства, создайте пустой массив и добавьте value в него.
> Если prop это tracks и value не пустая строка, добавьте value ее в конец существующего tracks массива альбома.
> Если valueэто пустая строка, удалите данное propсвойство из альбома.

> Примечание.recordCollection Для тестов используется копия объекта.



