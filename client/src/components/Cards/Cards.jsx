import Card from "../Card/Card";
import PropTypes from "prop-types";
import "./cards.css";

const Cards = ({ allCountries,
  //  currentPage, setCurrentPage 
  }) => {
  // const countriesPerPage = 10;
  // const indexOfLastCountry = currentPage * countriesPerPage;
  // const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // const currentCountries = allCountries.slice(
  //   indexOfFirstCountry,
  //   indexOfLastCountry
  // );

  // const handlePreviousPage = () => {
  //   setCurrentPage((prevPage) => prevPage - 1);
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };
  return (
    <div>
      {/* <div className="pagination-buttons">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentCountries.length < countriesPerPage}
        >
          Next
        </button>
      </div> */}
      <div className="cards-wrapper">
        {allCountries?.map((country) => (
          <Card key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  allCountries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      flags: PropTypes.string.isRequired,
      continents: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Cards;
