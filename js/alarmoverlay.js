'use strict';

/* global window, moment */
var AlarmOverlay = (function (window, moment) {
    'use strict';

    var element = document.createElement('div');

    function setState(date) {
        var isWeekend = date.weekday === 0 || date.weekday === 6;
        var hours = date.getHours();

        element.setAttribute('class', 'alarm-overlay');
        if (isWeekend) {
            if (hours < 7 || hours >= 22) {
                element.classList.add('sleep');
            } else if (hours < 9) {
                element.classList.add('hush');
            } else if (hours >= 20) {
                element.classList.add('read');
            }
        } else {
            if (hours < 6 || hours >= 21) {
                element.classList.add('sleep');
            } else if (hours < 7) {
                element.classList.add('hush');
            } else if (hours >= 20) {
                element.classList.add('read');
            }
        }
    }

    function init() {
        element.appendChild(document.createElement('div'));
        document.body.appendChild(element);

        setState(moment());

        setInterval(function () {
            setState(moment());
        }, 1000 * 60)
    }

    return {
        init: init
    }
})(window, moment);

AlarmOverlay.init();