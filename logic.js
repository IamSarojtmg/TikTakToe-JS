

/* 
You’re going to store the gameboard as an array inside of a Gameboard object, so 
start there! Your players are also going to be stored in objects, and you’re probably 
going to want an object to control the flow of the game itself. 

*/
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











const gameBoard = {
    gameBoard: [],

}




/* crete a function that will tell the dom to add a mark when there is a click event 
in gameboard
User cannot click on already selected box(disable the box?)
*/

function game() {
    const x = document.createElement('p')
    const o = document.createElement('p')
    x.textContent = 'X'
    o.textContent = 'O'
    
    // gameBoard.gameBoard.push() 
    
    const gameGrids = document.querySelectorAll('.cont')

    gameGrids.forEach(grids => {

        grids.addEventListener('click', e =>{
            console.log(e);
        })
    })


}

game()

// You have created the grids using fro each. try to add a x or o on it.


















































/* Come back here after you have created the logic of the game flow */


const x = document.querySelector('#x')

const o = document.querySelector('#o')

x.addEventListener('click', () => {
    const xIcon = document.createElement('p')
    xIcon.textContent = 'X'
    console.log(xIcon);
    // create a function and paste it here.
})

o.addEventListener('click', () => {
    const oIcon = document.createElement('p')
    oIcon.textContent = 'O'
    console.log(oIcon);
    // create a function and paste it here.  
})



























































































































































































/* a logic that checks if the game has been won, draw or lost*/


/* Restart button */