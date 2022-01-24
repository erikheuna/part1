/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import axios from 'axios';
import Countrylist from './Components/CountryList';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState('');

  useEffect(() => {
    axios
    .get('https://restcountries.com/v2/all')
    .then(response => {
      setCountries(response.data);
    })
    .then()
  }, [])

  const countriesToShow = searchedCountries === "" ? countries : countries.filter(country => country.name.toLowerCase()
  .includes(searchedCountries.toLowerCase()));

  
  return (
    <div className="App">

    <h1>Search Countries</h1>
    <input value={searchedCountries} onChange={(e) => setSearchedCountries(e.target.value)} />

      {countriesToShow.length > 10 ? <p>Too many matches, be more specific</p>
        : countriesToShow.map(country => 
        <Countrylist name={country.name}
        key={country.alpha2Code}
        flag={country.flags.png}
        region={country.region}
        capital={country.capital}
        population={country.population}
        languages={country.languages}
        alpha2Code={country.alpha2Code}
        />
        )}
    </div>
  );
}

export default App;
