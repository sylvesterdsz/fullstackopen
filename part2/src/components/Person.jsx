const Person = (props) => {
  return (
    <ul>
      {props.filteredPersons.map((p) => (
        <li key={p.id}>
          {p.name} {p.number}
        </li>
      ))}
    </ul>
  );
};

export default Person;
