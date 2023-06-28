const player = (function () {
    return {
        icon: function (icon) {
            return { icon }
        }
    }
}
)()

const one = player.icon('X')
const two = player.icon('O')

const grids = document.querySelectorAll('.grid')
const winnerText = document.querySelector('.result')

let count = 0;
let win = true;

let xIndex = [];
let oIndex = [];

const newX = []
const newO = []

const winLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

grids.forEach((grids, index) => {
    grids.addEventListener('click', () => {
        count++;

        if (count % 2 === 0) {
            grids.textContent = two.icon
            grids.style.fontSize = '90px'
            grids.style.pointerEvents = 'none' // stops the dive from chaning the player.
            oIndex.push(index)
            if (winnerText.textContent === 'X Won' || winnerText.textContent === 'O Won') {
                grids.textContent = ''
                xIndex = [];
                oIndex = []
            }
        } else {
            grids.textContent = one.icon
            grids.style.fontSize = '90px'
            grids.style.pointerEvents = 'none'
            xIndex.push(index)

            if (winnerText.textContent === 'X Won' || winnerText.textContent === 'O Won') {
                grids.textContent = ''
                xIndex = [];
                oIndex = []
            }
        }

        const xSort = xIndex.sort((a, b) => a - b)
        const oSort = oIndex.sort((a, b) => a - b)


        for (let i = 0; i < winLogic.length; i++) {
            const element = winLogic[i];

            const xFilter = xSort.filter(arr => element.includes(arr))
            const oFilter = oSort.filter(arr => element.includes(arr))

            if (xFilter.length === 3) {
                newX.push(xFilter[0], xFilter[1], xFilter[2])
            } else if (oFilter.length === 3) {
                newO.push(oFilter[0], oFilter[1], oFilter[2])
            }

        }

        if (newX[0] === 0 && newX[1] === 1 && newX[2] === 2
            ||
            newX[0] === 3 && newX[1] === 4 && newX[2] === 5
            ||
            newX[0] === 6 && newX[1] === 7 && newX[2] === 8
            ||
            newX[0] === 0 && newX[1] === 3 && newX[2] === 6
            ||
            newX[0] === 1 && newX[1] === 4 && newX[2] === 7
            ||
            newX[0] === 2 && newX[1] === 5 && newX[2] === 8
            ||
            newX[0] === 0 && newX[1] === 4 && newX[2] === 8
            ||
            newX[0] === 2 && newX[1] === 4 && newX[2] === 6
        ) {
            winnerText.textContent = 'X Won'
        }

        else if (newO[0] === 0 && newO[1] === 1 && newO[2] === 2
            ||
            newO[0] === 3 && newO[1] === 4 && newO[2] === 5
            ||
            newO[0] === 6 && newO[1] === 7 && newO[2] === 8
            ||
            newO[0] === 0 && newO[1] === 3 && newO[2] === 6
            ||
            newO[0] === 1 && newO[1] === 4 && newO[2] === 7
            ||
            newO[0] === 2 && newO[1] === 5 && newO[2] === 8
            ||
            newO[0] === 0 && newO[1] === 4 && newO[2] === 8
            ||
            newO[0] === 2 && newO[1] === 4 && newO[2] === 6
        ) {
            winnerText.textContent = 'O Won'
        }

        else if (xSort.length === 5 || oSort.length === 5) {
            console.log('draw');
        }

    })
})