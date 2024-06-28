// 날씨 연동
const weather = () => {
    const API_KEY = '24085c23a2d8cd2c862de7730733c534';
    const latitude = '37.769482156924';
    const longitude = '126.76631275907';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;

    // API 호출
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const icon = data.weather[0].icon;
            let nowWeather = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
            if (icon == '01d') {
                nowWeather = `<img src="images/weather/sund.png">`
            } else if (icon == '01n') {
                nowWeather = `<img src="images/weather/sunn.png">`
            } else {
                nowWeather = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
            }
        })
}

export default weather;