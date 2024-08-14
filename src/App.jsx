import React, { useState } from 'react'
import { WEATHER_API_KEY, WEATHER_API_URL} from "./api"
import WeatherBox from './components/WeatherBox/WeatherBox'
import Forecast from './components/Forecast/Forecast'

const App = () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState(null)
  const [foreCast, setForeCast] = useState(null)
  
  const getData = async () => {
    try {
      const response = await fetch(`${WEATHER_API_URL}/weather?q=${search}&units=metric&appid=${WEATHER_API_KEY}`)
      const result = await response.json()
      setData(result)
      
    } catch (err) {
      console.log(err);
    }
    try {
      const forecastResponse = await fetch(`${WEATHER_API_URL}/forecast?q=${search}&units=metric&appid=${WEATHER_API_KEY}`)
      const forecastResult = await forecastResponse.json()
      setForeCast(forecastResult)
          
    } catch (err) {
      console.log(err);
      
    }
  }

  const handleSubmit = () => {
    getData()
    setSearch('')
  }
    

  return (
    <div>
      <div className='navbar'>
        <input className='search-bar' type="text" name='city' placeholder='Enter a city...' onChange={(e) => {setSearch(e.target.value)}} value={search}/>
        <input className='send-btn' type="submit" onClick={handleSubmit}/>
      </div>

      {!data ? <></> : <WeatherBox data={data}/>}
      {!foreCast ? <></> : <Forecast foreCast={foreCast}/>}
    </div>
  )
}

export default App