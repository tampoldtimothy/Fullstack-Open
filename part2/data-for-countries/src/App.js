import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FindCountries from './components/FindCountries'
import Notification from './components/Notification'
import Country from './components/Country'
import DisplayOneCountry from './components/DisplayOneCountry'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setAllCountries(response.data))
  }, [])

  const handleFilterChange = e => setFilter(e.target.value)

  const filteredCountries = allCountries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  )

  const showCountry = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  return (
    <div>
      <FindCountries filter={filter} onFilterChange={handleFilterChange} />

      {filteredCountries.length === 0 ? (
        <Notification message='No matches, specify another filter' />
      ) : filteredCountries.length > 10 ? (
        <Notification message='Too many matches, specify another filter' />
      ) : filteredCountries.length <= 10 && filteredCountries.length !== 1 ? (
        filteredCountries.map(country => (
          <Country
            key={country.numericCode}
            countryName={country.name}
            handleClick={showCountry}
          />
        ))
      ) : (
        <DisplayOneCountry countryData={filteredCountries[0]} />
      )}
    </div>
  )
}

export default App
