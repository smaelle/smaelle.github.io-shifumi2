//DOM variables
const rockElt = document.getElementById('rock');
const paperElt = document.getElementById('paper');
const scissorsElt = document.getElementById('scissors');
const scoreUserElt = document.getElementById('score_user');
const scoreComputerElt = document.getElementById('score_computer');
let userPoint = 0;
let computerPoint = 0;
const displayElt = document.getElementById('display');
let displayResult = '';
const buttonElt = document.getElementById('restart');


// events : user choice
rockElt.addEventListener('click', main);
paperElt.addEventListener('click', main);
scissorsElt.addEventListener('click', main);


function main(e){
    let userChoice = e.target.id;
    let result = score(userChoice,computerChoice());
    count(result);
}

//Computer choice
const computerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

//Who wins
const score = (user, computer) => {
    if(user === 'rock'){
        if(computer === 'scissors'){
            displayResult = "Vous avez gagné !";
            return 1;
        }
        if(computer === 'paper'){
            displayResult = "Vous avez perdu !";
            return 2;
        }
        else{
            displayResult = 'Egalité !';
            return 0;
        }
    }
    if(user === 'paper'){
        if(computer === 'rock'){
            displayResult = 'Vous avez gagné !';
            return 1;
        }
        if(computer === 'scissors'){
            displayResult = 'Vous avez perdu !';
            return 2;
        }
        else{
            displayResult = 'Egalité !';
            return 0;
        }
    }
    if(user === 'scissors'){
        if(computer === 'rock'){
            displayResult = 'Vous avez perdu !';
            return 2;
        }
        if(computer === 'paper'){
            displayResult = 'Vous avez gagné !';
            return 1;
        }
        else{
            displayResult = 'Egalité !';
            return 0;
        }
    }
}

//score count and display the winner
const count = (result) => {
    switch(result){
        case 1 :
        userPoint ++;
        scoreUserElt.innerHTML = userPoint;
        displayElt.innerHTML = displayResult;
        break;
        case 2 :
        computerPoint ++;
        scoreComputerElt.innerHTML = computerPoint;
        displayElt.innerHTML = displayResult;
        break;
        default : 
        displayElt.innerHTML = displayResult;
    }
}

//restart game
buttonElt.addEventListener('click', function(){
    scoreUserElt.innerHTML = 0;
    scoreComputerElt.innerHTML = 0;
    displayElt.textContent = '';
    computerPoint = 0;
    userPoint = 0;
});

//apparition
