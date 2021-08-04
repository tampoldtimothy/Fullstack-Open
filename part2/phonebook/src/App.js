import React, { useState, useEffect } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import DisplayPersons from './components/DisplayPersons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState('')

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const handleFilterChange = e => {
    setFilterValue(e.target.value)
  }

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const addPerson = e => {
    e.preventDefault()
    const checkForDuplicates = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )
    if (checkForDuplicates !== undefined) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )
      if (confirmUpdate) {
        updatePerson(checkForDuplicates)
      }
    } else {
      const newPersonObject = { name: newName, number: newNumber }
      personsService.create(newPersonObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotificationType('success')
        setNotificationMessage(`Success! ${newName} was added to the phonebook`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const updatePerson = objectToUpdate => {
    const updatedObject = { ...objectToUpdate, number: newNumber }
    personsService
      .update(updatedObject)
      .then(() => {
        setPersons(
          persons.map(person =>
            person.id === updatedObject.id ? updatedObject : person
          )
        )
        setNotificationType('success')
        setNotificationMessage(`Success! ${newName} was updated`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
      .catch(error => {
        setNotificationType('error')
        setNotificationMessage(
          `Error! ${newName} has already been removed from server`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
  }

  const deletePerson = e => {
    e.preventDefault()
    const personId = parseInt(e.target.value)
    const nameOfPerson = persons.find(person => person.id === personId).name
    const confirmRemoval = window.confirm(`Delete ${nameOfPerson} ?`)
    if (confirmRemoval) {
      personsService.remove(personId).then(() => {
        setPersons(persons.filter(person => person.id !== personId))
        setNotificationType('success')
        setNotificationMessage(`Success! ${nameOfPerson} was deleted`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <Filter value={filterValue} filterOnChange={handleFilterChange} />
      <h2>Add new person</h2>
      <AddPersonForm
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        nameOnChange={handleNameChange}
        numberOnChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <DisplayPersons
        persons={persons}
        filterValue={filterValue}
        handleDelete={deletePerson}
      />
    </div>
  )
}

export default App
