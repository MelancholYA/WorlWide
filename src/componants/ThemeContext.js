import React, { useState, useEffect } from "react";
const ThemeContext = React.createContext([{}, () => {}]);
const ThemeContextProvider = (props) => {
  const [day, setDay] = useState(true);
  const [countries, setCountries] = useState([]);
  const [original, setOriginal] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCountries = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const result = await data.json();
      setCountries(result);
      setOriginal(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const filterCountries = (type, cont) => {
    let filtred = [];
    if (type === 0) {
      original.map(
        (country) => country.region.includes(cont) && filtred.push(country)
      );
    } else {
      original.map(
        (country) =>
          country.name.includes(cont.charAt(0).toUpperCase() + cont.slice(1)) &&
          filtred.push(country)
      );
    }
    setCountries(filtred);
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <ThemeContext.Provider
      value={{ day, setDay, countries, filterCountries, loading }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
