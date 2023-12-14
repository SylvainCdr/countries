import "./style.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// API LINK : https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,translations,latlng,maps,population,flags,capitalInfo

function Search() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,translations,latlng,maps,population,flags,capitalInfo"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.translations.fra.common
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  return (
    <div className="homepage">
      {/* DEBUT FORMULAIRE RECHERCHE */}
      <div className="search">
        {/* <h1>Recherche de pays</h1> */}
        <input
          type="text"
          placeholder="Recherche de pays"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* FIN FORMULAIRE RECHERCHE */}

      {/* AFFICHAGE DE TOUS LES PAYS + RESULTATS DE LA RECHERCHE */}
      <div className="displayCountries">
        {filteredCountries.map((country, key) => (
          <div className="displayCountries_card" key={key}>
            <img src={country.flags.svg} alt={country.name.common} />
            <h3>{country.translations.fra.official}</h3>
            <h4>{country.capital}</h4>
            <Link to={`/country/${country.name.official}`}>
              <button>Plus d'infos</button>
            </Link>
          </div>
        ))}
      </div>
      {/* FIN AFFICHAGE DE TOUS LES PAYS + RESULTATS DE LA RECHERCHE */}

      
    </div>
  );
}

export default Search;
