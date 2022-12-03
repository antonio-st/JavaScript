function enough(cap, on, wait) {
    let remPlace = cap - on;
    let remWait = wait - remPlace
    if (remPlace >= wait){
    //   return (0 +  ` # He can fit all ${wait} passengers` )
            return 0;
    }
    else if (remPlace < wait) {
        // return (`${remWait} # He can't fit ${remWait} of the ${wait} waiting`)
        return remWait;
    }
  }


  console.log(enough(100, 48, 55));