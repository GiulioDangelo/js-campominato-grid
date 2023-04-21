const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", function () {
    
    const eleGrid = document.querySelector(".grid");
    const GridWidth = eleGrid.clientWidth
    console.log(GridWidth)
    let cellWidth = 
    
	eleGrid.innerHTML = "";
	for (let i = 1; i <= 100; i++) {

        eleGrid.innerHTML += `<div class="cell">${i}</div>`;

        const level = document.querySelector("#level").value;
        if (level == "easy") {
            cellWidth = GridWidth / 7 + 'px';
    
        } else if (level == "mid") {
            cellWidth = GridWidth / 8;
    
        } else if (level == "hard") {
            cellWidth = GridWidth / 10;
        }
	}

	const listCell = document.querySelectorAll(".cell");

	for (let i = 0; i < listCell.length; i++) {
		const cell = listCell[i];
		cell.addEventListener("click", colorCell);
	}
});





function colorCell() {
	this.classList.toggle("clicked");
}
