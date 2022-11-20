
let myArr = [1, 2, 3, 4, 5, 25, 50]

function none(arr, fun) {
    return !arr.some(fun);
}

console.log(none(myArr, function (item) { return item > 49 }));