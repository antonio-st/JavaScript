const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    if (mpg * fuelLeft == distanceToPump || mpg * fuelLeft > distanceToPump) {
        return true;
    } else return false;
  };

  console.log(zeroFuel(100, 25, 1));