const hour_element = document.querySelector('.hours');
const minute_element = document.querySelector('.minutes');
const second_element = document.querySelector('.seconds');
const ampm_element = document.querySelector('.ampm');





setInterval(function () {
    let now = new Date();

    let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();;
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();;
    
    hour_element.textContent = hour;
    minute_element.textContent = minute;
    second_element.textContent = seconds;
}, 1000);