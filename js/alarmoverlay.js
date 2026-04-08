"use strict";

/* global window, dayjs */
var AlarmOverlay = (function (window, dayjs) {
  "use strict";

  var element = document.createElement("div");

  function setState(date) {
    var hours = date.hour();

    element.setAttribute("class", "alarm-overlay");
    if (date.day() === 0 || date.day() === 6) {
      if (hours < 7 || hours >= 21) {
        element.classList.add("sleep");
      } else if (hours < 9) {
        element.classList.add("hush");
      } else if (hours >= 20) {
        element.classList.add("read");
      }
    } else {
      if (hours < 6 || hours >= 21) {
        element.classList.add("sleep");
      } else if (hours < 7) {
        element.classList.add("hush");
      } else if (hours >= 20) {
        element.classList.add("read");
      }
    }
  }

  function init() {
    element.appendChild(document.createElement("div"));
    document.body.appendChild(element);

    setState(dayjs());

    setInterval(function () {
      setState(dayjs());
    }, 1000 * 60);
  }

  return {
    init: init,
  };
})(window, dayjs);

AlarmOverlay.init();
