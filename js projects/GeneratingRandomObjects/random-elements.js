function removeExistingElements(content) {
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
}

function generateDivs() {
	var content = document.getElementById("content");
	var getNumberOfElements = document.getElementsByTagName("input")[0];
	getNumberOfElements = parseInt(getNumberOfElements.value);

	removeExistingElements(content);

	for (var i = 0; i < getNumberOfElements; i++) {
		var div = document.createElement("div");
        div.innerHTML = "<strong>div</strong>"
		setRandomStyles(div);
        content.appendChild(div);
	}
}

function setRandomStyles(div) {
    var randomWidth = generateRandomNumberInRange(20, 100);
    var randomHeight = generateRandomNumberInRange(20, 100);
    var randomFontColor = generateRandomColor();
    var randomTopMargin = generateRandomNumberInRange(1, 500);
    var randomLeftMargin = generateRandomNumberInRange(1, 800);
    
    div.style.position = "absolute";
    div.style.marginTop = randomTopMargin + "px";
    div.style.marginLeft = randomLeftMargin + "px";
    div.style.width = randomWidth + "px";
    div.style.height = randomHeight + "px";
    div.style.backgroundColor = generateRandomColor();
    div.style.borderRadius = generateRandomNumberInRange(5, 200) + "px";
    div.style.borderColor = generateRandomColor();
    div.style.border = generateRandomNumberInRange(1, 20) + "px";
    div.style.verticalAlign = "middle";
    div.style.textAlign = "center";
}

function generateRandomNumberInRange(startPoint, endPoint) {
    return Math.floor((Math.random() * endPoint) + startPoint);
}

function generateRandomColor() {
    var red = generateRandomNumberInRange(0, 255);
    var blue = generateRandomNumberInRange(0, 255);
    var green = generateRandomNumberInRange(0, 255);   
    
    return "rgb(" + red + ", " + blue + ", " + green + ")";
}

