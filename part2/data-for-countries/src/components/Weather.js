import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState({})
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      )
      .then(response => setWeatherData(response.data))
  }, [city])

  if (Object.keys(weatherData).length === 0) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <p>
        <strong>Temperature: </strong>
        {weatherData.current.temperature} Celcius
      </p>
      {weatherData.current.weather_icons.map((icon, index) => (
        <img key={index} src={icon} alt='Weather icon' />
      ))}
      <p>
        <strong>Wind: </strong>
        {weatherData.current.wind_speed} km/h direction{' '}
        {weatherData.current.wind_dir}
      </p>
    </div>
  )
}

export default Weather
