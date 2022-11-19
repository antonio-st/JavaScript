// function reverseArr(input) {
//     let ret = new Array;
//     for (let i = input.length - 1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     return ret;
// }
// let a = [3, -5, 7, -8]
// console.log(reverseArr(a), a);


function invert(array) {
    let ret = new Array;
    array.forEach(function (item, i, array) {
        ret.push(array[i] * -1);
    }
    );
    return ret;
}

let a = [-5, 1, 6, 98]
console.log(invert(a), a);