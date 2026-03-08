import weatherService from "../services/Weather";
import { useState, useEffect } from "react";

const WeatherDetails = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);
  //one weather service is paid, so using a free api to get only temperature
  useEffect(() => {
    weatherService.getWeatherDetails(lat, lon).then((response) => {
      setWeather(response.data.current.temperature_2m);
    });
  }, [lat, lon]);
  return (
    <div>
      <h2>Weather Details</h2>
      {weather}
    </div>
  );
};

export default WeatherDetails;
