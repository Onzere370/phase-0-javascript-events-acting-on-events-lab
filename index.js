// Your code here
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px","");
  const left = parseInt(leftNumbers,10)

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
const dodger = document.getElementById('dodger');

// Get the game field element
const game = document.getElementById('game');

// Set the width of the dodger and game field (assuming 40px width for dodger)
const dodgerWidth = 40;
const gamedWidth = game.offsetWidth;

// Function to check if dodger has reached the right edge of the game field
function hasReachedRightEdge() {
  const dodgerRightEdge = dodger.offsetLeft + dodgerWidth;
  const gameRightEdge = game.offsetLeft + gameWidth;
  return dodgerRightEdge >= gameRightEdge;
}

// Update the dodger's position
function updateDodgerPosition() {
  // Update dodger's position based on user input or game logic

  // Check if dodger has reached the right edge of the game field
  if (hasReachedRightEdge()) {
    // Prevent dodger from moving further to the right
    dodger.style.left = (gameWidth - dodgerWidth) + 'px';
  } else {
    // Update dodger's position based on user input or game logic
  }
}
