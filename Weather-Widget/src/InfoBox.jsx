import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7PMYsPysMqcUnBZUPwiC3dx7bgWTI1psYSlAVdMN3w&s=10";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXn6Nzm96ubG87jTbiF437Ad28k4_pm5uLylaZIEGNw&s=10";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDy8Ba0i5596NjB8gUKC4Mj7fd7rT7G0yACXkMbrdvkg&s=10";

    const isRainy = info.humidity > 80;
    const isHot = info.temp > 15;

    const Icon = isRainy ? ThunderstormIcon : isHot ? SunnyIcon : AcUnitIcon;
    const iconClass = isRainy ? 'icon--rain' : isHot ? 'icon--hot' : 'icon--cold';
    const imageUrl = isRainy ? RAIN_URL : isHot ? HOT_URL : COLD_URL;

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <div className="weather-card">
                    <img src={imageUrl} alt={info.weather} className="weather-card__image" />
                    <h3 className="weather-card__city">
                        {info.city}
                        <Icon className={`weather-card__icon ${iconClass}`} />
                    </h3>
                    <p className="weather-card__condition">{info.weather}</p>

                    <div className="weather-card__readout">
                        {Math.round(info.temp)}<sup>&deg;C</sup>
                    </div>
                    <p className="weather-card__feels">Feels like {Math.round(info.feelsLike)}&deg;C</p>

                    <div className="weather-card__stats">
                        <div className="weather-card__stat">
                            <p className="weather-card__stat-label">Humidity</p>
                            <p className="weather-card__stat-value">{info.humidity}%</p>
                        </div>
                        <div className="weather-card__stat">
                            <p className="weather-card__stat-label">Min</p>
                            <p className="weather-card__stat-value">{Math.round(info.tempMin)}&deg;</p>
                        </div>
                        <div className="weather-card__stat">
                            <p className="weather-card__stat-label">Max</p>
                            <p className="weather-card__stat-value">{Math.round(info.tempMax)}&deg;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}