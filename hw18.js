$('button').on('click', function () {

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${$('#city').val()}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function (response) {
            $('#temp').text(`current temperature: ${response.main.temp}`);
            $('#pressure').text(`current pressure: ${response.main.pressure}`);
            $('#humidity').text(`humidity is: ${response.main.humidity}`);
            $('#speed').text(`wind speed: ${response.wind.speed} km/h`);
            $('#deg').html(`wind direction: ${response.wind.deg} degrees`);
            $('#description').text(`general description: ${response.weather[0].description}`);
            const src = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
            $("img").attr('src', src);
        },
        error: function (error) {
            console.log(`there was an error occured:`, error);
        }
    });
})



// function writeData() {
//     $('#city').text('LVIV');
//     $('temp').text(weatherData.temperature);
//     $('pressure').text(weatherData.pressure);
//     $('humidity').text(weatherData.humidity);
//     $('speed').text(weatherData.speed);
//     $('deg').html(weatherData.deg);
// }


        // const weatherData = {
        //     temperature: response.main.temp,
        //     pressure: response.main.pressure,
        //     description: response.weather[0].description,
        //     humidity: response.main.humidity,
        //     windSpeed: response.wind.speed,
        //     windDirection: response.wind.deg,
        //     icon: response.weather[0].icon
        // };
        // console.log(weatherData.temperature);
        // $('#temp').html(weatherData.main.temp);

        // writeData();

        // console.log(weatherData);