/*const startBtn = document.querySelector('.start')

startBtn.addEventListener('click', function () {
    eleGrid.classList.toggle('invisible')
})
*/

const eleGrid = document.querySelector('.grid')

for (let i = 1; i <= 100; i++) {
    eleGrid.innerHTML += `<div class="cell">${i}</div>`
}


const listCell = document.querySelectorAll('.cell')

for (let i = 0; i < listCell.length; i++) {
    const cell = listCell[i];
    cell.addEventListener('click', colorCell)
}


function colorCell() {
    this.classList.toggle('clicked')
}

/*function invisible() {
    eleGrid.classList.toggle('invisible')
}*/
