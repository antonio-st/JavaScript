let myArr = [1, 2, 3, 4, 5, 25, 50]

function include(arr, fun) {
    return arr.includes(fun);
}


console.log(include(myArr, 25));