import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

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
    setPersons(persons.concat(personObj));
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

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with{" "}
        <input value={searchName} onChange={handleSearchChange} />
      </p>
      <h2>add a new</h2>
      <form onSubmit={addNameNumber}>
        <div>
          <p>
            name: <input value={newName} onChange={handleNameChange} />
          </p>
          <p>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((p) => (
          <li key={p.id}>
            {p.name} {p.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
