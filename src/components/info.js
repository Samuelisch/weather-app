import React from 'react'

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
    <div className="main-container">
      <div className="current">
        <h2>{location}</h2>
        <p>{weather.main}</p>
        <p>{temp}&#176;C</p>
      </div>
      <div className="forecast-day-container">
        <div className="forecast now">
          <p><b>Now</b></p>
          <img src={iconSrc} width="50px" alt="weather icon"></img>
          <p>{temp}&#176;C</p>
        </div>
      </div>
      <div>
        {/*
        add details on current weather here
        */}
      </div>
    </div>
  )
}

export default Info