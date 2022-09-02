const ROCK = 0
const PAPER = 1
const SCISSORS = 2

const TIE = 0
const WIN = 1
const LOST = 2

let score = 0

const resultText = document.getElementById('result')
const scoreText = document.getElementById('score')

const rockBTN = Array.from(document.getElementsByClassName('container-rock'))
const paperBTN = Array.from(document.getElementsByClassName('container-paper'))
const scissorBTN = Array.from(document.getElementsByClassName('container-scissors'))

const rockMachineBTN = Array.from(document.getElementsByClassName('container-rock-machine'))
const paperMachineBTN = Array.from(document.getElementsByClassName('container-paper-machine'))
const scissorMachineBTN = Array.from(document.getElementsByClassName('container-scissors-machine'))

const playAgainButton = document.getElementById('play-again-button')

const containerButtons = document.getElementById('container-buttons')
const selectedButton = document.getElementById('container-button')

const machineOptionDiv = document.getElementById('machine-option')

const openRules = document.getElementById("open-rules")
const rules = document.getElementById("rules-container")
const closeRules = document.getElementById("close-rules")

openRules.addEventListener("click", () => {
    rules.classList.add("show")
})

closeRules.addEventListener("click", () => {
    rules.classList.remove("show")
})

rockBTN.forEach((e) => {
    e.addEventListener("click", () => {
        selectButtonUser(ROCK, e)
    })
})

paperBTN.forEach((e) => {
    e.addEventListener("click", () => {
        selectButtonUser(PAPER, e)
    })
})

scissorBTN.forEach((e) => {
    e.addEventListener("click", () => {
        selectButtonUser(SCISSORS, e)
    })
})

function selectButtonUser(userOption, container) {
    containerButtons.classList.add('hide')
    selectedButton.classList.remove('hide')
    let clone = container.cloneNode(true)
    selectedButton.appendChild(clone);

    switch (userOption) {
        case ROCK:
            selectedButton.classList.add('animation-rock')
            break;
        case PAPER:
            selectedButton.classList.add('animation-paper')
            break;
        case SCISSORS:
            selectedButton.classList.add('animation-scissors')
            break;
    }

    play(userOption, container)
}

function play(userOption, container) {
    const machineOption = Math.floor(Math.random() * 3)

    resultText.innerHTML = "The house is choosing..."

    setTimeout(() => {
        showMachineOption(machineOption)
        const result = calculateResult(userOption, machineOption)

        switch (result) {
            case TIE:
                resultText.innerHTML = "TIE 😐"
                setScore(TIE)
                break;
            case WIN:
                resultText.innerHTML = "You Win! 🥳"
                setScore(WIN)
                break;
            case LOST:
                resultText.innerHTML = "You Lost! 😔"
                setScore(LOST)
                break;
        }

        playAgainButton.classList.remove('hide')
        
    }, 2000);

}

function setScore(result) {
    switch (result) {
        case WIN:
            score +=1
            break;
        case LOST:
            score -=1
            break;
        default:
            break;
    }
    if(score < 0) {
        score = 0
    }
    scoreText.innerHTML = score
}


function calculateResult(userOption, machineOption) {
    if(userOption === machineOption) {
        return TIE
    } else if(userOption === ROCK) {
        if(machineOption === PAPER){
            return LOST
        }
        if(machineOption === SCISSORS){
            return WIN
        }
    } else if(userOption === PAPER) {
        if(machineOption === SCISSORS){
            return LOST
        }
        if(machineOption === ROCK){
            return WIN
        }
    } else if(userOption === SCISSORS) {
        if(machineOption === ROCK){
            return LOST
        }
        if(machineOption === PAPER){
            return WIN
        }
    }
}

function showMachineOption(machineOption) {
    machineOptionDiv.classList.remove('hide')
    
    switch (machineOption) {
        case ROCK:
            rockBTN.forEach((e) => {
                e.classList.remove('hide')
            })
            break;
        case PAPER:
            paperBTN.forEach((e) => {
                e.classList.remove('hide')
            })
            break;
        case SCISSORS:
            scissorMachineBTN.forEach((e) => {
                e.classList.remove('hide')
            })
            break;
    }
}

function playAgain() {
    selectedButton.classList.add('hide')

    selectedButton.classList.remove('animation-rock')
    selectedButton.classList.remove('animation-paper')
    selectedButton.classList.remove('animation-scissors')

    selectedButton.innerHTML = ""

    containerButtons.classList.remove('hide')

    resultText.innerHTML = "Choose an option!"

    playAgainButton.classList.add('hide')



    machineOptionDiv.classList.add('hide')

    rockMachineBTN.forEach((e) => {
        e.classList.remove('hide')
        e.classList.add('hide')
    })

    paperMachineBTN.forEach((e) => {
        e.classList.remove('hide')
        e.classList.add('hide')
    })

    scissorMachineBTN.forEach((e) => {
        e.classList.remove('hide')
        e.classList.add('hide')
    })
}