

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











// const gameBoard = {
//     gameBoard: [],

// }




/* crete a function that will tell the dom to add a mark when there is a click event 
in gameboard
User cannot click on already selected box(disable the box?)
*/

const grids = document.querySelectorAll('.grid')
const gridOne = document.querySelector('.gridOne')
const gridTwo = document.querySelector('.gridTwo')
const gridThree = document.querySelector('.gridThree')
const gridFour = document.querySelector('.gridFour')
const gridFive = document.querySelector('.gridFive')
const gridSix = document.querySelector('.gridSix')
const gridSeven = document.querySelector('.gridSeven')
const gridEight = document.querySelector('.gridEight')
const gridNine = document.querySelector('.gridNine')

grids.forEach((grids,index)=>{
    grids.addEventListener('click',()=>{
        if (index === 0) {
            gridOne.textContent = 'X'
        } else if (index === 1){
            gridTwo.textContent = 'X'
        }else if(index === 2){
            gridThree.textContent = 'X'
        }else if(index === 3){
            gridFour.textContent = 'X'
        }else if(index === 4){
            gridFive.textContent = 'X'
        }else if(index === 5){
            gridSix.textContent = 'X'
        }else if(index === 6){
            gridSeven.textContent = 'X'
        }else if(index === 7){
            gridEight.textContent = 'X'
        }else if(index === 8){
            gridNine.textContent = 'X'
        }
    })
})





















































/* Come back here after you have created the logic of the game flow */


const x = document.querySelector('#x')

const o = document.querySelector('#o')

x.addEventListener('click', (e) => {
    const xIcon = document.createElement('p')
    xIcon.textContent = 'X'
    console.log(xIcon);
    //no need for if statement - this runs first.
})

o.addEventListener('click', () => {
    const oIcon = document.createElement('p')
    oIcon.textContent = 'O'
    console.log(oIcon);
    // You might need to create a if statement when the player chooses O.
})



























































































































































































/* a logic that checks if the game has been won, draw or lost*/


/* Restart button */