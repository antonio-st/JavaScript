let distance = 50;
let mpg = 25;
let fuelLeft = 2;

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if (distanceToPump - (mpg * fuelLeft) <= 0) {
        return true
    } else return false;
};

console.log(zeroFuel(distance, mpg, fuelLeft))