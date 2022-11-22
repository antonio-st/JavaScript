function greet(language) {
  const country = {
    english: 'Welcome',
    русский: 'Привет',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
    IP_ADDRESS_INVALID: 'Welcome',
    IP_ADDRESS_NOT_FOUND: 'Welcome',
    IP_ADDRESS_REQUIRED: 'Welcome'
  }
  return country[language]
}

console.log(greet('русский'))