const areaOrPerimeter = function(l , w) {
    // Return your answer
    if (l == w) {
      return l * w;
    } else {
      return 2 * (l + w);
    }
  };

  console.log(areaOrPerimeter(5, 5));
  console.log(areaOrPerimeter(6, 4));