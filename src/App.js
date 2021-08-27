import React, { useState } from 'react'
import Header from './components/header'
import Info from './components/info'
import axios from 'axios'

const key = process.env.REACT_APP_API_KEY

function App() {
  const [info, setInfo] = useState('');

  const getWeather = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => {
      const info = response.data
      console.log(info)
      setInfo(info)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const searchHandler = () => {
    const city = document.querySelector('.search').value;
    getWeather(city)
  }

  return (
    <div>
      <Header formResponse={searchHandler} />
      <Info info={info} />
    </div>
  );
}

export default App;
