// Grid dimensions
const gridWidth = 32;
const gridHeight = 32;

// Fill the bottom 150 blocks of the screen with white
for (let y = gridHeight - 5; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
        // Assuming there's a function to set the color of a grid cell
        setGridCellColor(x, y, 'white');
    }
}


const ele_score = document.getElementById("score_value");
ele_score.textContent = parseInt(ele_score.textContent) + score;

// End the game by causing a collision
snake.push({ x: snake[0].x, y: snake[0].y }); // Simulate a self-collision
