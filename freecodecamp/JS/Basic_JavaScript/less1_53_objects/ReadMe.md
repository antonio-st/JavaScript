## Accessing Nested Objects

## Доступ к вложенным объектам

Доступ к подсвойствам объектов можно получить, соединив вместе точки или квадратные скобки.

Вот вложенный объект:

- const ourStorage = {
- "desk": {
- "drawer": "stapler"
- },
- "cabinet": {
- "top drawer": { 
- "folder1": "a file",
- "folder2": "secrets"
- },
- "bottom drawer": "soda"
- }
- };

> ourStorage.cabinet["top drawer"].folder2;
> ourStorage.desk.drawer;
> ourStorage.cabinet["top drawer"].folder2

будет строка secrets, и ourStorage.desk.drawer будет строка stapler.

Получите доступ к myStorageобъекту и назначьте содержимое glove boxсвойства gloveBoxContents переменной. По возможности используйте запись через точку для всех свойств, в противном случае используйте запись в квадратных скобках.


