// alert('connected')
let colors = generateRandomColors(6)



let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let messageDisplay = document.querySelector('#message')
let h1 = document.querySelector('h1')

let pickedColor = pickColor()


colorDisplay.textContent = pickedColor

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
        } else {
            this.style.backgroundColor = '#232323'
            messageDisplay.textContent = 'Try Again'
        }
    })
}

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