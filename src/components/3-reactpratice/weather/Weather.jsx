import React, { useState } from "react";
import styles from "./weather.module.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");


  const API_KEY = "67ca10a974cdb45a25a6cba94385c542";

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city");
      setWeather(null);
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      console.log("API Response:", data);

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (error) {
      setError("Failed to fetch data. Try again.");
      setWeather(null);
    }
  };

  return (
    <div className={styles.container}>
      <h2>🌦️ Weather App</h2>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.card}>
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌤️ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
