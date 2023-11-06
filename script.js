// 16x16 = 256
const NUMBER_OF_SQUARES = 256;

const GRID_CONTAINER = document.getElementById("grid-container");

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
  const SQUARE = document.createElement("div");
  GRID_CONTAINER.appendChild(SQUARE);

  let color = generateRandomColor();

  console.log(color);

  SQUARE.addEventListener("mouseover", (e) => {
    e.currentTarget.style.background = `#${color}`;
    e.currentTarget.style.border = `#${color}`;
  });
}

function generateRandomColor() {
  let rgb = Math.floor(Math.random() * 999999);

  return rgb;
}
