let numFlower1 = prompt('petals of each flower 1> ')
let numFlower2 = prompt('petals of each flower 2> ')

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == flower2 % 2) {
        return false;
    } else {
        return true;
    }
}

alert(lovefunc(numFlower1, numFlower2))