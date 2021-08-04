import React from 'react'
import Person from './Person'

const DisplayPersons = ({ persons, filterValue, handleDelete }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  )
  return filteredPersons.map(person => (
    <Person key={person.id} person={person} handleDelete={handleDelete} />
  ))
}

export default DisplayPersons
