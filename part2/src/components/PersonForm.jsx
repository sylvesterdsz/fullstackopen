const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <p>
          name: <input value={props.valueName} onChange={props.onChangeName} />
        </p>
        <p>
          number:{" "}
          <input value={props.valueNumber} onChange={props.onChangeNumber} />
        </p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
