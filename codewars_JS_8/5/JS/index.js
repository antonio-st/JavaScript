let a = +prompt('Угол 1 треугольника(градусы):')
let b = +prompt('Угол 2 треугольника (градусы): ')

function otherAngle(a, b) {
    return 180 - (a + b)
}

console.log(otherAngle(a, b))
alert('Третий угол треуголника = ' + otherAngle(a, b))
