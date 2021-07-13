const score = document.getElementById('score')
const rolls = document.getElementById('rolls')
const wins = document.getElementById('wins')

const scoreP2 = document.getElementById('scoreP2')
const rollsP2 = document.getElementById('rollsP2')
const winsP2 = document.getElementById('winsP2')

const diceImage = document.getElementById('diceImage')

const toggleP2 = document.getElementsByClassName('hidden')[0]

const rollDice = document.getElementById('rollDice')

const addP2 = document.getElementById('addP2')

let currentScore = 0
let currentRolls = 0
let currentWins = 0

let currentScoreP2 = 0
let currentRollsP2 = 0
let currentWinsP2 = 0

let p2Active = false;

let currentPlayer = true

const updateStats = () => {
    score.textContent = `Score: ${currentScore}`
    rolls.textContent = `Rolls: ${currentRolls}`
    wins.textContent = `Wins: ${currentWins}`

    scoreP2.textContent = `Score: ${currentScoreP2}`
    rollsP2.textContent = `Rolls: ${currentRollsP2}`
    winsP2.textContent = `Wins: ${currentWinsP2}`
}

rollDice.addEventListener('click', () => {
    let randomNumber = Math.ceil(Math.random() * 6)
    diceImage.src = `./diceImages/dice${randomNumber}.png`

    if(currentPlayer){
        if(randomNumber == 1){
            currentScore = 0
        }else{
            currentScore += randomNumber
        }
    
        if(currentScore >= 21){
            currentWins++
            currentScore = 0
            currentRolls = 0
        }
        currentRolls++
    }else{
        if(randomNumber == 1){
            currentScoreP2 = 0
        }else{
            currentScoreP2 += randomNumber
        }
    
        if(currentScoreP2 >= 21){
            currentWinsP2++
            currentScoreP2 = 0
            currentRollsP2 = 0
        }
        currentRollsP2++
    }

    if(p2Active){
        currentPlayer = !currentPlayer
    }

    updateStats()
})

addP2.addEventListener('click', () => {
    p2Active = !p2Active
    
    if(p2Active){
        toggleP2.style.display = 'flex'
    }else{
        toggleP2.style.display = 'none'
        currentPlayer = true;
    }

    currentScore = 0
    currentRolls = 0
    currentWins = 0

    currentScoreP2 = 0
    currentRollsP2 = 0
    currentWinsP2 = 0
    updateStats()
})