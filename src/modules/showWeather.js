const showWeather = (response) => {
    const img = document.querySelector('img');
    const pLocation = document.querySelector('#address');
    const pWeather = document.querySelector('#weather');
    const pDesc = document.querySelector('#desc');

    document.querySelector(".display_weather").style.display = "flex";
    console.log(response);
    updateIcon(img , response.currentConditions.icon, response.currentConditions.conditions);
    pLocation.textContent = ("Location: " + response.resolvedAddress);
    pWeather.textContent = ("Forecast: " + response.currentConditions.conditions);
    pDesc.textContent = ("Description: " + response.description);
};


const updateIcon = async(img, icon, conditions) => {
    try {
        // console.log(icon + " " + conditions);
        const iconPath = await import(`../assets/${icon}.svg`);
        console.log(iconPath);
        img.src = iconPath.default;;
        img.alt = `${conditions}`;
        img.title = `${conditions}`;
      } catch (error) {
        console.log(error);
      }
}

export default showWeather;