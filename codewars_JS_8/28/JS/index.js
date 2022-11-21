const array = [1, 2, 3, 4];

function grow(x) {

    return x.reduce((acc, rec) => acc * rec);
}

console.log(grow(array));