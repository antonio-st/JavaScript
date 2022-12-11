## Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
top: "hat",
bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".




<hr>


## Проверка объектов на свойства

Иногда полезно проверить, существует ли свойство данного объекта или нет. Мы можем использовать .hasOwnProperty(propname)метод объектов, чтобы определить, имеет ли этот объект заданное имя свойства. .hasOwnProperty()возвращает trueили falseесли свойство найдено или нет.

Пример

const myObj = {
top: "hat",
bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

Первый hasOwnProperty возвращается true, а второй возвращается false.

<hr>

Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный функции ( obj), определенное свойство ( checkProp).
Если свойство найдено, верните значение этого свойства. Если нет, верните "Not Found".



