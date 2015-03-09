(function () {
    var header = document.createElement('h1'),
    clockContainer = document.getElementById('clock');

    clockContainer.style.border = '2px solid white';
    header.style.position = 'absolute';
    header.style.color = 'white';
    header.style.bottom = '15px';
    header.style.right = '30px';

    var time = new Date();
    header.innerHTML = time.getHours() + ' : ' + time.getMinutes() + ' : ' + time.getSeconds();

    setInterval(function () {
        var time = new Date();

        header.innerHTML = '';

        // Format the clock.
        if (time.getMinutes() < 10 && time.getSeconds() >= 10) {
            header.innerHTML = time.getHours() + ' : 0' + time.getMinutes() + ' : ' + time.getSeconds();
        }
        else if (time.getMinutes() >= 10 && time.getSeconds() < 10) {
            header.innerHTML = time.getHours() + ' : ' + time.getMinutes() + ' : 0' + time.getSeconds();
        }
        else if (time.getMinutes() < 10 && time.getSeconds() < 10) {
            header.innerHTML = time.getHours() + ' : 0' + time.getMinutes() + ' : 0' + time.getSeconds();
        }
        else {
            header.innerHTML = time.getHours() + ' : ' + time.getMinutes() + ' : ' + time.getSeconds();
        }

        clockContainer.appendChild(header);

    }, 1000);
})();