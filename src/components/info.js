import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Info = ({ info }) => {
  if (!info) {
    return (
      <div>
        search for something
      </div>
    )
  }
  const temp = parseFloat((info.main.temp - 273.15).toFixed(1))
  const location = info.name
  const weather = info.weather[0]

  const iconSrc = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return (
    <div>
      <div className="city">
        <h2>City:</h2>
        <p><b>{location}</b></p>
      </div>
      <div className="weather-info">
        <h3>Weather:</h3>
        <img src={iconSrc} width="100px"></img>
        <p>{weather.description}</p>
      </div>
      <div className="temp-info">
        <p>{temp}&#176;C</p>
      </div>
    </div>
  )
}

export default Info