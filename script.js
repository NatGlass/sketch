// 16x16 = 256
const NUMBER_OF_SQUARES = 256;

const GRID_CONTAINER = document.getElementById("grid-container");

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
  const SQUARE = document.createElement("div");
  GRID_CONTAINER.appendChild(SQUARE);

  let color = generateRandomColor();

  console.log(color);

  SQUARE.addEventListener("mouseover", (e) => {
    e.currentTarget.style.background = `rgba(${color})`;
    e.currentTarget.style.border = `rgba(${color})`;
  });
}

function generateRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let alpha = Math.random();

  console.log(red, green, blue, alpha);

  let rgba = [red, green, blue, alpha];

  return rgba.join(",");
}
