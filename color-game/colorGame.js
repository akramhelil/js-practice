// alert('connected')
let numSquars = 6
let colors = []
let pickedColor;

let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1')
let reset = document.querySelector('#reset')
let modeButtons = document.querySelectorAll('.mode')

// Setup the game when the page loaded
init()

function init() {
    // modeButtons event listeners 
    setupModeButtons()
    setUpSquares()
    resetFun()
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove('selected')
            modeButtons[1].classList.remove('selected')
            this.classList.add('selected')
            this.textContent === 'Easy' ? numSquars = 3 : numSquars = 6
            // call the reset funtion after update the numSquares
            resetFun()
        })
    }
}

function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add initial colors to the scquares
        squares[i].style.backgroundColor = colors[i]
        // add click listeners
        squares[i].addEventListener('click', function () {
            // clicked color 
            let clickedColor = this.style.backgroundColor
            // compare colors
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct! You Won!' 
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor
                reset.textContent = 'Play Again?'
            } else {
                this.style.backgroundColor = '#232323'
                messageDisplay.textContent = 'Try Again'
            }
        })
    }
}

function resetFun() {
     // genrate all new colors 
     colors = generateRandomColors(numSquars)
     // picka a new coclor from array
     pickedColor = pickColor()
     // change color display to match picked color
     colorDisplay.textContent = pickedColor
     // change the color of the square
    for (var i = 0; i < squares.length; i++) {
         if (colors[i]) {
             squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        }else {
            squares[i].style.display = 'none'
        }
     }
     h1.style.backgroundColor = "steelblue"
     messageDisplay.textContent = ''
     reset.textContent = "new colors" 
}



reset.addEventListener('click', ev => {
    resetFun()
})


colorDisplay.textContent = pickedColor



function changeColors(color) {
    // loop throguh all the squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match with the correct color
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    // make an array 
    let arr = []
    // repeat until the num amount
    for (let i = 0; i < num; i++) {
        // add num randon colors to array 
        arr.push(randomColor())
    }
    // return that array 

    return arr
}

function randomColor() {
    // make a random color 
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
   return  "rgb("+ r + ", " + g + ", " + b +")"
}