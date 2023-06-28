import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Searchbar from "../../components/SearchBar/Searchbar";
import Paginado from "../../components/Paginado/Paginado";

import {
  getCountries,
  getByName,
  orderCountries,
  orderPopulation,
  filterContinents,
  getActivity,
  byActivity
} from "../../redux/actions";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activity = useSelector((state) => state.activity);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true)

  // eslint-disable-next-line no-unused-vars
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const max = Math.round(countries.length / countriesPerPage);

  useEffect(() => {
    dispatch(getCountries())
    .then(() => {
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      console.error("Error fetching countries:", error);
    });
    dispatch(byActivity());
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedSearch = search.trim();
    if (trimmedSearch === '') {
      dispatch(getCountries());
    } else {
      const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(trimmedSearch.toLowerCase())
      );
      if (filteredCountries.length === 0) {
        alert('No countries were found matching your search. Try again.');
      } else {
        setCurrentPage(1);
        dispatch(getByName(trimmedSearch));
      }
    }
  }

  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(orderPopulation(e.target.value));
    setSearch(e.target.value);
  }

  function handleContinents(e) {
    e.preventDefault();
    dispatch(filterContinents(e.target.value));
    setSearch(e.target.value);
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(orderCountries(e.target.value));
    setSearch(e.target.value);
  }

  function handleActivity(e){
    e.preventDefault()
    dispatch(byActivity(e.target.value))
    setSearch(e.target.value)
  }

  useEffect(() => {  
    dispatch(getActivity());   
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
          <select className="order" onChange={handleOrderPopulation}>
            <option value="Max" key="Max">
              Max population
            </option>
            <option value="Min" key="Min">
              Min population
            </option>
          </select>
          <select
            className="order"
             onChange={handleActivity}
          >
            <option value="All">All activities</option>
            {activity.map((e) => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
          <select className="order" onChange={handleOrder}>
            <option value="Asc" key="Asc">
              Ascendente
            </option>
            <option value="Desc" key="Desc">
              Descendente
            </option>
          </select>
          <select className="filter" onChange={handleContinents}>
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
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
          </div>
      ) : (
        countries
          .slice(
            (currentPage - 1) * countriesPerPage,
            (currentPage - 1) * countriesPerPage + countriesPerPage
          )
          ?.map((e) => {
            return (
              <Link className="card" to={"/home/" + e.id} key={e.id}>
                <div>
                  <img loading="lazy" className="flags-img" src={e.flags} alt={e.name} />
                  <p className="text">{e.name}</p>
                  <p className="text">{e.id}</p>
                  <p className="text">{e.continents}</p>
                  <p className="text">{e.population}</p>
                </div>
              </Link>
            );
          })
          )}
      </div>
      
    </div>
  );
};

export default Home;
