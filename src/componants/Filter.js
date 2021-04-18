import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const Filter = () => {
  const { filterCountries } = useContext(ThemeContext);
  return (
    <select
      name="filter"
      className="filter"
      defaultValue="0"
      onChange={(e) => filterCountries(0, e.target.value)}
    >
      <option value="0" disabled>
        Filter by region
      </option>
      <option value="Africa">africa</option>
      <option value="America">america</option>
      <option value="Asia">asia</option>
      <option value="Europe">europe</option>
      <option value="Oceania">oceania</option>
    </select>
  );
};

export default Filter;
