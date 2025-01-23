const getWeather = async (location = "location") => {
    try {
        let response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=2P7YP3JNTHQ7FNAHTNBSU6MZP&contentType=json`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let result = await response.json(); // Await the parsed JSON data
        console.log(result); // Log the JSON data for debugging
        return result; // Return the JSON data
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null; // Return null if an error occurs
    }    
}

export default getWeather;