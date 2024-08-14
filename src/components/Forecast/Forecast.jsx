import React from 'react'
import "./forecast.css"

const Forecast = ({foreCast}) => {
  
  const currentDay = new Date().getDay();
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const forecastDays = daysOfWeek.slice(currentDay, daysOfWeek.length).concat(daysOfWeek.slice(0, currentDay))
  const isoDate = new Date()

  
  
  return (
    <div className='forecast-container'>
      {foreCast.list.map((item,index) => {
        if(index !== 0 && index % 7 === 0) {
          return (
          <div className="daily-card" key={index}>
            <div className="day">
              <p>{new Date(item.dt_txt).toDateString().substring(0,15)}</p>
            </div>
            <div className="header">
              <div className='country'>
                <h1>{foreCast.city.country}</h1>
                <p>{foreCast.city.name}</p>
              </div>
              <div className='temp'>
                <p>{Math.round(item.main.temp)}°C</p>
              </div>
            </div>
            <div className='description'>
              <span style={{textTransform: 'capitalize'}}>{item.weather[0].description}</span>
            </div>
            <div className="body">
              <div className="body-content">
                <div className="details-row">
                  <span className="parameter-label">Humidity:</span>
                  <span className="parameter-value">{item.main.humidity} %</span>
                </div>
                <div className="details-row">
                  <span className="parameter-label">Feels like:</span>
                  <span className="parameter-value">{Math.round(item.main.feels_like)} °C</span>
                </div>
                <div className="details-row">
                  <span className="parameter-label">Pressure:</span>
                  <span className="parameter-value">{Math.round(item.main.pressure)} hPa</span>
                </div>
                <div className="details-row">
                  <span className="parameter-label">Wind Speed:</span>
                  <span className="parameter-value">{item.wind.speed} m/s</span>
                </div>
                <div className="details-row">
                  <span className="parameter-label">Max temperature:</span>
                  <span className="parameter-value">{Math.round(item.main.temp_max)} °C</span>
                </div>
                <div className="details-row">
                  <span className="parameter-label">Min temperature:</span>
                  <span className="parameter-value">{Math.round(item.main.temp_min)} °C</span>
                </div>
              </div>
              <div className="body-img">
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
              </div>
            </div> 
          </div>)
        }
      })}
    </div>
  )
}

export default Forecast