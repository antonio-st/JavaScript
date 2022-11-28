// function oddCount(n){
//     let arrNotOdd = 0;
//     for (let i = 0; i < n; i++){
//         if (i % 2 > 0) {
//             arrNotOdd += 1;
//         }
//     }
//     return arrNotOdd;
//   }

  function oddCount(n){
    return Math.floor(n/2);
  }


  console.log(oddCount(15023))