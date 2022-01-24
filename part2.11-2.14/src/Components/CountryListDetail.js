/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CountryListdetail = ({region, flag, capital, population, languages, }) => {

    const weatherapikey = process.env.REACT_APP_API_KEY;
    console.log(weatherapikey);
    const [errors, setErrors] = useState([])
    const [countryWeather, setCountryWeather] = useState(null);

    useEffect(() => {
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${weatherapikey}&units=metric`)
      .then(response => {
        console.log(response.data);
        setCountryWeather(response.data);
      })
      .catch(e =>{
        setErrors(e.response.data.errors)
      })
    },[capital])

    

    return (
        <div>
        <img src={flag} alt="" />
        <h3>region : {region}</h3>
        <h3>capital: {capital}</h3>
        <h3>population: {population}</h3>
        <h4>Languages:</h4>
        <ul>
        {languages.map(language => 
         <li key={language.iso639_1}>
          {language.name}
         </li>)}
        </ul>
        <p>temperature: { countryWeather ? 
        countryWeather.main.temp + 
            " celsius" : "LOADING..."} </p>
        </div>
    );
}

export default CountryListdetail;
