import "./card.css";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const Card = ({ country }) => {
  const { id, name, flags, continents } = country;
  return (
    <div className="card-container">
      <Link to={`/${id}`}>
      <img src={flags} alt={name} className="image" />
      <p>{name}</p>
      <p>{continents}</p>
      </Link>
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
