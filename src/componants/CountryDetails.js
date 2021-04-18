const CountryDetails = ({ data, pop }) => {
  return (
    <div className="countryDetails">
      <button className="btn" onClick={() => pop(0)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
        Back
      </button>
      <div className="countryDetails__country">
        <img
          src={data.flag}
          alt={data.name}
          className="countryDetails__country__fla"
        />
        <div className="countryDetails__country__details">
          <h1 className="countryDetails__country__details__name">
            {data.name}
          </h1>
          <ul className="countryDetails__country__details__essential">
            <li>
              <span>Native Name :</span> {data.nativeName}
            </li>
            <li>
              <span>Population :</span> {data.population}
            </li>
            <li>
              <span> region :</span> {data.region}
            </li>
            <li>
              <span>subregion :</span> {data.subregion}
            </li>
            <li>
              <span>topLevelDomain :</span>
              {data.topLevelDomain}
            </li>
            <li>
              {" "}
              <span>capital :</span> {data.capital}
            </li>
            <li>
              <span>currencies :</span>{" "}
              {data.currencies.map((curr) => `${curr.name} ,`)}{" "}
            </li>
            <li>
              <span>languages :</span>{" "}
              {data.languages.map((lang) => `${lang.name} ,`)}
            </li>
          </ul>
          <p className="countryDetails__country__details__borders">
            Border Countries :{" "}
            {data.borders.map((brd, i) => (
              <span key={i} className="btn">
                {brd}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
