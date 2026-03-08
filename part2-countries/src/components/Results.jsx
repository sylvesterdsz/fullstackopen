import CountryDetails from "./CountryDetails";
import WeatherDetails from "./WeatherDetails";

const Results = ({
  countries,
  search,
  selectedCountry,
  setSelectedCountry,
}) => {
  if (!search) return null;

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  if (selectedCountry) {
    return <CountryDetails country={selectedCountry} />;
  }

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
          <div key={f.name.common}>
            {f.name.common}
            <button onClick={() => setSelectedCountry(f)}>Show</button>
          </div>
        ))}
      </div>
    );
  }
  if (filteredCountries.length === 1) {
    return (
      <div>
        <CountryDetails country={filteredCountries[0]} />
        <WeatherDetails
          lat={filteredCountries[0].latlng[0]}
          lon={filteredCountries[0].latlng[1]}
        />
      </div>
    );
  }
};

export default Results;
