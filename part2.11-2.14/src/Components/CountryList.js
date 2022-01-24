/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import CountryListdetail from "./CountryListDetail";
import axios from "axios";

const Countrylist = ({
  name,
  flag,
  region,
  capital,
  population,
  languages,
  alpha2Code
}) => {

  

  const [showCountryDetail, setShowCountryDetail] = useState(false);
  
 

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setShowCountryDetail(!showCountryDetail)}>
        {showCountryDetail ? "hide" : "show"}
      </button>
      {showCountryDetail ? (    
        <CountryListdetail
          flag={flag}
          region={region}
          capital={capital}
          population={population}
          languages={languages}
          name={name}
        />
      ) : null}
    </div>
  );
};

export default Countrylist;
