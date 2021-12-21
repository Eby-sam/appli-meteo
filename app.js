$('#but').on('click', function () {

    const urlM = 'https://api.openweathermap.org/data/2.5/weather?q='+ $('#ville').val() +'&appid=54a4cae3c77e0a37f7e28d0687911172&units=metric&lang=fr'
    const xhr = new XMLHttpRequest();
    xhr.open('GET',urlM);
    xhr.responseType = 'json';

    xhr.onload = function () {

        if(xhr.status !== 200) {
            return;
        }
        let reponse = xhr.response;
        $('#temp').html(Math.ceil(reponse.main.temp) + ' '+ ' °C');
        $('#vent').html(Math.ceil(reponse.wind.speed) + ' '+ ' km/H');
        $('#humide').html(Math.ceil(reponse.main.humidity) + ' '+ ' %');
        $('#tempMin').html(Math.ceil(reponse.main.temp_min) + ' '+ ' °C');
        $('#tempMax').html(Math.ceil(reponse.main.temp_max) + ' '+ ' °C');
    }
    xhr.send();
})





