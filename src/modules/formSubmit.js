import getWeather from "./getWeather";
import showWeather from "./showWeather";

const formSubmit = () => {
    let form;

    form = document.querySelector("#entry_form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // console.log("Doint it");
      parseFormData();
    });
  
    const parseFormData = async () => {
      let data = new FormData(form);
      let location = data.get("location");

      let response = await getWeather(location);
      console.log(response);
      if (response) {
          showWeather(response); // Pass the parsed JSON data
      } else {
          console.error("Failed to fetch weather data.");
      }
    }
}

export default formSubmit;