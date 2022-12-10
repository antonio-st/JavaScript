// function pickIt(arr){
//     var odd=[],even=[];
//     //coding here
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i] % 2 == 0) {
//         even.push(arr[i]);
//       } else { 
//         odd.push(arr[i]);
//         }
//     }
//     return [odd,even];
//   }

//   console.log(pickIt([3,2,1,3,5,18,56,0]));


function pickIt(arr) {
    var odd = [], even = [];
    //coding here
    for (let i = 0; i < arr.length; i++) {
        (arr[i] % 2 == 0) ? even.push(arr[i])
            : odd.push(arr[i]);
    }
    return [odd, even];
}

console.log(pickIt([3, 2, 1, 3, 5, 18, 56, 0]));