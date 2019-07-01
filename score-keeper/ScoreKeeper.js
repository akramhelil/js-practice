let player1 = document.querySelector('#p1')
let player2 = document.querySelector('#p2')
let reset = document.querySelector('#reset')
let num = document.querySelector('input')
let winningScoreDisplay = document.querySelector('p span')

let p1Score = 0
let p2Score = 0

let p1Display = document.querySelector('#p1s')
let p2Display = document.querySelector('#p2s')

let gameOver = false
let winningScore = 5

player1.addEventListener('click', ev => {
    if (!gameOver) {
        p1Score++
        if (p1Score === winningScore) {
           p1Display.classList.add("winner")
           gameOver = true
       } 
        p1Display.textContent = p1Score
    }
})


player2.addEventListener('click', ev => {
    if (!gameOver) {
        p2Score++
        if (p2Score === winningScore) {
            p2Display.classList.add("winner")
           gameOver = true
       } 
        p2Display.textContent = p2Score
    }
})

reset.addEventListener('click', ev => {
   resetFun()
})

num.addEventListener('change', ev => {
    winningScoreDisplay.textContent = num.value
    winningScore = Number(num.value)
    resetFun()
})

function resetFun() {
    p1Score = 0 
    p2Score = 0
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
    gameOver = false
}


