import Card from "../Card/Card";
import PropTypes from "prop-types";
import "./cards.css";

const Cards = ({ allCountries }) => {
  const allCountry = allCountries;
  return (
    <div className="cards-container">
      {allCountry?.map((country) => (
        <Card key={country.id} country={country} />
      ))}
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
};

export default Cards;
