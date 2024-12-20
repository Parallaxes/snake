
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1"><!-- Begin Jekyll SEO tag v2.8.0 -->
<title>Snake | Coding Journey</title>
<meta name="generator" content="Jekyll v3.10.0" />
<meta property="og:title" content="Snake" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="Class of 2025" />
<meta property="og:description" content="Class of 2025" />
<meta property="og:site_name" content="Coding Journey" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="Snake" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebPage","description":"Class of 2025","headline":"Snake","url":"/john_2025/snake/"}</script>
<!-- End Jekyll SEO tag -->
<link rel="stylesheet" href="/john_2025/assets/css/style.css"><link type="application/atom+xml" rel="alternate" href="/john_2025/feed.xml" title="Coding Journey" />

<!-- Include favicons --><link rel="shortcut icon" type="image/x-icon" href="/john_2025/images/favicon.ico"><!-- Include Primer CSS for styling -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/15.2.0/primer.css" integrity="sha512-xTz2ys4coGAOz8vuV1NcQBkgVmKhsSEtjbqyMJbBHRplFuvKIUo6xhLHpAyPt9mfR6twHJgn9OgVLuqOvjeBhg==" crossorigin="anonymous" />

<!-- Include Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />

<!-- Include Hypothesis annotations script if annotations are enabled --><!-- Include KaTeX and MathJax for rendering mathematical expressions if use_math is enabled -->


<script>
/**
 * Function to wrap images with a figure and caption if they have a title attribute.
 * This function is executed when the window loads.
 */
function wrap_img(fn) {
    // Check if the document is already loaded
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        // Select all images within elements with the class 'post'
        var elements = document.querySelectorAll(".post img");
        // Iterate over each image element
        Array.prototype.forEach.call(elements, function(el, i) {
            // Check if the image has a title attribute and is not an emoji
            if (el.getAttribute("title") && (el.className != "emoji")) {
                // Create a figcaption element for the caption
                const caption = document.createElement('figcaption');
                // Create a text node with the title attribute value
                var node = document.createTextNode(el.getAttribute("title"));
                // Append the text node to the figcaption element
                caption.appendChild(node);
                // Create a figure element to wrap the image and caption
                const wrapper = document.createElement('figure');
                // Add the 'image' class to the figure element
                wrapper.className = 'image';
                // Insert the figure element before the image
                el.parentNode.insertBefore(wrapper, el);
                // Remove the image from its original position
                el.parentNode.removeChild(el);
                // Append the image and caption to the figure element
                wrapper.appendChild(el);
                wrapper.appendChild(caption);
            }
        });
    } else {
        // If the document is not loaded, add an event listener to execute the function when it is
        document.addEventListener('DOMContentLoaded', fn);
    }
}
// Execute the wrap_img function when the window loads
window.onload = wrap_img;
</script>

<script>
/**
 * Function to add a link icon to anchor tags with the class 'anchor-link'.
 * This function is executed when the DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", function(){
    // Select all elements with the class 'anchor-link'
    var elem = document.querySelectorAll(".anchor-link");
    // Iterate over each element and set its inner HTML to a Font Awesome link icon
    elem.forEach(e => (e.innerHTML = '<i class="fas fa-link fa-xs"></i>'));
});
</script>
</head>
<body><header class="site-header">

  <div class="wrapper"><a class="site-title" rel="author" href="/john_2025/">Coding Journey</a><nav class="site-nav">
        <input type="checkbox" id="nav-trigger" class="nav-trigger" />
        <label for="nav-trigger">
          <span class="menu-icon">
            <svg viewBox="0 0 18 15" width="18px" height="15px">
              <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"/>
            </svg>
          </span>
        </label>

        <div class="trigger"><a class="page-link" href="/john_2025/ideas/">Ideas</a><a class="page-link" href="/john_2025/blogs/">Blogs</a><a class="page-link" href="/john_2025/search/">Search</a><a class="page-link" href="/john_2025/README4YML.html">Readme</a><a class="page-link" href="/john_2025/about/">About</a></div>
      </nav></div>
</header>
<main class="page-content" aria-label="Content">
    <div class="wrapper">
      <style>

    body{
    }
    .wrap{
        margin-left: auto;
        margin-right: auto;
    }

    canvas{
        display: none;
        border-style: solid;
        border-width: 10px;
        border-color: #FFFFFF;
    }
    canvas:focus{
        outline: none;
    }

    /* All screens style */
    #gameover p, #setting p, #menu p{
        font-size: 20px;
    }

    #gameover a, #setting a, #menu a{
        font-size: 30px;
        display: block;
    }

    #gameover a:hover, #setting a:hover, #menu a:hover{
        cursor: pointer;
    }

    #gameover a:hover::before, #setting a:hover::before, #menu a:hover::before{
        content: ">";
        margin-right: 10px;
    }

    #menu{
        display: block;
    }

    #gameover{
        display: none;
    }

    #setting{
        display: none;
    }

    #setting input{
        display:none;
    }

    #setting label{
        cursor: pointer;
    }

    #setting input:checked + label{
        background-color: #FFF;
        color: #000;
    }
</style>

<h2>Snake</h2>
<div class="container">
    <header class="pb-3 mb-4 border-bottom border-primary text-dark">
        <p class="fs-4">Score: <span id="score_value">0</span></p>
    </header>
    <div class="container bg-secondary" style="text-align:center;">
        <!-- Main Menu -->
        <div id="menu" class="py-4 text-light">
            <p>Welcome to Snake, press <span style="background-color: #FFFFFF; color: #000000">space</span> to begin</p>
            <a id="new_game" class="link-alert">new game</a>
            <a id="setting_menu" class="link-alert">settings</a>
        </div>
        <!-- Game Over -->
        <div id="gameover" class="py-4 text-light">
            <p>Game Over, press <span style="background-color: #FFFFFF; color: #000000">space</span> to try again</p>
            <a id="new_game1" class="link-alert">new game</a>
            <a id="setting_menu1" class="link-alert">settings</a>
        </div>
        <!-- Play Screen -->
        <canvas id="snake" class="wrap" width="320" height="320" tabindex="1"></canvas>
        <!-- Settings Screen -->
        <div id="setting" class="py-4 text-light">
            <p>Settings Screen, press <span style="background-color: #FFFFFF; color: #000000">space</span> to go back to playing</p>
            <a id="new_game2" class="link-alert">new game</a>
            <br />
            <p>Speed:
                <input id="speed1" type="radio" name="speed" value="120" checked="" />
                <label for="speed1">Slow</label>
                <input id="speed2" type="radio" name="speed" value="75" />
                <label for="speed2">Normal</label>
                <input id="speed3" type="radio" name="speed" value="35" />
                <label for="speed3">Fast</label>
            </p>
            <p>Wall:
                <input id="wallon" type="radio" name="wall" value="1" checked="" />
                <label for="wallon">On</label>
                <input id="walloff" type="radio" name="wall" value="0" />
                <label for="walloff">Off</label>
            </p>
        </div>
    </div>
</div>

<script>
    (function(){
        /* Attributes of Game */
        /////////////////////////////////////////////////////////////
        // Canvas & Context
        const canvas = document.getElementById("snake");
        const ctx = canvas.getContext("2d");
        // HTML Game IDs
        const SCREEN_SNAKE = 0;
        const screen_snake = document.getElementById("snake");
        const ele_score = document.getElementById("score_value");
        const speed_setting = document.getElementsByName("speed");
        const wall_setting = document.getElementsByName("wall");
        // HTML Screen IDs (div)
        const SCREEN_MENU = -1, SCREEN_GAME_OVER=1, SCREEN_SETTING=2;
        const screen_menu = document.getElementById("menu");
        const screen_game_over = document.getElementById("gameover");
        const screen_setting = document.getElementById("setting");
        // HTML Event IDs (a tags)
        const button_new_game = document.getElementById("new_game");
        const button_new_game1 = document.getElementById("new_game1");
        const button_new_game2 = document.getElementById("new_game2");
        const button_setting_menu = document.getElementById("setting_menu");
        const button_setting_menu1 = document.getElementById("setting_menu1");
        // Game Control
        const BLOCK = 10;   // size of block rendering
        let SCREEN = SCREEN_MENU;
        let snake;
        let snake_dir;
        let snake_next_dir;
        let snake_speed;
        let food = {x: 0, y: 0};
        let score;
        let wall;
        /* Display Control */
        /////////////////////////////////////////////////////////////
        // 0 for the game
        // 1 for the main menu
        // 2 for the settings screen
        // 3 for the game over screen
        let showScreen = function(screen_opt){
            SCREEN = screen_opt;
            switch(screen_opt){
                case SCREEN_SNAKE:
                    screen_snake.style.display = "block";
                    screen_menu.style.display = "none";
                    screen_setting.style.display = "none";
                    screen_game_over.style.display = "none";
                    break;
                case SCREEN_GAME_OVER:
                    screen_snake.style.display = "block";
                    screen_menu.style.display = "none";
                    screen_setting.style.display = "none";
                    screen_game_over.style.display = "block";
                    break;
                case SCREEN_SETTING:
                    screen_snake.style.display = "none";
                    screen_menu.style.display = "none";
                    screen_setting.style.display = "block";
                    screen_game_over.style.display = "none";
                    break;
            }
        }
        /* Actions and Events  */
        /////////////////////////////////////////////////////////////
        window.onload = function(){
            // HTML Events to Functions
            button_new_game.onclick = function(){newGame();};
            button_new_game1.onclick = function(){newGame();};
            button_new_game2.onclick = function(){newGame();};
            button_setting_menu.onclick = function(){showScreen(SCREEN_SETTING);};
            button_setting_menu1.onclick = function(){showScreen(SCREEN_SETTING);};
            // speed
            setSnakeSpeed(150);
            for(let i = 0; i < speed_setting.length; i++){
                speed_setting[i].addEventListener("click", function(){
                    for(let i = 0; i < speed_setting.length; i++){
                        if(speed_setting[i].checked){
                            setSnakeSpeed(speed_setting[i].value);
                        }
                    }
                });
            }
            // wall setting
            setWall(1);
            for(let i = 0; i < wall_setting.length; i++){
                wall_setting[i].addEventListener("click", function(){
                    for(let i = 0; i < wall_setting.length; i++){
                        if(wall_setting[i].checked){
                            setWall(wall_setting[i].value);
                        }
                    }
                });
            }
            // activate window events
            window.addEventListener("keydown", function(evt) {
                // spacebar detected
                if(evt.code === "Space" && SCREEN !== SCREEN_SNAKE)
                    newGame();
            }, true);
        }
        /* Snake is on the Go (Driver Function)  */
        /////////////////////////////////////////////////////////////
        let mainLoop = function(){
            let _x = snake[0].x;
            let _y = snake[0].y;
            snake_dir = snake_next_dir;   // read async event key
            // Direction 0 - Up, 1 - Right, 2 - Down, 3 - Left
            switch(snake_dir){
                case 0: _y--; break;
                case 1: _x++; break;
                case 2: _y++; break;
                case 3: _x--; break;
            }
            snake.pop(); // tail is removed
            snake.unshift({x: _x, y: _y}); // head is new in new position/orientation
            // Check if the snake's x position is 31 and y position is 31
            if (snake[0].x === 31 && snake[0].y === 31) {
                if (snake_dir === 1) {
                    simulateKeyPress(38, 0); // Up arrow key press immediately
                    simulateKeyPress(37, 50); // Left arrow key press after 100ms
                }
            } else if (snake[0].x === 0 && snake[0].y === 31) {
                simulateKeyPress(39, 0);
            }

            // Zigzag horizontally, moving up one level each time, but only travel to x = 1
            if (snake[0].x === 1 && snake_dir === 3 && snake[0].y !== 0) {
                simulateKeyPress(38, 0); // Up arrow key press immediately
                simulateKeyPress(39, 50); // Right arrow key press after 100ms
            } else if (snake[0].x === 31 && snake_dir === 1 && snake[0].y !== 0) {
                simulateKeyPress(38, 0); // Up arrow key press immediately
                simulateKeyPress(37, 50); // Left arrow key press after 100ms
            }

            // When reaching the top, continue to x = 0 and go down
            if (snake[0].y === 0 && snake_dir === 0) {
                if (snake[0].x !== 0) {
                    simulateKeyPress(37, 0); // Left arrow key press immediately
                }
            } else if (snake[0].y === 0 && snake[0].x === 0) {
                simulateKeyPress(40, 0);
            }
            // Wall Checker
            if(wall === 1){
                // Wall on, Game over test
                if (snake[0].x < 0 || snake[0].x === canvas.width / BLOCK || snake[0].y < 0 || snake[0].y === canvas.height / BLOCK){
                    showScreen(SCREEN_GAME_OVER);
                    return;
                }
            }else{
                // Wall Off, Circle around
                for(let i = 0, x = snake.length; i < x; i++){
                    if(snake[i].x < 0){
                        snake[i].x = snake[i].x + (canvas.width / BLOCK);
                    }
                    if(snake[i].x === canvas.width / BLOCK){
                        snake[i].x = snake[i].x - (canvas.width / BLOCK);
                    }
                    if(snake[i].y < 0){
                        snake[i].y = snake[i].y + (canvas.height / BLOCK);
                    }
                    if(snake[i].y === canvas.height / BLOCK){
                        snake[i].y = snake[i].y - (canvas.height / BLOCK);
                    }
                }
            }
            // Snake vs Snake checker
            for(let i = 1; i < snake.length; i++){
                // Game over test
                if (snake[0].x === snake[i].x && snake[0].y === snake[i].y){
                    showScreen(SCREEN_GAME_OVER);
                    return;
                }
            }
            // Snake eats food checker
            if(checkBlock(snake[0].x, snake[0].y, food.x, food.y)){
                snake[snake.length] = {x: snake[0].x, y: snake[0].y};
                altScore(++score);
                addFood();
                activeDot(food.x, food.y);
            }
            // Repaint canvas
            ctx.beginPath();
            ctx.fillStyle = "royalblue";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Paint snake
            for(let i = 0; i < snake.length; i++){
                activeDot(snake[i].x, snake[i].y);
            }
            // Paint food
            activeDot(food.x, food.y);
            // Debug
            //document.getElementById("debug").innerHTML = snake_dir + " " + snake_next_dir + " " + snake[0].x + " " + snake[0].y;
            // Recursive call after speed delay, déjà vu
            setTimeout(mainLoop, snake_speed);
        }
        /* New Game setup */
        /////////////////////////////////////////////////////////////
        let newGame = function(){
            // snake game screen
            showScreen(SCREEN_SNAKE);
            screen_snake.focus();
            // game score to zero
            score = 0;
            altScore(score);
            // initial snake
            snake = [];
            snake.push({x: 0, y: 3});
            snake_next_dir = 1;
            // food on canvas
            addFood();
            // activate canvas event
            canvas.onkeydown = function(evt) {
                changeDir(evt.keyCode);
            }
            mainLoop();
        }
        /* Key Inputs and Actions */
        /////////////////////////////////////////////////////////////
        let changeDir = function(key){
            // test key and switch direction
            switch(key) {
                case 37:    // left arrow
                    if (snake_dir !== 1)    // not right
                        snake_next_dir = 3; // then switch left
                    break;
                case 38:    // up arrow
                    if (snake_dir !== 2)    // not down
                        snake_next_dir = 0; // then switch up
                    break;
                case 39:    // right arrow
                    if (snake_dir !== 3)    // not left
                        snake_next_dir = 1; // then switch right
                    break;
                case 40:    // down arrow
                    if (snake_dir !== 0)    // not up
                        snake_next_dir = 2; // then switch down
                    break;
            }
        }

        const simulateKeyPress = (keyCode, delay = 0) => {
            console.log(`Simulating key press: ${keyCode} after ${delay}ms`);
            setTimeout(() => {
                const event = new KeyboardEvent('keydown', { keyCode: keyCode, which: keyCode });
                canvas.dispatchEvent(event);
            }, delay);
        };
        /* Dot for Food or Snake part */
        /////////////////////////////////////////////////////////////
        let activeDot = function(x, y){
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(x * BLOCK, y * BLOCK, BLOCK, BLOCK);
        }
        /* Random food placement */
        /////////////////////////////////////////////////////////////
        let addFood = function(){
            food.x = Math.floor(Math.random() * ((canvas.width / BLOCK) - 1));
            food.y = Math.floor(Math.random() * ((canvas.height / BLOCK) - 1));
            for(let i = 0; i < snake.length; i++){
                if(checkBlock(food.x, food.y, snake[i].x, snake[i].y)){
                    addFood();
                }
            }
        }
        /* Collision Detection */
        /////////////////////////////////////////////////////////////
        let checkBlock = function(x, y, _x, _y){
            return (x === _x && y === _y);
        }
        /* Update Score */
        /////////////////////////////////////////////////////////////
        let altScore = function(score_val){
            ele_score.innerHTML = String(score_val * 2);
        }
        /////////////////////////////////////////////////////////////
        // Change the snake speed...
        // 150 = slow
        // 100 = normal
        // 50 = fast
        let setSnakeSpeed = function(speed_value){
            snake_speed = speed_value;
        }
        /////////////////////////////////////////////////////////////
        let setWall = function(wall_value){
            wall = wall_value;
            if(wall === 0){screen_snake.style.borderColor = "#606060";}
            if(wall === 1){screen_snake.style.borderColor = "#FFFFFF";}
        }
    })();
</script>


    </div>
  </main><footer class="site-footer h-card">
    <data class="u-url" href="/john_2025/"></data>
  
    <div class="wrapper">
  
      <div class="social-links"><ul class="social-media-list"><li>
  <a rel="me" href="https://github.com/nighthawkcoders" target="_blank" title="github">
    <svg class="svg-icon grey">
      <use xlink:href="/john_2025/assets/minima-social-icons.svg#github"></use>
    </svg>
  </a>
</li>
<li>
  <a rel="me" href="https://x.com/NighthawkCoding/" target="_blank" title="x">
    <svg class="svg-icon grey">
      <use xlink:href="/john_2025/assets/minima-social-icons.svg#x"></use>
    </svg>
  </a>
</li>
<li>
  <a rel="me" href="https://www.youtube.com/@nighthawkcodingsociety2868" target="_blank" title="youtube">
    <svg class="svg-icon grey">
      <use xlink:href="/john_2025/assets/minima-social-icons.svg#youtube"></use>
    </svg>
  </a>
</li>
</ul>
</div>
  
    </div>
  
</footer></body>
</html>
