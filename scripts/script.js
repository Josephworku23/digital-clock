const hour_element = document.querySelector('.hours');
const minute_element = document.querySelector('.minutes');
const second_element = document.querySelector('.seconds');
const ampm_element = document.querySelector('.am-pm');

setInterval(function () {
    let now = new Date();

    let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();;
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();;
    let ampm_indicator = now.getHours() >= 0 && now.getHours() < 12 ?  'am' : 'pm';

    hour_element.textContent = hour;
    minute_element.textContent = minute;
    second_element.textContent = seconds;
    ampm_element.textContent = ampm_indicator;

}, 1000);