function multiTable(number) {
    // good luck
    let res = '';
    for (let i = 1; i < 11; i++) {
        const result = i * number;
        (i == 10) ? res += (`${i} * ${number} = ${result}`)
            : res += (`${i} * ${number} = ${result}\n`);
    } return res;
}

console.log(multiTable(5));