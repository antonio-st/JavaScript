/*



Замените два оператора if одним оператором, используя &&оператор, 
который вернет строку Yes, если valменьше или равно 50и больше 
или равно 25. В противном случае будет возвращена строка No.


 */

let youyear = prompt('Enter Year-> ')
function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return 'Yes';
    }
    // Only change code above this line
    return "No";
}

alert(testLogicalAnd(youyear));