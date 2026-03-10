import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const NAME_REGEX = /^\p{L}+$/u;
const PHONE_NUMBER_REGEX = /^(\d{1,3}-)?\d{7}$/;


const App = () => {
  const [persons, setPersons] = useState([
    {id: 0, name: 'Arto Hellas', number: '050-7777777' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const shownContacts = persons.filter(person =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  const addPerson= (event) =>{
    event.preventDefault()
    console.log('button clicked', event.target)

    if(!NAME_REGEX.test(newName)){
      alert(`Name can't consist of numbers or special characters`)
      return
    }
    if(!PHONE_NUMBER_REGEX.test(newNumber)){
      alert(`${newNumber} is not a valid phone number`)
      return
    }
    if(persons.some(person=>newName.toLowerCase()===person.name.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      id: Math.max(...persons.map(person => person.id), 0)+1,
      name: newName,
      number: newNumber
      }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h3>Phonebook</h3>
        <Filter newSearch={newSearch} handleSearch={handleSearch}/>
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons shownContacts={shownContacts} />
    </div>
  )
}

export default App