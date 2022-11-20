const a = [2, 2, 3]
const b = [5, 4, 1]

function findDifference(a, b) {
    return Math.abs(a.reduce((acc, rec) => acc * rec) - b.reduce((acc, rec) => acc * rec));
}

console.log(a, b, 'res=>', findDifference(a, b));
