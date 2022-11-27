function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    // return an array containing all of the strings in the input array except those that match strings in geese
    return birds.filter(bird => !geese.includes(bird));
};


console.log(gooseFilter(["Roman Tufted", "Toulouse", "Pilgrim", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));