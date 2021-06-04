function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

var amount_correct = 0
var amount_incorrect = 0


function division_prompt() {
    let txt;
    let quotient =  getRandomIntInclusive(1,10)
    let divisor =  getRandomIntInclusive(1,10)
    let dividend = quotient * divisor 
    //The dividened is created by multiplying 2 numbers between 1 and 10 to garunte the correct anwser is an int between 1 and 10 
    let user_answer = prompt(`What is ${dividend} divided by ${divisor}`,"?")
    let user_int = parseInt(user_answer);

    if (user_answer == null || user_answer == "") {
        txt = "User cancelled the prompt."
    } else if (user_int == quotient) {
        txt = `THAT'S RIGHT ${dividend} divided by ${divisor} equals ${quotient}`
        amount_correct += 1

    } else {
        txt = `Sorry ${dividend} divided by ${divisor} equals ${quotient}`
        amount_incorrect += 1

    }
    document.getElementById("answer_state").innerHTML = txt 
    document.getElementById("correct_amount_numbers").innerHTML = amount_correct
    document.getElementById("incorrect_amount_numbers").innerHTML = amount_incorrect
}

function multipliction_prompt() {
    let txt;
    let multipule_one =  getRandomIntInclusive(1,10)
    let multipule_two =  getRandomIntInclusive(1,10)
    let product = multipule_one * multipule_two
    let user_answer = prompt(`What is ${multipule_one} times ${multipule_two}?`)
    let user_int = parseInt(user_answer);

    if (user_answer == null || user_answer == "") {
        txt = "User cancelled the prompt."
    } else if(user_int==product){
        txt = `Correct!! ${multipule_one} times ${multipule_two} is ${product}`
        amount_correct += 1
    } else {
        txt = `Sorry ${multipule_one} divided by ${multipule_two} equals ${product}`
        amount_incorrect += 1
    }
    document.getElementById("answer_state").innerHTML = txt 
    document.getElementById("correct_amount_numbers").innerHTML = amount_correct
    document.getElementById("incorrect_amount_numbers").innerHTML = amount_incorrect
}