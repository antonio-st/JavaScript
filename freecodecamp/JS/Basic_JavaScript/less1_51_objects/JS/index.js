function checkObj(obj, checkProp) {
    // Only change code below this line
    if ((obj.hasOwnProperty(checkProp) === true)) {
      return obj[checkProp];
    } else if ((obj.hasOwnProperty(checkProp) === false)) {
      return ('Not Found')
      }
    // Only change code above this line
  }

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));