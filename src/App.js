import React, { useState, useEffect } from 'react'
import axios from 'axios'

console.log('api key is: ', process.env.REACT_APP_API_KEY)

function App() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/weather`)
    .then(response => {
      console.log(response.data)
      const weather = response.data.current.weather_descriptions
      setWeather(weather)
    })
    .catch(e => {
      console.log('error in fetching data!')
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
