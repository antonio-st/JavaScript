const isVow = (a) => {
    let vowels = 'aeiou';
    let index = 0;
    while(index < a.length) {
      for(let i = 0; i < vowels.length; i++) {
        if(a[index] === vowels.charCodeAt(i)) {
          a[index] = vowels[i];
        }
      }
      index++;
    }
  
    return a;
  }


  console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))