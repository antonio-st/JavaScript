## Delete Properties from a JavaScript Object

We can also delete properties from objects like this:

delete ourDog.bark;

Example:

const ourDog = {
"name": "Camper",
"legs": 4,
"tails": 1,
"friends": ["everything!"],
"bark": "bow-wow"
};

delete ourDog.bark;

After the last line shown above, ourDog looks like:

{
"name": "Camper",
"legs": 4,
"tails": 1,
"friends": ["everything!"]
}

Delete the tails property from myDog. You may use either dot or bracket notation.




<hr>


## Удалить свойства из объекта JavaScript

Мы также можем удалить свойства из объектов следующим образом:

delete ourDog.bark;

Пример:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

После последней строки, показанной выше, ourDogвыглядит так:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}

> Удалить tails свойство из myDog. Вы можете использовать либо точку, либо квадратную нотацию.



