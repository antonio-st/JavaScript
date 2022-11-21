myStr = '<I learn java script !&'

function removeChar(str) {
    return str.slice(1, -1);
};


console.log(myStr, '=>', removeChar(myStr));