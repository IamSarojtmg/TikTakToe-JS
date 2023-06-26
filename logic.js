// const gameBoard = {
//     gameBoard: [],

//     players: function (icon) {
//         return {
//             icon
//         }
//     }
// }

// const one = gameBoard.players('x')
// const two = gameBoard.players('O')




























const grids = document.querySelectorAll('.grid')


let count = 0;

let xIndex = [];
let oIndex = [];

grids.forEach((grids, index) => {
    grids.addEventListener('click', () => {
        count++;

        if (count % 2 === 0) {
            grids.textContent = 'O';
            grids.style.fontSize = '90px'
            grids.style.pointerEvents = 'none' // stops the dive from chaning the player.
            oIndex.push(index)
        } else {
            grids.textContent = 'X'
            grids.style.fontSize = '90px'
            grids.style.pointerEvents = 'none'
            xIndex.push(index)
        }

        const xSort = xIndex.sort((a, b) => a - b)
        const oSort = oIndex.sort((a, b) => a - b)

        if (xSort[0] === 0 && xSort[1] === 1 && xSort[2] === 2
            ||
            xSort[0] === 3 && xSort[1] === 4 && xSort[2] === 5
            ||
            xSort[0] === 6 && xSort[1] === 7 && xSort[2] === 8
            ||
            xSort[0] === 0 && xSort[1] === 3 && xSort[2] === 6
            ||
            xSort[0] === 1 && xSort[1] === 4 && xSort[2] === 7
            ||
            xSort[0] === 2 && xSort[1] === 5 && xSort[2] === 8
            ||
            xSort[0] === 0 && xSort[1] === 4 && xSort[2] === 8
            ||
            xSort[0] === 2 && xSort[1] === 4 && xSort[2] === 6
        ) {
            console.log('X wins');
        } else if (oSort[0] === 0 && oSort[1] === 1 && oSort[2] === 2
            ||
            oSort[0] === 3 && oSort[1] === 4 && oSort[2] === 5
            ||
            oSort[0] === 6 && oSort[1] === 7 && oSort[2] === 8
            ||
            oSort[0] === 0 && oSort[1] === 3 && oSort[2] === 6
            ||
            oSort[0] === 1 && oSort[1] === 4 && oSort[2] === 7
            ||
            oSort[0] === 2 && oSort[1] === 5 && oSort[2] === 8
            ||
            oSort[0] === 0 && oSort[1] === 4 && oSort[2] === 8
            ||
            oSort[0] === 2 && oSort[1] === 4 && oSort[2] === 6
        ) {
            console.log('O wins');
        } else if (xSort.length === 5 || oSort.length === 5 ){
            console.log('draw');
        }

    })
})


/* Disable the game and create a message with the result of win and draw  */
















































/* Come back here after you have created the logic of the game flow */


// const x = document.querySelector('#x')

// const o = document.querySelector('#o')

// x.addEventListener('click', (e) => {
//     const xIcon = document.createElement('p')
//     xIcon.textContent = 'X'
//     console.log(xIcon);
//     //no need for if statement - this runs first.
// })

// o.addEventListener('click', () => {
//     const oIcon = document.createElement('p')
//     oIcon.textContent = 'O'
//     console.log(oIcon);
//     // You might need to create a if statement when the player chooses O.
// })






























































































































































































/* Restart button */