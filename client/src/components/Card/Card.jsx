import "./card.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Card = ({ country }) => {
  const { id, name, flags, continents } = country;
  return (
    <div className="card-container">
      <NavLink to={`/${id}`} className="nav-link">
        <img src={flags} alt={name} className="image" />
        <p>{name}</p>
        <p>{id}</p>
        <p>{continents}</p>
      </NavLink>
    </div>
  );
};

Card.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    flags: PropTypes.string,
    continents: PropTypes.string,
  }),
};

export default Card;
