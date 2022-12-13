const sum = (...args) => {
    //const args = [...args];
    return args.reduce((a, b) => a + b, 0);
  }

  console.log(sum(1, 2, 3, 4, 5));