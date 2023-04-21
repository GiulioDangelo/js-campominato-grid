const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", function () {
    
    const eleGrid = document.querySelector(".grid");
    const GridWidth = eleGrid.clientWidth
    console.log(GridWidth)
    
	const level = document.querySelector("#level").value;
	if (level == "easy") {
		cellWidth = GridWidth / 7;

	} else if (level == "mid") {
		cellWidth = GridWidth / 8;

	} else if (level == "hard") {
		cellWidth = GridWidth / 10;
	}

	eleGrid.innerHTML = "";
	for (let i = 1; i <= cellWidth; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
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
