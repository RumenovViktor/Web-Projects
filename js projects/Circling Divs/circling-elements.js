function moveDiv(t, element, xCoordCenter, yCoordCenter) {
    t = t + 0.01; 
    var r = 200, 
        xcenter = xCoordCenter, 
        ycenter = yCoordCenter, 
        x = Math.floor(xcenter + (r * Math.cos(t))), 
        y = Math.floor(ycenter + (r * Math.sin(t))); 

    element.style.marginTop = y + "px"; 
    element.style.marginLeft = x + "px"; 

    setTimeout(function() { 
        moveDiv(t, element, xCoordCenter, yCoordCenter);
    }, 20);
}

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
var sixth = document.getElementById('sixth');

moveDiv(0, first, 200, 200); 
moveDiv(-1, second, 200, 200);
moveDiv(1, third, 200, 200);
moveDiv(-2, fourth, 200, 200);
moveDiv(2, fifth, 200, 200);
moveDiv(3.1, sixth, 200, 200);