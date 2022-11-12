let pol = prompt('Введите слово для проверки: ');
function isPalindrome(x) {

    if (x.split('').reverse().join('').toLowerCase() == x.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(pol));
alert(isPalindrome(pol));