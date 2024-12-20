const ele_score = document.getElementById("score_value");
ele_score.textContent = parseInt(ele_score.textContent) + 120;

(function () {
    const canvas = document.getElementById('snake');
    window.currentX = 0; // Expose to global scope
    window.currentY = 15; // Expose to global scope
    let direction = 'right';

    const simulateKeyPress = (keyCode) => {
        const event = new KeyboardEvent('keydown', { keyCode: keyCode, which: keyCode });
        canvas.dispatchEvent(event);
    };

    const moveSnake = () => {
        if (direction === 'down') {
            if (currentY < 31) {
                currentY++;
            } else {
                currentY = 0;
            }
            simulateKeyPress(40); // Down arrow key
        } else if (direction === 'right') {
            if (currentX < 31) {
                currentX++;
            } else {
                currentX = 0;
            }
            simulateKeyPress(39); // Right arrow key
        } else if (direction === 'up') {
            if (currentY > 0) {
                currentY--;
            } else {
                currentY = 31;
            }
            simulateKeyPress(38); // Up arrow key
        } else if (direction === 'left') {
            if (currentX > 0) {
                currentX--;
            } else {
                currentX = 31;
            }
            simulateKeyPress(37); // Left arrow key
        }
    };

    setInterval(moveSnake, 100);
})();