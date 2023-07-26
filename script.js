/*
  Rock Paper Scissors 🚀🔥
*/
const Totalscore = { computerScore: 0, playerScore: 0 }
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let data = ['Rock', 'Paper', 'Scissors']
  let randomdata = Math.floor(Math.random() * 3)
  return data[randomdata]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1      
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }
  else {
    score = -1
  }
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const resultdiv = document.getElementById("result")
  const handsdiv = document.getElementById("hands")
  const playerscorediv = document.getElementById("player-score")
  if (score == -1) {
    resultdiv.innerText = "You lost!"
  }
  else if (score == 0) {
    resultdiv.innerText = "it's a tie!"
  }
  else {
    resultdiv.innerText = "You won!!!!!"
  }
  handsdiv.innerText = `🤵${playerChoice} vs 🤖${computerChoice}`
  playerscorediv.innerText = `your score:${Totalscore['playerScore']}`
}

function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  const ComputerChoice = getComputerChoice()
  console.log({ ComputerChoice })
  const score = getResult(playerChoice, ComputerChoice)
  Totalscore['playerScore'] += score
  console.log({ score })
  console.log(Totalscore)
  showResult(score, playerChoice, ComputerChoice)
}



function playGame() {

  let button = document.querySelectorAll(".rpsButton")

  button.forEach(button => {
    button.onclick = () => onClickRPS(button.value)

  })

}
const endgamebutton = document.getElementById("endGameButton")
endgamebutton.onclick = () => endGame(Totalscore)

function endGame() {
  Totalscore['playerScore'] = 0
  Totalscore['computerScore'] = 0
  const resultdiv = document.getElementById("result")
  const handsdiv = document.getElementById("hands")
  const playerscorediv = document.getElementById("player-score")

  resultdiv.innerText = ""
  handsdiv.innerText = ""
  playerscorediv.innerText = ""

}

playGame()