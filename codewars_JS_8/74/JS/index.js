function strCount(str, letter) {
    //code here
    countLet = 0;
    for (let i of str) {
        if (i.includes(letter)) {
            countLet++;
        }
    }
    return countLet;
}

console.log(strCount('Hello', 'o'));

console.log(strCount('Hello', 'l'));