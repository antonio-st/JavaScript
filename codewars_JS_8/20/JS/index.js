const initStr = '1a2b3c4d5e';
String.prototype.toAlternatingCase = function () {
    new_str = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            new_str += this[i].toLowerCase();
        }
        else {
            new_str += this[i].toUpperCase();
        }
    }
    return new_str;
}

console.log(initStr, initStr.toAlternatingCase())