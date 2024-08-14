import React from 'react'
import "./weatherbox.css"

const WeatherBox = ({data}) => {
  return (
      <div className='weather-container'>
        <div className="day">
          <p>{new Date().toDateString().substring(0,15)}</p>
        </div>
        <div className="header">
          <div className='country'>
            <h1>{data.sys.country}</h1>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            <p>{Math.round(data.main.temp)}°C</p>
          </div>
        </div>
        <div className='description'>
          <span style={{textTransform: 'capitalize'}}>{data.weather[0].description}</span>
        </div>
        <div className="body">
          <div className="body-content">
            <div className="details-row">
              <span className="parameter-label">Humidity:</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="details-row">
              <span className="parameter-label">Feels like:</span>
              <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="details-row">
              <span className="parameter-label">Pressure:</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
            <div className="details-row">
              <span className="details-name">Wind speed:</span>
              <span className="details-value">{data.wind.speed} m/s</span>
            </div>
          </div>
          <div className="body-img">
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
          </div>
        </div>
      </div>
  )
}

export default WeatherBox