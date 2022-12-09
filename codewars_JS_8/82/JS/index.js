function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let sharkTime;
    let humanTime;

    if (dolphin == true) {
        if ((pontoonDistance / youSpeed) < (sharkDistance / (sharkSpeed / 2))) {
            return 'Alive!';
        } else {
            return 'Shark Bait!';
        }

    } else {
        if ((pontoonDistance / youSpeed) < (sharkDistance / sharkSpeed)) {
            return 'Alive!';
        } else {
            return 'Shark Bait!';
        }
    }
}

console.log(shark(24, 0, 4, 8, true));