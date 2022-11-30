function twiceAsOld(dadYearsOld, sonYearsOld) {
    if ( (dadYearsOld - (sonYearsOld * 2)) > 0 ) {
      return dadYearsOld - (sonYearsOld * 2)
    } else {
      return (dadYearsOld - (sonYearsOld * 2)) * -1;
    }
  }

  console.log(twiceAsOld(36, 7));