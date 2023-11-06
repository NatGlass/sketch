let numberOfSquares = 20;

const GRID_CONTAINER = document.getElementById("grid-container");
const RESIZE_CANVAS_BUTTON = document.getElementById("resize-btn");

GRID_CONTAINER.style.gridTemplateColumns = numberOfSquares;

for (let i = 0; i < numberOfSquares * 2; i++) {
  const SQUARE = document.createElement("div");
  GRID_CONTAINER.appendChild(SQUARE);

  let color = generateRandomColor();

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

function changeGridSize() {
  let userDefinedNumber = parseInt(window.prompt("Enter a grid size"));

  if (isNaN(userDefinedNumber)) {S
    alert("Input must be a number");
    return;
  }

  if (userDefinedNumber < 4) {
    alert("Grid cannot be smaller than 4x4");
    return;
  }

  if (userDefinedNumber > 100) {
    alert("Grid cannot be bigger than 100x100");
    return;
  }
  
  GRID_CONTAINER.style.gridTemplateColumns = `repeat(${userDefinedNumber}, auto`;
}

RESIZE_CANVAS_BUTTON.addEventListener("click", () => {
  changeGridSize();
});