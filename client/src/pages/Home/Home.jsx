import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Searchbar from "../../components/SearchBar/Searchbar";
import Paginado from "../../components/Paginado/Paginado";

import { getCountries, getByName, orderCountries } from "../../redux/actions";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const max = Math.round(allCountries.length / countriesPerPage);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getByName(search));
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderCountries(e.target.value));
    setSearch(e.target.value);
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="home-page-search">
        <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
        <Paginado
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          max={max}
        />
        <div className="wrapper-filter">
          <select className="order" onChange={handleOrder}>
            <option value="Asc" key="Asc">
              Ascendente
            </option>
            <option value="Desc" key="Desc">
              Desendente
            </option>
          </select>
          <select
            className="filter"
            // value={selectedContinent} onChange={handleContinents}
          >
            <option value="All" key="All">
              All continents
            </option>
            <option value="Africa" key="Africa">
              Africa
            </option>
            <option value="Antarctica" key="Antarctica">
              Antarctica
            </option>
            <option value="Asia" key="Asia">
              Asia
            </option>
            <option value="Europe" key="Europe">
              Europe
            </option>
            <option value="North America" key="NorthAmerica">
              North America
            </option>
            <option value="Oceania" key="Oceania">
              Oceania
            </option>
            <option value="South America" key="SouthAmerica">
              South America
            </option>
          </select>
        </div>
      </div>
      <div className="home-wrapper">
        {allCountries
          .slice(
            (currentPage - 1) * countriesPerPage,
            (currentPage - 1) * countriesPerPage + countriesPerPage
          )
          .map((e) => {
            return (
              <Link className="card" to={"/" + e.id} key={e.id}>
                <div>
                  <img className="flags-img" src={e.flags} alt={e.name} />
                  <p className="text">{e.name}</p>
                  <p className="text">{e.id}</p>
                  <p className="text">{e.continents}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
