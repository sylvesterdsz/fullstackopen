const Results = ({ countries, search }) => {
  if (!search) return null;

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  if (filteredCountries.length === 0) {
    return <div>No matches</div>;
  }

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }
  if (filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map((f) => (
          <div key={f.name.common}>{f.name.common}</div>
        ))}
      </div>
    );
  }
  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return (
      <div>
        <h1>{country.name.common}</h1>

        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>

        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>

        <img src={country.flags.png} alt={country.name.common} width="150" />
      </div>
    );
  }
};

export default Results;
