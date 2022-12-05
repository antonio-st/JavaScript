##  Используйте анимацию CSS для изменения состояния наведения кнопки

Вы можете использовать CSS @keyframes, чтобы изменить цвет кнопки в состоянии наведения.

Вот пример изменения ширины изображения при наведении:

<style>
img {
width: 30px;
}
img:hover {
animation-name: width;
animation-duration: 500ms;
}

@keyframes width {
100% {
width: 40px;
}
}
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />

Обратите внимание, что это msозначает миллисекунды, где 1000 мс равны 1 с.

Используйте CSS @keyframes, чтобы изменить background-colorэлемент buttonтак, чтобы он отображался #4791d0, когда пользователь наводит на него курсор. Правило @keyframesдолжно иметь запись только для 100%.
