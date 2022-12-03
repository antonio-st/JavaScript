## Using Objects for Lookups

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of an article object:

const article = {
"title": "How to create objects in JavaScript",
"link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
"author": "Kaashan Hussain",
"language": "JavaScript",
"tags": "TECHNOLOGY",
"createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];

articleAuthor is the string Kaashan Hussain, articleLink is the string https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, and valueLookup is the string How to create objects in JavaScript.

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

<hr>


## Использование объектов для поиска

Объекты можно рассматривать как хранилище ключей/значений, например словарь. Если у вас есть табличные данные, вы можете использовать объект для поиска значений, а не switchоператор или if/elseцепочку. Это наиболее полезно, когда вы знаете, что ваши входные данные ограничены определенным диапазоном.

Вот пример объекта статьи:

const article = {
"title": "How to create objects in JavaScript",
"link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
"author": "Kaashan Hussain",
"language": "JavaScript",
"tags": "TECHNOLOGY",
"createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];

articleAuthorэто строка Kaashan Hussain, articleLinkэто строка https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/и valueLookupэто строка How to create objects in JavaScript.

<hr>

+ Преобразуйте оператор switch в объект с именем lookup. Используйте его, чтобы найти valи присвоить связанную строку resultпеременной.



