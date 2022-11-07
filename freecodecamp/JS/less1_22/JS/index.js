/*
Создайте if оператор внутри функции для возврата Yes, that was true, 
если параметр wasThatTrue есть, true и возврата в No, 
that was false противном случае.
 */

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return 'Yes, that was true';
    }
    return 'No, that was false'


    // Only change code above this line

}
trueOrFalse(true);
trueOrFalse(false);

console.log(trueOrFalse(true))
console.log(trueOrFalse(false))