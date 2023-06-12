import PropTypes from 'prop-types'
import './searchbar.css'

const Searchbar = ({ handleChange, handleSubmit }) => {
  return (
    <form className="search-container" onChange={handleChange}>
      <input
        type="search"
        placeholder="Search Country"
        className="search"
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </form>
  );
};

Searchbar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Searchbar;
