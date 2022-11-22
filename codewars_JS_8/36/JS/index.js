let scorce  = [1,5,87,45,8,8] 

function getAverage(marks){
   const average = Math.floor(marks.reduce((a, b) => a + b) / marks.length);
   return average;
 }

 console.log(getAverage(scorce));