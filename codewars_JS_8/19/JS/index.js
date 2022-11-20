const mylist = [4, 6, 2, 1, 9, 63, -134, 566];

var min = function (list) {

    return Math.min(...list);

}


var max = function (list) {

    return Math.max(...list);
}

console.log(mylist, 'min =', min(mylist), ', max =', max(mylist));

