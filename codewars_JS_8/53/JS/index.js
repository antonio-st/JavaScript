function _if(bool, func1, func2) {
    if (bool == true) {
      return func1();
    } else {
      return func2();
    }
  }

console.log(_if(true, function(){console.log("True")}, function(){console.log("false")}))