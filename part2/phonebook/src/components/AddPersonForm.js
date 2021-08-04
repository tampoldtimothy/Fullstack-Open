import React from 'react'

const AddPersonForm = ({
  onSubmit,
  nameValue,
  numberValue,
  nameOnChange,
  numberOnChange,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={nameOnChange} />
    </div>
    <div>
      number: <input value={numberValue} onChange={numberOnChange} />
    </div>
    <div>
      <button type='submit'>add</button>
    </div>
  </form>
)

export default AddPersonForm