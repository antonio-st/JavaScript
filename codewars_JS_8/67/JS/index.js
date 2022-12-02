function cockroachSpeed(s) {
    return Math.floor((s * 100000)/3600) //округление в меньшую сторону
  }

  console.log(1.29 , 'km/h => ,',cockroachSpeed(1.29) ,'cm/s');