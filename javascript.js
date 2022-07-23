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
/* prompt user to give an answer and put it in myPick
    run computerPlay() function to get computer's pick and put it in cpuPick
    check myPick against cpuPick, 
        if they match, its a draw
        else if win conditions, you win
        else if lose conditions, you lose
        else invalid input
    */
function playGame(myPick = prompt('Rock, Paper, or Scissors?').toLowerCase()) {
    let cpuPick = computerPlay();
    //Draw condition
    if (myPick == cpuPick) {
        return `You chose ${myPick}. They chose ${cpuPick}. Draw!`
    }
    //Win condition
    else if (myPick == 'rock' && cpuPick == 'scissors' || 
        myPick == 'scissors' && cpuPick == 'paper' || 
        myPick == 'paper' && cpuPick == 'rock') {
            return (myPick + ' beats ' + cpuPick + '! Winner!')
    }
    //Lose condition
    else if (myPick == 'rock' && cpuPick == 'paper' || 
        myPick == 'paper' && cpuPick == 'scissors' || 
        myPick == 'scissors' && cpuPick == 'rock'){
            return (myPick + ' does not beat ' + cpuPick + '. You lose.')
    }
    //Invalid input
    else {
        return `What the hell is ${myPick}?!`
    }
}

for (let i = 0; i < 5; i++){
    console.log(playGame(computerPlay()))
}
