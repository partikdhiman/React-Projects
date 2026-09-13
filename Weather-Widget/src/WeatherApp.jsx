import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css';

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    });

    const [darkMode, setDarkMode] = useState(false);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    let toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`weather-app ${darkMode ? 'dark' : ''}`}>
            <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? 'Light mode' : 'Dark mode'}
            </button>
            <p className="weather-app__eyebrow">Current conditions</p>
            <h2 className="weather-app__title">Weather, at a glance</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}