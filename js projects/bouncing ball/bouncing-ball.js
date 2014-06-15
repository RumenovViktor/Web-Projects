var element = document.getElementById('draw-space'),
        ctx = element.getContext('2d');
    
    var xPosition = 100,
        yPosition = 100,
        radius = 30,
        ballXDirection = 4,
        ballYDirection = 4;

    ctx.strokeStyle = '#34495e';
    ctx.fillStyle = '#1bbc9d';

function bounce() {
    ctx.clearRect(0, 0, element.width, element.height);
    ctx.moveTo(xPosition, yPosition);
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    xPosition += ballXDirection;
    yPosition += ballYDirection;
    
    if(xPosition > element.width - radius || xPosition < 0 + radius) {
        ballXDirection *= -1
    }
    
    if(yPosition > element.height - radius || yPosition < 0 + radius) {
        ballYDirection *= -1
    }
    
    requestAnimationFrame(bounce);
}

bounce();