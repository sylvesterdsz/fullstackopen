import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const eventHook = () => {
    personService.getAllPersons().then((allPersons) => {
      setPersons(allPersons);
    });
  };
  useEffect(eventHook, []);

  const addNameNumber = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((p) => p.name === newName);
    const numberExists = persons.some((person) => person.number === newNumber);

    if (existingPerson) {
      if (existingPerson.number == newNumber) {
        alert(`${newName} is already added to phonebook`);
        return;
      }

      const confirmUpdate = window.confirm(
        `${existingPerson.name} is already added to phonebook, replace old number with a new one?`,
      );

      if (!confirmUpdate) return;

      const updatedPerson = { ...existingPerson, number: newNumber };

      personService
        .updatePerson(existingPerson.id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((p) =>
              p.id !== existingPerson.id ? p : returnedPerson,
            ),
          );
          setMessage(`${newName} number changed to ${newNumber}`);
          setMessageType("success");
          setTimeout(() => {
            setMessage("");
            setMessageType("");
          }, 5000);
        })
        .catch((error) => {
          setMessage(
            `Information of ${newName} has already been removed from the server`,
          );
          setMessageType("error");
          setTimeout(() => {
            setMessage("");
            setMessageType("");
          }, 5000);
          setPersons(persons.filter((p) => p.id !== existingPerson.id));
        });
      return;
    } else if (numberExists) {
      alert(`${newNumber} is already added to phonebook`);
      return; // stop execution
    }

    const personObj = {
      name: newName,
      number: newNumber,
    };
    personService
      .createPerson(personObj)
      .then((createdPerson) => {
        setPersons(persons.concat(createdPerson));
        setMessage(`Added ${newName}`);
        setMessageType("success");
        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 5000);
      })
      .catch((error) => {
        // Show validation error returned from backend
        setMessage(error.response?.data?.error || "Failed to add person");
        setMessageType("error");
        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 5000);
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
      <Notification message={message} messageType={messageType} />
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
