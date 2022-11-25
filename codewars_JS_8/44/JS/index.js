const myString = 'ACSKLDFJSGSKLDFJSKLDFJ'

String.prototype.isUpperCase = function () {
  return this.toUpperCase() == this;
}


console.log(myString, myString.isUpperCase())