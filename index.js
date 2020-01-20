const plays = document.querySelectorAll('.row')
const startButton = document.querySelector('.button-start');
const restartButton = document.querySelector('.button-restart');
var grid = [];
var last = undefined;
var started = false
plays.forEach(button => {
    button.textContent = '';
})
plays.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(index)
        console.log(button.textContent.toString() + ' ' + last);
        if (button.textContent === '' && last === 'O') {
            button.textContent = 'X';
            last = 'X';
        } else if (button.textContent === '' && last === 'X') {
            button.textContent = 'O';
            last = 'O';
        } else if (last == undefined) {
            button.textContent = 'O';
            last = 'O';
        }
        grid[index] = button.textContent;
        console.log(grid)
        if (!started) { started = true; }
    })

})

startButton.addEventListener('click', () => {
    plays.forEach(button => {
        button.textContent = '';
    })
})