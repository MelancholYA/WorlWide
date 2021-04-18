const Country = ({ data }) => {
  return (
    <li className="countries__country">
      <img src={data.flag} alt={data.name + " flag"} />
      <h3 className="countries__country__name">{data.name}</h3>
      <div className="countries__country__details">
        <p>
          <span>Population : </span> {data.population}
        </p>
        <p>
          <span>Region : </span> {data.region}
        </p>
        <p>
          <span>Capital : </span> {data.capital}
        </p>
      </div>
    </li>
  );
};

export default Country;
