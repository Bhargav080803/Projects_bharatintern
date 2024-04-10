var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "e45ffd4706795e53f315821089d31758";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = 'weather of <span>' + nameval + '<span>';
            temp.innerHTML = 'Temperature: <span>' + convertion(temperature) + 'C </span>';
            description.innerHTML = 'skyconditions: <span>' + descrip + '</span>';
            wind.innerHTML = 'windspeed: <span>' + windspeed + '</span>';

        })
        .catch(err => alert('you entered wrong city name '))
});
