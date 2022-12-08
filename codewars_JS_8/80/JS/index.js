function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let countSheep = 0;
    for (let elem of arrayOfSheep) {
        if (elem == true) {
            countSheep++;
        }
    }
    return countSheep;
}


console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));
