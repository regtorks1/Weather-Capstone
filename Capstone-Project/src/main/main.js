import React from 'react';
import {useState} from 'react';
import Logout from '../Logout/logout';
import './main.css';

const api = {
    key: "598dfb156b87cbdae2d49a5a6702dcd0",
    base : "https://api.openweathermap.org/data/2.5/"
}


export const Main = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})

    const search = e => {
        if(e.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);   
            });
    }
}

    const dateBuilder = (d) => {
          let months = ["January", "February", "March", "April","May", "June",
        "July", "August", "September", "October", "Novemeber","December"]
          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

          let day = days[d.getDay()];
          let date = d.getDate();
          let month = months[d.getMonth()];
          let year = d.getFullYear();

          return `${day} ${date} ${month} ${year}`
    }
        


    return (
        <div className = {
            (typeof weather.main != "undefined") ? ((weather.main.temp > 25) ? 'appwarm' : 'app') : 'app'}>
            <main>
                <div className = 'search-box'>
                    <input 
                    type = 'text' 
                    className = 'search-bar' 
                    placeholder = 'Search'
                    onChange = {(e) => setQuery(e.target.value)}
                    value = {query}
                    onKeyPress = {search}
                    />
                     
                </div>

               
                {(typeof weather.main != "undefined") ? (
                <div>
                <div className = 'location-box'>
                    <div className ='location'>{weather.name}, {weather.sys.country}</div>
                    <div className = 'date'>{dateBuilder(new Date())}</div>
                </div>
                <div className = 'weather-box'>
                <div className = 'temp'>{Math.round(weather.main.temp)}°C</div>
                <div className = 'weather'>{weather.weather[0].main}</div>
                <Logout />
                </div>
                
                </div>    
                ) : ('')}    
            </main>
            
        </div>
    )
}

