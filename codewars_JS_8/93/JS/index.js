const quarterOf = (month) => {
    // Your code here
    return (month >= 1 && month <= 3) ? 1
        : (month >= 4 && month <= 6) ? 2
        : (month >= 7 && month <= 9) ? 3
        : 4
}


console.log(quarterOf(9));
