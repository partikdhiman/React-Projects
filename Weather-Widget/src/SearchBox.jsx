import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4f6196e334aba525cb39d65e02ba2740";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        if (!response.ok) {
            throw new Error(jsonResponse.message || "City not found");
        }
        return {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        try {
            let newInfo = await getWeatherInfo();
            setCity("");
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    required
                    size="small"
                    value={city}
                    onChange={handleChange}
                    className="search-input"
                />
                <Button
                    variant="contained"
                    type='submit'
                    className="search-button"
                >
                    Search
                </Button>
            </form>
            {error && <p className="error-text">We couldn't find that city. Try another name.</p>}
        </div>
    )
}