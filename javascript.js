console.log('run "playRound()" to play rock paper scissors')

let computerChoice = '';
let playerChoice = '';
function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return 'paper'
    }
    else if (random === 2) {
        return 'scissors'
    }
    else {
        return 'rock'
    }
}
// rewrite the win condition into an array of conditionals and reading it off the array instead of writing it all into the if
function playRound(playerChoice = prompt('Your choice?').toLowerCase(), computerChoice = computerPlay()) {
    console.log('You chose ' + playerChoice + ' while the computer chose ' + computerChoice)
    if (playerChoice == computerChoice) {
        return 'DRAW!'
    }
    //not sure why this is triggering or why the else is triggering on top of it
    else if (playerChoice != 'rock' || playerChoice != 'scissors' || playerChoice != 'paper') {
        return "You didn't choose rock, paper, or scissors."
    }
    else if (playerChoice === 'rock' && computerChoice == 'scissors' || playerChoice == 'scissors' && computerChoice == 'paper' || playerChoice == 'paper' && computerChoice == 'rock') {
        return (playerChoice + ' beats ' + computerChoice + '! Winner!')
    }
    else {
        return 'You chose ' + playerChoice + ' while the computer chose ' + computerChoice
    }
}