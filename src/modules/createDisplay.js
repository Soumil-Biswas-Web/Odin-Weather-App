const createDisplay = () => {
    let display_weather = document.createElement("div");
    display_weather.setAttribute('class', 'display_weather');

    let img = document.createElement("img");
    display_weather.appendChild(img);

    let pLocation = document.createElement("p");
    pLocation.setAttribute('id', 'address');
    display_weather.appendChild(pLocation);

    let pWeather = document.createElement("p");
    pWeather.setAttribute('id', 'weather');
    display_weather.appendChild(pWeather);

    let pDesc = document.createElement("p");
    pDesc.setAttribute('id', 'desc');
    display_weather.appendChild(pDesc);

    return display_weather;
}

export default createDisplay;