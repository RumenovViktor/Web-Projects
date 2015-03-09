(function () {
    var div = document.getElementById('input-form'),
    addButton = document.getElementById('add'),
    deleteButton = document.getElementById('delete'),
    cancelButton = document.getElementById('cancel'),
    okButton = document.getElementById('ok'),
    information = document.getElementsByClassName('data'),
    alarms = [],
    alarmCounter = 0;

    // Sets the styles of the inputs to their normal look.
    function repaint() {
        for (var i = 0; i < information.length; i++) {
            information[i].style.border = '1px solid grey';
            information[i].removeAttribute('placeholder');
        }
    }

    // Messege that tells the user that he can't create more than 4 alarms
    function alarmLimitMessege() {
        var container = document.createElement('div');
        container.style.display = 'none';

    }

    // Clears the inputs 
    function clearData() {
        for (var i = 0; i < information.length; i++) {
            information[i].value = '';
        }
    }

    function message(currentElement, txt) {
        currentElement.style.border = '1px solid rgba(230, 126, 34,1.0)';
        currentElement.style.fontSize = '11px';
        currentElement.setAttribute('placeholder', txt);
    }

    addButton.addEventListener("click", function () {
        div.style.display = 'block';
    });

    deleteButton.addEventListener('click', function () {
        /*
            Delete all the elements that are marked with the checkbox.
        */
        var elementsToBeDeleted = document.getElementsByClassName('marked');
        var alarmArea = document.getElementById('alarm-area');

        while (elementsToBeDeleted.length !== 0) {
            alarmArea.removeChild(elementsToBeDeleted[0]);
            alarmCounter--;
        }

        if (alarmCounter === 0) {
            document.getElementsByTagName('h2')[0].style.display = 'block';
        }
    });

    // Event that cancels the alarm creation
    cancelButton.addEventListener('click', function () {
        clearData();
        repaint();
        div.style.display = 'none';
    });

    okButton.addEventListener('click', function () {
        var isNotError = true;

        // Reverse to previus style.
        repaint()

        for (var i = 0; i < information.length; i++) {
            var currentElement = information[i];

            // Check if the inputs are filled with data
            if (information[i].value === '' || information[i].value === null) {
                message(currentElement, 'Fill this');
                isNotError = false;
            }

            if (isNaN(parseInt(information[i].value)) && (information[i].value !== '')) {
                currentElement.value = '';
                message(currentElement, 'Number');
                isNotError = false;
            }
        }

        // Create the alarm if everything in the input fields is ok.
        if (isNotError) {
            if (alarmCounter >= 4) {
                // TODO: Send messege to the user that he can't create more than 4 alarms
                return;
            }

            div.style.display = 'none';

            var alarm = new Alarm(information[0].value, information[1].value);
            alarm.createAlarm();
            alarms.push(alarm);
            clearData();
            alarmCounter++;

            if (alarmCounter > 0) {
                document.getElementsByTagName('h2')[0].style.display = 'none';
            }
        }
    });

    var audio = document.getElementById("mp3");
    audio.style.display = 'none';

    // Checks the alarms every second 
    setInterval(function () {
        var currentTime = new Date();

        for (var i = 0; i < alarms.length; i++) {
            if (parseInt(alarms[i].getHours()) === currentTime.getHours() &&
                parseInt(alarms[i].getMinutes()) === currentTime.getMinutes() &&
                currentTime.getSeconds() === 0) {

                audio.currentTime = 0;
                audio.style.display = 'block';
                audio.play();
            }
        }
    }, 1000);
})();