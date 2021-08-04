import React from 'react'

const Country = ({ countryName, handleClick }) => (
  <div>
    {countryName}
    <button value={countryName} onClick={handleClick}>
      show
    </button>
  </div>
)

export default Country
