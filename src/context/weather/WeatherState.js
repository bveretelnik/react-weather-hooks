import Axios from 'axios'
import React from 'react'
import { useReducer } from 'react'
import { GET_WEATHER, HIDE_LOADER, SHOW_LOADER } from '../type'
import { WeatherCotnext } from './weatherContext'
import { weatherReducer } from './weatherReducer'


const api = {
    key: '6853c5a1509de31aff4a10b6c2fee7ed',
    base:"https://api.openweathermap.org/data/2.5/" 
  }

export default function WeatherState({children}) {
    const initialState = {
        weather: '',
        loading: false
    }

    const [state,dispatch] = useReducer(weatherReducer,initialState)

const searchWeather = name => {
    showLoader()
         Axios.get(`${api.base}weather?q=${name}&units=metric&APPID=${api.key}`).then(r => {
            dispatch({
                type: GET_WEATHER,
                payload: r.data
            })
        }).catch(r => {
            hideLoader()
            console.log(r);
        })
    
} 

const showLoader = () => dispatch({type:SHOW_LOADER})
const hideLoader = () => dispatch({type:HIDE_LOADER, payload: {}})

const {weather,loading} = state
    return (
        <WeatherCotnext.Provider value={{
            showLoader,searchWeather, hideLoader,
            weather,loading,
        }}>
            {children}
        </WeatherCotnext.Provider>
    )
}
