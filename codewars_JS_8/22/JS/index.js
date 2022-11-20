
const myStr = 'I! learn !Java Script'
function removeExclamationMarks(s) {

    let myStrIn = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] != '!') {
            myStrIn += s[i]
        }
    }
    return myStrIn;
}

console.log(myStr, '=>', removeExclamationMarks(myStr));