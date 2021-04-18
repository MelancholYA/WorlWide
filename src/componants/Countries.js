import Country from "./Country";
import CountryDetails from "./CountryDetails";
import { ThemeContext } from "./ThemeContext";
import { useState, useContext, useRef } from "react";
const Countries = () => {
  const { countries, loading } = useContext(ThemeContext);
  const [popUp, setPopUp] = useState({
    status: false,
  });
  const con = useRef();
  const [count, setCount] = useState(8);

  const pop = (coutry) => {
    if (coutry === 0)
      return setPopUp({
        status: false,
      });
    console.log(coutry);
    setPopUp({ ...popUp, status: true, data: coutry });
  };

  return (
    <>
      {loading ? (
        "loading ..."
      ) : (
        <>
          {countries.length === 0 ? (
            <div className="nodata">
              <h1>No Result</h1>
            </div>
          ) : (
            <>
              <ul className="countries" ref={con}>
                {popUp.status && <CountryDetails data={popUp.data} pop={pop} />}

                {countries
                  .filter((country, i) => i < count)
                  .map((country, i) => (
                    <div key={i} onClick={() => pop(country)}>
                      <Country data={country} />
                    </div>
                  ))}
              </ul>
              <button
                className="more"
                onClick={() => {
                  setCount(count + 8);
                }}
              >
                {count < countries.length ? "More" : "No More Countries"}
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Countries;
