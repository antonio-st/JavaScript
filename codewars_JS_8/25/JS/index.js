const template = ['Milk, Tea, Cofee'];


function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}
console.log(template, 'res=>', buildString(template));
