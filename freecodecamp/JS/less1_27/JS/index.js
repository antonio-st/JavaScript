/*

Добавьте оператор «меньше чем» к указанным строкам, чтобы операторы return имели смысл.

 */

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(36));