// Push ["dog", 3] onto the end of the myArray variable.
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])
let myArr = [];
for (let i = 0; i < myArray.length; i++) {
    myArr += myArray[i]
}
console.log(myArr)


// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

const myArray2 = [["John", 23], ["cat", 2]];
// Only change code below this line
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray)



//Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

const myArray3 = [["John", 23], ["dog", 3]];
// Only change code below this line
const removedFromMyArray2 = myArray.shift()
console.log(removedFromMyArray2)