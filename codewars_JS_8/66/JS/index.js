function shortcut(string) {
    newStr = '';
    for (var i = 0; i < string.length; i++) {
        if (!(string[i] == 'i' || string[i] == 'e' || string[i] == 'o' || string[i] == 'a' || string[i] == 'u')) {
            newStr += string[i]
      }
}
return newStr;
}
console.log(shortcut('goodbye'));