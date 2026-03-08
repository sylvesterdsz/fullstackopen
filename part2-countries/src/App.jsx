import { useState, useEffect } from "react";
import countryService from "./services/Countries";
import Results from "./components/Results";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const handleCountryChange = (event) => {
    return setSearch(event.target.value);
  };

  return (
    <div>
      find countries
      <input value={search} onChange={handleCountryChange}></input>
      <Results countries={countries} search={search} />
    </div>
  );
};

export default App;
