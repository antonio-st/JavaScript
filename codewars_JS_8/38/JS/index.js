const youName = prompt('Enter your name > ')


function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() == 'r') {
    return name + ' plays banjo';
  } else if (name[0].toLowerCase() != 'r') {
    return name + ' does not play banjo'
  }
}


alert(areYouPlayingBanjo(youName));