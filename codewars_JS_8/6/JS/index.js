let weight = +prompt('weight(kg):')
let height = +prompt('height(m): ')


function bmi(weight, height) {
    bmiIndex = weight / (height ** 2)
    if (bmiIndex <= 18.5) {
        return 'Underweight';
    }
    else if (bmiIndex <= 25.0) {
        return 'Normal';
    }
    else if (bmiIndex <= 30.0) {
        return "Overweight";
    }
    else if (bmiIndex > 30) {
        return "Obese";
    }
}

console.log(bmi(weight, height))
alert(bmi(weight, height))
