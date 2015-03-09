var Alarm = (function () {
    function checkInputData() {
        var currentDate = new Date();

        if (this._hour < currentDate.getHours() || this._hour > 24) {
            throw new Error("Invalid hour.");
        }

        if (this._minutes < currentDate.getMinutes() || this._minutes >= 60) {
            throw new Error("Invalid minutes.");
        }
    }

    function Alarm(hour, minutes) {
        this._hour = hour;
        this._minutes = minutes;
    }

    Alarm.prototype.getHours = function () {
        return this._hour;
    };

    Alarm.prototype.getMinutes = function () {
        return this._minutes;
    };

    Alarm.prototype.makeNoise = function () {
        //TODO: load file for making the ring sound
    };

    Alarm.prototype.createAlarm = function () {
        var alarmContainer = document.createElement('div');
        var alarmArea = document.getElementById('alarm-area');
        var alarmInfo = document.createElement('strong');
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');

        checkBox.addEventListener('click', function () {
            checkBox.parentElement.setAttribute('class', 'marked');
        });

        checkBox.style.marginTop = '20px';
        checkBox.style.cssFloat = 'left';
        checkBox.style.marginLeft = '10px';

        alarmContainer.style.width = '100%';
        alarmContainer.style.position = 'relative';
        alarmContainer.style.height = '50px';
        alarmContainer.style.border = '2px solid #2980b9'
        alarmContainer.style.backgroundColor = '#3498db';
        alarmContainer.style.marginBottom = '1px';

        alarmInfo.style.position = 'absolute';
        alarmInfo.style.fontFamily = 'MuseoSans,Georgia,serif';
        alarmInfo.style.color = '#ecf0f1';
        alarmInfo.style.fontSize = '30px';
        alarmInfo.style.textAlign = 'center';
        alarmInfo.innerHTML = ' | ' + this._hour + ':' + this._minutes + ' | ';
        alarmInfo.style.marginTop = '2%';
        alarmInfo.style.marginLeft = '17%';

        alarmContainer.appendChild(checkBox);
        alarmContainer.appendChild(alarmInfo);
        alarmArea.appendChild(alarmContainer);
    };

    return Alarm;
})();