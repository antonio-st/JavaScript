const minNumber = 0
const maxNumber = 100
const attemptsCount = 10

const getRandomNumber = () => Math.round(Math.random() * 100)

const randomNumber = getRandomNumber()
console.log(randomNumber)

const getPlayerName = () => {
    return prompt('Привет! Как тебя зовут?', 'Введи имя, дружище :)')
}

const playerName = getPlayerName();
console.log(playerName)


// главная функция вызова 
const bigGame = (min, max, attempts, randomNum, player) => {
    alert(`Привет, ${player}!
    Я загадал число в диапазоне от ${min} до ${max}.
    У тебя есть ${attempts} попыток отгадать его.
    Если готов - жми на OK!
    `)

    for (let index = 1; index <= attempts; index++) {
        const answer = prompt('Давай твой вариант: ', 'введи число')
        if (answer < randomNum) {
            alert(`Я загадал большее число.
            У тебя осталось ${attempts - index} попыток.
            `)
        } else if (answer > randomNum) {
            alert(`Я загадал меньшее число.
            У тебя осталось ${attempts - index} попыток.
            `)
        } else {
            alert(`${player}, ты молодец !
            Ты отгадал число.
            Поздравляю! Инкубатор ждет тебя!
            `)
            return
        }
    }
    alert(`О, нет...
    Ты не справился, ${player}. Тебе не хватило ${attempts} попыток.
    Пробуй еще раз :-)
    `)
}

bigGame(minNumber, maxNumber, attemptsCount, randomNumber, playerName)