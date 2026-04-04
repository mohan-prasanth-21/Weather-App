import PropTypes from "prop-types";
import windicon from "../assets/wind.png";
import humidityicon from "../assets/humidity.png";

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind}) => {
  return(
   <>
      <div className="image">
        <img src={icon} alt="image" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className='lat'>Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className='log'>Longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityicon} alt="Humidity" className='icon'/>
          <div className="data">
             <div className="humidity-percentage">{humidity}%</div>
          <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windicon} alt="Humidity" className='icon' />
          <div className="data">
            <div className="wind-percentage">{wind} km/h</div>
          <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
   </>
  );  
};
WeatherDetails.PropTypes = { 
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  log: PropTypes.number.isRequired,

};
export default WeatherDetails;