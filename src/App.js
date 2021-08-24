import React, { useState, useEffect } from 'react'
import axios from 'axios'

const key = process.env.REACT_APP_API_KEY

function App() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=singapore&appid=${key}`)
    .then(response => {
      console.log(response.data)
      const weather = response.data.weather[0].description
      setWeather(weather)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Singapore's weather right now: {weather}</p>
    </div>
  );
}

export default App;
