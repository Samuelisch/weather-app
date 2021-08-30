import axios from 'axios'

const key = process.env.REACT_APP_API_KEY

const getWeather = city => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  return request.then(response => response.data)
}

const data = { getWeather }

export default data