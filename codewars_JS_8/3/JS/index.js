
let time = +prompt('Время в часах');
function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(time))
alert('Выпьет ' + litres(time) + ' литра(ов) воды')