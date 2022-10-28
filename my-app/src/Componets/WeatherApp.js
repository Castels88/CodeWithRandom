import axios from 'axios'
import { useState } from 'react'
import '../CSS/weather.css'

export function WeatherApp() {
  const [SearchCity, setSearchCity] = useState('')
  const [city, setCity] = useState([])
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=3907dbc356b5ded9e522cebe4132825f&units=metric`

  function handleButton() {
    axios.get(url).then((res) => {
      setCity(res.data)
      console.log(res.data)
    })
  }

  function handleInput(event) {
    setSearchCity(event.target.value)
  }

  return (
    <div className="we-container">
      <input
        className="search"
        type="text"
        id="search"
        onChange={handleInput}
        placeholder="Search a city"
      />
      <button onClick={handleButton}>Search</button>
      <div className="w-card">
        <h2>{city && city.name}</h2>
        {city.name && (
          <div className="w-stats">
            <p>Weather: {city.weather && city.weather[0].description}</p>
            <p>Humidity: {city.main?.humidity}%</p>
            <p>Temp-max: {city.main?.temp_max}</p>
            <p>Temp-min: {city.main?.temp_min}</p>
          </div>
        )}
      </div>
    </div>
  )
}
