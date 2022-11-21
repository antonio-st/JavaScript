let numHh = prompt('How many times did you spin the hoop? > ')

function hoopCount(n) {
    if (n > 10) {
        return 'Great, now move on to tricks'
    }
    else if (n < 10) {
        return 'Keep at it until you get it'
    } else {
        return 'Great, now move on to tricks'
    }
}


alert(hoopCount(numHh))