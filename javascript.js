console.log('run "playGame()" to play rock paper scissors')

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
/* prompt user to give an answer and put it in myPick
    run computerPlay() function to get computer's pick and put it in cpuPick
    check myPick against cpuPick, 
        if they match, its a draw
        else if win conditions, you win
        else if lose conditions, you lose
        else invalid input
    */
function playGame() {
    let myPick = prompt('Rock, Paper, or Scissors?').toLowerCase()
    let cpuPick = computerPlay()
    if (myPick == cpuPick) {
        return `You chose ${myPick}. They chose ${cpuPick}. Draw!`
    }
    else if (myPick == 'rock' && cpuPick == 'scissors' || 
            myPick == 'scissors' && cpuPick == 'paper' || 
            myPick == 'paper' && cpuPick == 'rock') {
        return (myPick + ' beats ' + cpuPick + '! Winner!')
    }
    else if (myPick == 'rock' && cpuPick == 'paper' ||
            myPick == 'paper' && cpuPick == 'scissors' ||
            myPick == 'scissors' && cpuPick == 'rock'){
        return (myPick + ' does not beat ' + cpuPick + '. You lose.')
            }
    else {
        return `What the hell is ${myPick}?!`
    }
}