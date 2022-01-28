import React from 'react';
import CountriesList from '../components/CountriesList';
import { Outlet } from 'react-router-dom'

const Home = ({countries}) => {
  return (<div>
    <h1>Home</h1>
    <Outlet />
    <div className="container">
      <div className="row">
        <CountriesList countries={countries}/>
      </div>
    </div>
  </div>);
};

export default Home;
