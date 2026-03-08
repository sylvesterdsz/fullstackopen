import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const eventHook = () => {
    personService.getAllPersons().then((allPersons) => {
      setPersons(allPersons);
    });
  };
  useEffect(eventHook, []);

  const addNameNumber = (event) => {
    event.preventDefault();

    // Check for duplicate
    const nameExists = persons.some((person) => person.name === newName);
    const numberExists = persons.some((person) => person.number === newNumber);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return; // stop execution
    } else if (numberExists) {
      alert(`${newNumber} is already added to phonebook`);
      return; // stop execution
    }

    const personObj = {
      name: newName,
      number: newNumber,
    };
    personService.createPerson(personObj).then((createdPerson) => {
      setPersons(persons.concat(createdPerson));
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase()),
  );

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchName} onChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm
        valueName={newName}
        valueNumber={newNumber}
        onChangeName={handleNameChange}
        onChangeNumber={handleNumberChange}
        onSubmit={addNameNumber}
      />
      <h2>Numbers</h2>
      <Person filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
