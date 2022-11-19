var arr = [
    [1, 2, 3, 100],
    [101, 102, 103, 200],
]

function toCsvText(array) {
    let csv = array.map(function (century) {
        return century.join(",");
    }).join("\n");
    return csv
}



console.log(toCsvText(arr))