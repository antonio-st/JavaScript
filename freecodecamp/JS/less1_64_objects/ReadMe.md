## Profile Lookup

## Поиск профиля




У нас есть массив объектов, представляющих разных людей в наших списках контактов.

Функция `lookUpProfile`, которая принимает nameи свойство `( prop)` в качестве аргументов, была предварительно написана для вас.

Функция должна проверять, nameявляется ли контакт реальным `firstName` и данное свойство `( prop)` является свойством этого контакта.

Если оба верны, верните «значение» этого свойства.

Если `name` не соответствует ни одному контакту, то вернуть строку `No such contact`.

Если `prop` не соответствует ни одному допустимому свойству контакта, найденному совпадающим, name верните строку `No such property`.


<hr>



We have an array of objects representing different people in our contacts lists.

A `lookUpProfile` function that takes `name` and a property `(prop)` as arguments has been pre-written for you.

The function should check if `name` is an actual contact's `firstName` and the given property `(prop)` is a property of that contact.

If both are true, then return the "value" of that property.

If `name` does not correspond to any contacts then return the string `No such contact`.

If `prop` does not correspond to any valid properties of a contact found to match `name` then return the string `No such property`.
