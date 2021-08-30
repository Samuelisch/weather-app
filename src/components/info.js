import React from 'react'

const Info = ({ info }) => {
  if (!info) {
    return (
      <div className="loading-spinner">
      </div>
    )
  }

  const toCelcius = (temp) => parseFloat((temp - 273.15).toFixed(1))
  const getRain = () => {
    console.log(info.rain)
    if (!info.rain) {
      return 0
    }
    return info.rain['1h']
  }
  const getSnow = () => {
    if (!info.snow) {
      return 0
    }
    return info.snow['1h']
  }

  const temp = toCelcius(info.main.temp)
  const location = info.name
  const weather = info.weather[0]

  const iconSrc = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return (
    <div className="main-container">
      <div className="current">
        <h2>{location}</h2>
        <img src={iconSrc} width="100px" alt="weather icon"></img>
        <p>{weather.main}</p>
        <p>{temp}&#176;C</p>
      </div>

      <div className="details-container">
        <div className="grid temp-minmax">
          <b>Temperature</b>
          <p>{toCelcius(info.main.temp_min)} / {toCelcius(info.main.temp_max)}</p>
        </div>
        <div className="grid">
          <b>Humidity</b>
          <p>{info.main.humidity}%</p>
        </div>
        <div className="grid">
          <b>Wind</b>
          <p>{info.wind.deg}&#176; {info.wind.speed}m/s</p>
        </div>
        <div className="grid">
          <b>Cloud cover</b>
          <p>{info.clouds.all}%</p>
        </div>
        <div className="grid">
          <b>Precipitation</b>
          <p>{getRain()}mm</p>
        </div>
        <div className="grid">
          <b>Snow</b>
          <p>{getSnow()}mm</p>
        </div>
      </div>
    </div>
  )
}

export default Info