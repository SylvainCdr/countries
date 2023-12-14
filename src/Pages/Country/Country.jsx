import "./style.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// API LINK : https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,translations,latlng,maps,population,flags,capitalInfo

// Fonction qui récupère les données de l'API et les affiche dans la page Country
function Country() {
  const { name } = useParams();
  const [land, setLand] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setLand(data);
      });
  }, []);

  console.log(land);

  // Affichage des infos du pays sélectionné
  return land.map((details) => (
    <div className="main">
      <div className="country" key={details.capital}>
        <div className="country_flag">
          <h1>{details.translations.fra.official}</h1>
          <img src={details.flags.svg} alt={details.name.common} />
        </div>
        <div className="country_details">
          <p>
            <span>
              Capitale(s) :
              {details.capital.map((capital) => (
                <span key={"key_" + capital}>{capital} </span>
              ))}
            </span>
          </p>
          <p>
            <span>Continent : </span>
            {details.region}
          </p>
          <p>
            <span>Région : </span>
            {details.subregion}
          </p>
          <p>
            <span>Population : </span>
            {details.population}
          </p>
          <p>
            <span>
              Langue(s) :
              {Object.values(details.languages).map((language) => (
                <span key={"key_" + language}>{language} </span>
              ))}
            </span>
          </p>
          <p>
            <span>
              Devise(s) :
              {Object.values(details.currencies).map((currency) => (
                <span key={"key_" + currency.name}>
                  {currency.name} ({currency.symbol})
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>

      {/* Affichage de la carte du pays en mapant du latlng  */}
      
        <div className="map">
          <iframe
            title="map"
            src={`https://maps.google.com/maps?q=${details.latlng}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="450px"
            

          ></iframe>
      </div>

      <Link to="/">
        <button className="Back_btn">Back</button>
      </Link>
    </div>
  ));
}

export default Country;
