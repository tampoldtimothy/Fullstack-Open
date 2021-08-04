import React from 'react'
import Weather from './Weather'

const DisplayOneCountry = ({ countryData }) => (
  <div>
    <h2>{countryData.name}</h2>
    <p>
      <strong>Capital: </strong>
      {countryData.capital}
    </p>
    <p>
      <strong>Population: </strong>
      {countryData.population}
    </p>
    <h3>Languages</h3>
    <ul>
      {countryData.languages.map(lang => (
        <li key={lang.iso639_2}>{lang.name}</li>
      ))}
    </ul>
    <img
      src={countryData.flag}
      alt={`Flag of ${countryData.name}`}
      style={{ width: 150 }}
    />
    <h3>Weather in {countryData.capital}</h3>
    <Weather city={countryData.capital} />
  </div>
)

export default DisplayOneCountry
