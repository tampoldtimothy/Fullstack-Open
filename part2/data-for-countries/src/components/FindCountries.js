import React from 'react'

const FindCountries = ({ filter, onFilterChange }) => (
  <div>
    find countries <input value={filter} onChange={onFilterChange} />
  </div>
)

export default FindCountries
