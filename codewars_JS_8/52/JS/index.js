// Array.prototype.indexOf()

// Array.prototype.indexOf(searchElement[, fromIndex = 0]) - старый добрый метод, заставляющий всех мучиться со своей -1 в случае, когда элемента нет.


function check(a, x) {
    // your code here
    return a.indexOf(x) != -1;
  }

  console.log(check([10,20,30,45,9,100], 45))