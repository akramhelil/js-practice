// alert('connected')
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll('.square')
let colorDisplay = document.getElementById('colorDisplay')
let pickedColor = colors[3]

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
    // add initial colors to the scquares
    squares[i].style.backgroundColor = colors[i]

    // add click listeners
    squares[i].addEventListener('click', function () {
        if (this.style.backgroundColor === pickedColor) {
            alert("You Won!")
        } else {
            this.style.backgroundColor = '#232323'
        }
    })
}