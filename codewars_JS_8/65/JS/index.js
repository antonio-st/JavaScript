function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  //classPoints = classPoints.concat(yourPoints); 
  resFriends = classPoints.reduce((a, b) => a + b) / classPoints.length;
if (yourPoints > resFriends) {
  return true;
} else {
  return false;
}
  
}

  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
