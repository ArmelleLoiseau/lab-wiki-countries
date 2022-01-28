import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const params = useParams();
  const selectedCountry = countries.find(
    (country) => country.alpha3Code === params.id
  );

  const borderCountries = selectedCountry.borders.map((countryAlphaCode) => {
    const found = countries.find(
      (country) => country.alpha3Code === countryAlphaCode
    );
    return found.name.common;
  });

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}
        style={{ width: '300px' }}
        alt="flag"
      />
      <h1>{selectedCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{selectedCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderCountries.length === 0 ? (
                  <p>
                    {selectedCountry.name.common} has no bordering countries{' '}
                  </p>
                ) : (
                  borderCountries.map((count, idx) => {
                    return (
                      <li key={count}>
                        <Link to={`/${selectedCountry.borders[idx]}`}>
                          {count}
                        </Link>
                      </li>
                    );
                  })
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
