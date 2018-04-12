/* global window, moment */
const Weeko = (function (window, moment) {
    'use strict';

    let element;
    let weather;

    function renderDay(day) {
        var el = document.createElement('div');
        el.classList.add('calendar-day');
        el.setAttribute('data-weekday', day.datum.weekday());

        let content = '<h1 class="weekday-title">' + day.datum.locale('nl').format('dddd') + '</h1>';
        if (day.maxTemp) {
            content += '<div class="weather-temp">' + Math.round(day.maxTemp - 272.15) + '°C</div>';
        }
        content += '<div class="weather-icons">';
        day.weatherIcons.forEach(function (wi) {
            content += '<div class="weather-icon" style="background-image:url(' + wi + ');"></div>';
        });
        content += '</div>';

        el.innerHTML = content;
        element.appendChild(el);
    }

    function compileDayData(datum) {
        return new Promise(function (resolve, reject) {
            let day = {};
            day.datum = datum;
            day.maxTemp = 0;

            // get weather
            day.weatherIcons = weather.list.filter(function (w) {
                return (moment(w.dt * 1000).startOf('day').diff(day.datum) === 0)
            }).map(function (a) {
                day.maxTemp = window.Math.max(day.maxTemp, a.main.temp_max);
                return 'http://openweathermap.org/img/w/' + a.weather[0].icon + '.png';
            });

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
        loadJSON('http://api.openweathermap.org/data/2.5/forecast?q=Geldrop,NL&appid=35a91f92624095eff547f4c8fdf15807').then(function (w) {
            weather = w;
            element = window.document.querySelector(selector);

            // get a series of dates
            let startDate = moment().startOf('day').subtract(0, 'days'),
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