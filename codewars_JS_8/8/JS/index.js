
let firstString = '&lth2&gtHello"World&lt/h2&gt'

// function htmlspecialchars(formData) {
//     let outputSign = '';
//     for (var i = 0; i < formData.length; i++) {
//         if (formData[i].includes('<')) {
//             outputSign += '&lt';
//         } else if (formData[i].includes('>')) {
//             outputSign += '&gt'
//         } else if (formData[i].includes('"')) {
//             outputSign += '&quot'
//         } else if (formData[i].includes('&')) {
//             outputSign += '&amp'
//         } else outputSign += formData[i]
//     }
//     return outputSign;
// }


function htmlspecialchars(formData) {
    let resArr = [];
    for (let i = 0; i < formData.length; i++) {
        if (formData[i] == '<') {
            resArr.push('&lt;');

        } else if (formData[i] == '>') {
            resArr.push('&gt;');

        } else if (formData[i] == '"') {
            resArr.push('&quot;');

        } else if (formData[i] == '&') {
            resArr.push('&amp;');

        } else {
            resArr.push(formData[i]);
        }
    }
    return resArr.join('');
}


console.log(htmlspecialchars(firstString))
