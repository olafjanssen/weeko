/* global window, moment */
const Weeko = (function (window, moment) {
    'use strict';

    let element;

    function renderDay(day) {
        var el = document.createElement('div');
        el.classList.add('calendar-day');
        el.setAttribute('data-weekday', day.datum.weekday());

        let content = '<h1 class="weekday-title">' + day.datum.locale('nl').format('dddd') + '</h1>';

        el.innerHTML = content;
        element.appendChild(el);
    }

    function compileDayData(datum) {
        return new Promise(function (resolve, reject) {
            let day = {};
            day.datum = datum;

            resolve(day);
        });
    }


    function loadJSON(path) {
        return new Promise(function (resolve, reject) {
            if (localStorage.getItem('weather')) {
                resolve(JSON.parse(localStorage.getItem('weather')));
            } else {
               var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            localStorage.setItem('weather', xhr.responseText);
                            resolve(JSON.parse(xhr.responseText));
                        } else {
                            reject(xhr);
                        }
                    }
                };
                xhr.open("GET", path, true);
                xhr.send();
            }
        });

    }


    function init(selector) {
        loadJSON('http://api.openweathermap.org/data/2.5/forecast?q=Geldrop,NL&appid=35a91f92624095eff547f4c8fdf15807').then(function (weather) {

            console.log(weather);

            element = window.document.querySelector(selector);

            // get a series of dates
            let startDate = moment().startOf('day').subtract(7, 'days'),
                endDate = moment().startOf('day').add(14, 'days');

            let datum = startDate;
            while (datum < endDate) {

                compileDayData(datum).then(day => renderDay(day));

                datum = moment(datum).add(1, 'day');
            }
        });
    }

    return {
        init: init
    }
})(window, moment);

Weeko.init('#calendar');

// http://samples.openweathermap.org/data/2.5/forecast?q=Geldrop,NL&appid=35a91f92624095eff547f4c8fdf15807