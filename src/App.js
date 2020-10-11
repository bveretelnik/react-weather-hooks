import React from 'react';
import Search from './components/Search';
import WeatherState from './context/weather/WeatherState';


function App() {

  return (
    <WeatherState>
        <Search/>
    </WeatherState>
  );
}

export default App;
