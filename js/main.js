var amount_correct = 0
var amount_incorrect = 0
let quotient = 0
let divisor = 0
let dividend = 0
let multipule_one = 0
let multipule_two = 0
let product = 0
let problem_type = 0

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
// these make all the math buttons work
const subButton = document.getElementById('SubButton');
subButton.addEventListener('click',checkAnswer, false);
const division_button = document.getElementById('division_problem');
division_button.addEventListener('click',division_prompt, false);
const multiplication_button = document.getElementById('multiplication_problem');
multiplication_button.addEventListener('click',multipliction_prompt, false);

//sets up  nav menu toggling  
const nav_menu =document.getElementById('nav_menu')
const nav_button =document.getElementById('menu_icon')
nav_button.addEventListener('click',showNavMenuOnClick, false)

//resets all variable values to clear the previous problem
function reset_question(){
    quotient = 0
    divisor = 0
    dividend = 0
    multipule_one = 0
    multipule_two = 0
    product = 0
    problem_type = 0
}


function division_prompt() {
    document.getElementById("answer_state").innerHTML = ('')
    quotient =  getRandomIntInclusive(1,10)
    divisor =  getRandomIntInclusive(1,10)
    dividend = quotient * divisor 
    //The dividened is created by multiplying 2 numbers between 1 and 10 to garunte the correct anwser is an int between 1 and 10 
    document.getElementById("question").innerHTML = (`What is ${dividend} divided by ${divisor}?`)
    problem_type = 1
}
    

function multipliction_prompt() {
    document.getElementById("answer_state").innerHTML = ('')
    multipule_one =  getRandomIntInclusive(1,10)
    multipule_two =  getRandomIntInclusive(1,10)
    product = multipule_one * multipule_two
    document.getElementById("question").innerHTML = (`What is ${multipule_one} times ${multipule_two}?`)
    problem_type = 2    
}

function checkAnswer() {
    let txt = '';
    let user_answer = document.getElementById('user_answer').value;
    let userInt = parseInt(user_answer);
    
    if (problem_type == 1){
        if (user_answer == null || user_answer == "") {
            txt = "User cancelled the prompt."
        } else if (userInt == quotient) {
            txt = `That's right ${dividend} divided by ${divisor} equals ${quotient}`
            amount_correct += 1
    
        } else {
            txt = `Sorry ${dividend} divided by ${divisor} equals ${quotient}`
            amount_incorrect += 1
    
        }
        console.log("divition question completed")
    }
    else if (problem_type == 2){
        if (user_answer == null || user_answer == "") {
            txt = "User cancelled the prompt."
        } else if(userInt==product){
            txt = `Correct!! ${multipule_one} times ${multipule_two} is ${product}`
            amount_correct += 1
        } else {
            txt = `Sorry ${multipule_one} times ${multipule_two} equals ${product}`
            amount_incorrect += 1
        }
        console.log("multiplication question completed")
    }
    document.getElementById("answer_state").innerHTML = txt 
    document.getElementById("correct_amount_numbers").innerHTML = amount_correct
    document.getElementById("incorrect_amount_numbers").innerHTML = amount_incorrect
    reset_question();
    // document.getElementById('answer_state').innerHTML = (`${quotient}, ${divisor}, ${dividend}, ${multipule_one}, ${multipule_two}, ${product}, ${problem_type}  ${userInt}`)
}

function showNavMenuOnClick() {
    if(nav_menu.style.display === 'none') { 
        nav_menu.style.display = 'flex'
    } else {
        nav_menu.style.display = 'none';
        console.log("toggle")
    }
    
}
