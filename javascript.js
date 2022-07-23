console.log('run "playGame()" to play rock paper scissors')
let myPick = '';
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

function playGame(myPick = prompt('Rock, Paper, or Scissors?').toLowerCase()) {
    let cpuPick = computerPlay()
    //Draw condition
    if (myPick == cpuPick) {
        return matchResult(`You chose ${myPick}. They chose ${cpuPick}. Draw!`)
    }
    //Win condition
    else if (myPick == 'rock' && cpuPick == 'scissors' ||
        myPick == 'scissors' && cpuPick == 'paper' ||
        myPick == 'paper' && cpuPick == 'rock') {
        return matchResult(`You win, ${myPick} beats ${cpuPick}.`, 'me')
    }
    //Lose condition
    else if (myPick == 'rock' && cpuPick == 'paper' ||
        myPick == 'paper' && cpuPick == 'scissors' ||
        myPick == 'scissors' && cpuPick == 'rock') {
        return matchResult(`You lose, ${myPick} does not beat ${cpuPick}.`, 'cpu')
    }
    //Invalid input
    else {
        return matchResult(`What the hell is ${myPick}?!`)
    }
}

function matchResult(matchResult,winner){
    const log = document.querySelector('#outputBox');
    let cScore = parseInt(document.querySelector('#computerScore').textContent, 10),
        pScore = parseInt(document.querySelector('#playerScore').textContent, 10);
    log.textContent = `\n ${matchResult} `
    if (winner == 'me'){
        pScore = pScore + 1;
        document.querySelector('#playerScore').textContent = pScore;
    }
    if (winner == 'cpu'){
        cScore = cScore + 1;
        document.querySelector('#computerScore').textContent = cScore;        
    }
    if (pScore == 5){
        log.textContent = `You win!`
    }
    if (cScore == 5)(
        log.textContent = `You Lose!`
    )
}

const rockButton = document.querySelector('#rock'),
    paperButton = document.querySelector('#paper'),
    scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

