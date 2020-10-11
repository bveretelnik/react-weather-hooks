import React, { useState, useContext } from 'react'
import { WeatherCotnext } from '../context/weather/weatherContext'
import Loader from './Loader'
import NoFound from './NoFound'
import Weather from './Weather'

export default function Search() {
const [value, setValue] = useState('')
const {weather,searchWeather,loading} = useContext(WeatherCotnext)


const onSubmit = e => {
  if(e.key !== "Enter") {
    return
  }
    searchWeather(value)
    setValue('')
}

    return (
      <div className={(typeof weather.main != 'undefined')? ((weather.main.temp>16)? 'app warm' : 'app'):'app'}>
      <main>
            <div className='search-box'>
              <input 
                type='text'
                className='search-bar'
                placeholder='Search...'
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                onKeyPress={onSubmit}
              />
            </div>
        {!loading ? (typeof weather.main != 'undefined')?<Weather weather={weather}/>:<NoFound/>:<Loader/>}
          </main>
    </div> 
    )
}
