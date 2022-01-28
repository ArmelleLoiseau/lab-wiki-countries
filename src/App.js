import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import countriesData from '../src/countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home countries={countriesData} />}>
          <Route
            path=":id"
            element={<CountryDetails countries={countriesData} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
