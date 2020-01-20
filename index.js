const plays = document.querySelectorAll('.row')
const startButton = document.querySelector('.button-start');
const restartButton = document.querySelector('.button-restart');
var grid = ['', '', '', '', '', '', '', '', ''];
var winstate = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 3, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
]
var lastBall = undefined;
var started = false
var numberOfClicks = 0;

// makes first all to empty when window finishs loading 
window.addEventListener('load', () => {
    plays.forEach(button => {
        button.textContent = '';
    })
    document.querySelector('.message').textContent = 'Playing...';
    // document.querySelector('.message').textContent = '';
})


// we add event listner for each element of the playing box with click event 
plays.forEach((button, index) => {
        button.addEventListener('click', () => {
            document.querySelector('.message').textContent = 'Playing...';
            // console.log(index)
            // console.log(button.textContent.toString() + ' ' + last);
            // document.querySelector('.message').textContent = '';
            if (button.textContent === '' && lastBall === 'O') {
                button.textContent = 'X';
                lastBall = 'X';
            } else if (button.textContent === '' && lastBall === 'X') {
                button.textContent = 'O';
                lastBall = 'O';
            } else if (lastBall == undefined) {
                button.textContent = 'O';
                lastBall = 'O';
            }
            numberOfClicks++;
            grid[index] = button.textContent;
            if (lastBall === 'X') {
                var last = 'X';
                var wincase = false;
                if (grid[1 - 1] === last && grid[2 - 1] === last && grid[3 - 1] === last) {
                    wincase = true;
                } else if (grid[4 - 1] === last && grid[5 - 1] === last && grid[6 - 1] === last) {
                    wincase = true;
                } else if (grid[7 - 1] === last && grid[8 - 1] === last && grid[9 - 1] === last) {
                    wincase = true;
                } else if (grid[1 - 1] === last && grid[4 - 1] === last && grid[7 - 1] === last) {
                    wincase = true;
                } else if (grid[2 - 1] === last && grid[5 - 1] === last && grid[8 - 1] === last) {
                    wincase = true;
                } else if (grid[3 - 1] === last && grid[6 - 1] === last && grid[9 - 1] === last) {
                    wincase = true;
                } else if (grid[1 - 1] === last && grid[5 - 1] === last && grid[9 - 1] === last) {
                    wincase = true;
                } else if (grid[3 - 1] === last && grid[5 - 1] === last && grid[7 - 1] === last) {
                    console.log("hereee")
                    wincase = true;
                }

                // if anyone wins 
                if (wincase) {
                    console.log('Player ' + last + ' wins!')
                    document.querySelector('.message').textContent = 'Player ' + last + ' wins!';
                    numberOfClicks = 0;
                    plays.forEach(button => {
                        button.textContent = '';
                    })
                    grid = [];
                } else if (numberOfClicks % 9 === 0) {
                    console.log('Stales')
                    plays.forEach(button => {
                        button.textContent = '';
                    })
                    grid = [];
                }
            }
            if (lastBall === 'O') {
                var last = 'O';
                var wincase = false;
                if (grid[1 - 1] === last && grid[2 - 1] === last && grid[3 - 1] === last) {
                    wincase = true;
                } else if (grid[4 - 1] === last && grid[5 - 1] === last && grid[6 - 1] === last) {
                    wincase = true;
                } else if (grid[7 - 1] === last && grid[8 - 1] === last && grid[9 - 1] === last) {
                    wincase = true;
                } else if (grid[1 - 1] === last && grid[4 - 1] === last && grid[7 - 1] === last) {
                    wincase = true;
                } else if (grid[2 - 1] === last && grid[5 - 1] === last && grid[8 - 1] === last) {
                    wincase = true;
                } else if (grid[3 - 1] === last && grid[6 - 1] === last && grid[9 - 1] === last) {
                    wincase = true;
                } else if (grid[1 - 1] === last && grid[5 - 1] === last && grid[9 - 1] === last) {
                    wincase = true;
                } else if (grid[3 - 1] === last && grid[5 - 1] === last && grid[7 - 1] === last) {
                    wincase = true;
                }
                // if anyone wins 
                if (wincase) {
                    document.querySelector('.message').textContent = 'Player ' + last + ' wins!';
                    plays.forEach(button => {
                        button.textContent = '';
                    })
                    grid = [];
                } else if (numberOfClicks % 9 === 0) {
                    plays.forEach(button => {
                        button.textContent = '';
                        document.querySelector('.message').textContent = "Tie";
                    })
                    grid = [];
                }
            }
            if (!started) { started = true; }
        })

    })
    // add event listner to start button
startButton.addEventListener('click', () => {
    if (started) {

        if (confirm("Are You Sure to start again?")) {
            plays.forEach(button => {
                button.textContent = '';
            })
            grid = [];
        }
    } else {
        plays.forEach(button => {
            button.textContent = '';
        })
        grid = [];
    }
    // document.querySelector('.message').textContent = '';

})