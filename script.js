let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore")
const computerScore_span = document.getElementById("computerScore")

const button = document.querySelector("button")

const playerRock_i = document.getElementById("player-rock")
const playerPaper_i = document.getElementById("player-paper")
const playerScissors_i = document.getElementById("player-scissors")

const computerRock_i = document.getElementById("comp-r")
const computerPaper_i = document.getElementById("comp-p")
const computerScissors_i = document.getElementById("comp-s")


let computerChoice = ""
let playerChoice = ""


function game(){
    let result = "draw"
if(playerChoice === "player-scissors" && computerChoice === "comp-p") result = 'won'
if(playerChoice === "player-paper" && computerChoice === "comp-r") result = 'won'
if(playerChoice === "player-rock" && computerChoice === "comp-s") result = 'won'

if(playerChoice === "player-paper" && computerChoice === "comp-s") result = 'lost'
if(playerChoice === "player-rock" && computerChoice === "comp-p") result = 'lost'
if(playerChoice === "player-scissors" && computerChoice === "comp-r") result = 'lost'
return result
}





// Zaidejo pasirinkimas
function x(playerChoice) {
    
    console.log('Mano pasirinkimas:  ' + playerChoice) 
    

}

function main(){
playerRock_i.addEventListener("click", function(){
   x("player-rock")
})

playerPaper_i.addEventListener("click", function(){
   x("player-paper")
})

playerScissors_i.addEventListener("click", function(){
   x("player-scissors")
})
}

main()


// Kompiuterio pasirinkimas
function getComputerChoice() {
    const compSelect = ["comp-r", "comp-p", "comp-s"]
   const randomNumber = Math.floor(Math.random() * 3)
   return compSelect[randomNumber]

}
console.log(getComputerChoice())

button.onclick =() =>{
    computerChoice = getComputerChoice()
    const result = game()
    console.log(result)
}

    



