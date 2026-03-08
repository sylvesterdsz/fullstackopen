import { useState, useEffect } from "react";
import countryService from "./services/Countries";
import Results from "./components/Results";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryService.getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const handleCountryChange = (event) => {
    setSearch(event.target.value);
    setSelectedCountry(null); // reset when typing
  };

  return (
    <div>
      find countries
      <input value={search} onChange={handleCountryChange}></input>
      <Results
        countries={countries}
        search={search}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  );
};

export default App;
