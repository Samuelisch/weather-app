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
      console.log(response.data)
      const info = response.data
      setInfo(info)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const clickHandler = (e) => {
    e.preventDefault();
    const city = document.querySelector('.search').value;
    console.log(city);
    getWeather(city)
  }

  return (
    <div>
      <Header formResponse={clickHandler} />
      <Info info={info} />
    </div>
  );
}

export default App;
