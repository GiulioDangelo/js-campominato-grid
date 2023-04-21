const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", function () {
    const eleGrid = document.querySelector(".grid");
    
	eleGrid.innerHTML = "";
	for (let i = 1; i <= 100; i++) {
        eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}
    
	const listCell = document.querySelectorAll(".cell");
    
	for (let i = 0; i < listCell.length; i++) {
        const cell = listCell[i];
		cell.addEventListener("click", colorCell);
	}
    

    const level = document.querySelector('#level').value
    console.log(level)
    
});


function colorCell() {
    this.classList.toggle("clicked");
}

