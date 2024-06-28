// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Weather() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const handleInputChange = async(event) => {
//     setCity(event.target.value);

//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
//       setWeather(response.data);
//       setError(null);
//     } catch (error) {
//       setError('Error fetching weather data. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a city"
//           value={city}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Get Weather</button>
//       </form>
//       {error && <p>{error}</p>}
//       {weather && (
//         <div>
//           <h2>{weather.name}</h2>
//           <p>Temperature: {weather.main.temp}°C</p>
//           <p>Description: {weather.weather[0].description}</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Weather;



import './index.css'
import React, { useState } from 'react';
import clouds from "../images/clouds.webp";
// import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    //   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    //   setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
    }
  };

  return (
    <div className='contain'>
      <h1 className='weath'>Weather App</h1>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={handleInputChange}
          className='cite'/>
        <button type="submit" className='button'>Get Weather</button>
      </form>
            <img src={clouds} alt="clouds" className="image" />

      {error && <p>{error}</p>}
      {weatherData && (
        <div className='data'>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Weather;




// import fetchData from './utils/fetchData';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const data = await fetchData('/weather');
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };
//     fetchWeatherData();
//   }, []);

//   // Render the weather data
//   return (
//     <div>
//       {weatherData && (
//         <div>
//           <h2>{weatherData.city}</h2>
//           <p>Temperature: {weatherData.temperature}°C</p>
//           <p>Description: {weatherData.description}</p>
//           {/* Add more weather data as needed */}
//         </div>
//       )}
//     </div>
//   );
//       };

//       export default Weather;