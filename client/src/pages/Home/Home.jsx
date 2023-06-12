import { useEffect, useState } from "react";

import Searchbar from "../../components/SearchBar/Searchbar";
import Cards from "../../components/Cards/Cards";
import { getCountries, getByName } from "../../redux/actions";

import { useDispatch, useSelector } from "react-redux";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(search));
    setCurrentPage(1);
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="home-container">
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      {allCountries && (
        <Cards
          allCountries={allCountries}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Home;
