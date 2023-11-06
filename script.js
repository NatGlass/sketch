// 16x16 = 256
const NUMBER_OF_SQUARES = 256;

const GRID_CONTAINER = document.getElementById("grid-container");

const SQUARE = document.createElement("div");

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
  GRID_CONTAINER.appendChild(SQUARE);
}
