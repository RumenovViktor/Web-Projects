(function () {
    function setScore(score) {
        var scoreHolder = document.getElementsByTagName('p')[0];
        scoreHolder.innerHTML = score;
    }
    
    // Shows the end game screen with title "GAME OVER" and final score
    function endGameWindow(score) {
        var endGameMessegeContainer = document.createElement('div');
        endGameMessegeContainer.style.position = 'absolute';
        endGameMessegeContainer.style.top = (canvas.width / 2) + 'px';
        endGameMessegeContainer.style.left = (canvas.width - 250) + 'px';
        
        var messegeTitle = document.createElement('h1');
        messegeTitle.style.textAlign = 'center';
        messegeTitle.innerHTML = 'GAME OVER !';
        messegeTitle.style.color = 'red';
        endGameMessegeContainer.appendChild(messegeTitle);
        
        var scoreMessege = document.createElement('p');
        scoreMessege.style.textAlign = 'center';
        scoreMessege.style.color = 'red';
        scoreMessege.innerHTML = 'Score: ' + score;
        endGameMessegeContainer.appendChild(scoreMessege);
        document.body.appendChild(endGameMessegeContainer);
    }
    
    // Generates random X position for the food
    function randomX(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Generates random Y position for the food
    function randomY(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function generateNewPosition() {
        var xPosition = randomX(maxPosition, minPosition),
            yPosition = randomY(maxPosition, minPosition),
            radius = 4;
       
        var foodNewPosition = {
            x: xPosition,
            y: yPosition
        }
        
        return foodNewPosition;
    }  
    
    // set food at given position
    function setFood(x, y) {
        radius = 5;
        
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(x, y, radius, 0, 2*Math.PI);
        ctx.fill();
    }
    
    function initializeSnake() {
        var length = 100,
            yPosition = 100;
        
        for (var i = length - 1; i >= 0; i--) {
            snake.push({
                x: i,
                y: yPosition
            });
        }
    }
    
    function drawSnake() {
        var radius = 5;
        
        for (var i = snake.length - 1; i >= 0; i--) {
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.arc(snake[i].x, snake[i].y, radius, 0, 2*Math.PI);
            ctx.fill();
        }
    }
    
    function updateSnake() {
        ctx.clearRect(0, 0, canvas.width, canvas.width);
        setFood(x, y);
        setScore(score);
        var headX = snake[0].x;
        var headY = snake[0].y;

        document.onkeydown = function(e) {
        var key = e.keyCode;

        if(key === 40 && dir !== 'up') {
            dir = 'down';
        }

        if(key === 39) {
            dir = 'right';
        }

        if(key === 38) {
            dir = 'up';
        }

        if(key === 37) {
            dir = 'left';
        }
    }  

    if(dir == "right") { 
        headX++;
    }
    else if(dir == "left") {
        headX--; 
    }
    else if(dir == "up") {
        headY--; 
    }
    else if(dir == "down") {
        headY++;
    }

    //Move snake
    var tail = snake.pop();
    tail.x = headX;
    tail.y = headY;
    snake.unshift(tail);
        
    // Collision detection for ball and snake
    if (headX == x && headY == y ||
            headX + 5 == x && headY + 5 == y || 
            headX + 1 == x && headY + 1 == y || 
            headX + 2 == x && headY + 2 == y || 
            headX + 3 == x && headY + 3 == y || 
            headX + 4 == x && headY + 4 == y ||
            headX - 5 == x && headY - 5 == y || 
            headX - 1 == x && headY - 1 == y || 
            headX - 2 == x && headY - 2 == y || 
            headX - 3 == x && headY - 3 == y || 
            headX - 4 == x && headY - 4 == y) {
        x = randomX(maxPosition, minPosition);
        y = randomY(maxPosition, minPosition);
        score += 50;
        ctx.clearRect(x, y, 15, 15)
        setFood(x, y);
    }
    
    // Collision detection for walls
    if ((headX < 0 || headY >= canvas.width) || (headX >= canvas.width || headY < 0)) {
        gameOver();
        return;
    } 
    else { // Check if the head is colliding with some part of the body (collision detection for body)
        for(var j = 1; j < snake.length; j++) {
            var snakePart = snake[j];
            if(headX == snakePart.x && headY == snakePart.y) {
                gameOver();
                return;
            }
        }
    }        
    
    drawSnake();
    setTimeout(updateSnake, snakeSpeed);
}       
    function gameOver() {
        snake.length = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.width)
        endGameWindow(score);
    }
    
    var canvas = document.getElementsByTagName('canvas')[0],
        ctx = canvas.getContext('2d'),
        snake = [],
        dir = 'right',
        maxPosition = canvas.width - 4,
        minPosition = 4,
        score = 0,
        snakeSpeed = 1,
        x = randomX(maxPosition, minPosition),
        y = randomY(maxPosition, minPosition);
    
    initializeSnake();
    drawSnake();
    updateSnake();
 })();