// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';

const api = {
  key: "cac35c39932b5be7071f388a82e43165",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
        // console.log(result)
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return day + ' ' + month + ' ' + date + ' ' + year
  }


  return (
    <div className="appContainer">

      <div className='app'>

        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='search...'
            onChange={e => setQuery(e.target.value)}
            // value={query}
            onKeyPress={search}
          />
        </div>

        {/* __________ */}

        {typeof weather.main != 'undefined' ? 
        <div className='bottom'>
          <div className='location-box'>
            <div className='location'>{weather.name + ', ' + weather.sys.country}</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>

          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}&deg; F
              
            </div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
        </div> : ('') }

      </div>

    </div>
  );
}

export default App;
