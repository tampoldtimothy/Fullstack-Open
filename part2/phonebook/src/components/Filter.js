import React from 'react'

const Filter = ({ value, filterOnChange }) => (
  <div>
    filter shown with: <input value={value} onChange={filterOnChange} />
  </div>
)

export default Filter
