import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div>
              <Link
                to={country.alpha3Code}
                className="list-group-item list-group-item-action"
                key={country.name.common}
              >
                {' '}
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                ></img>
                <p>{country.name.common}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
