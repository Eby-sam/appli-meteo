let humide = document.getElementById('humide');
let vent = document.getElementById('vent');
let temps = document.getElementById('temp');
let tempMin = document.getElementById('tempMin');
let tempMax = document.getElementById('tempMax');
let but = document.getElementById('but');
let ville = document.getElementById('ville');

but.addEventListener('click', function () {

    const urlM = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville.value +'&appid=54a4cae3c77e0a37f7e28d0687911172&units=metric&lang=fr'
    const xhr = new XMLHttpRequest();
    xhr.open('GET',urlM);
    xhr.responseType = 'json';

    xhr.onload = function () {

        if(xhr.status !== 200) {
            return;
        }

        let reponse = xhr.response;
        temps.innerHTML = Math.ceil(reponse.main.temp) + ' '+ ' °C';
        vent.innerHTML = Math.ceil(reponse.wind.speed) + ' '+ ' km/H';
        humide.innerHTML = Math.ceil(reponse.main.humidity) + ' '+ ' %';
        tempMin.innerHTML = Math.ceil(reponse.main.temp_min) + ' '+ ' °C';
        tempMax.innerHTML = Math.ceil(reponse.main.temp_max) + ' '+ ' °C';
    }

    xhr.send();
})





