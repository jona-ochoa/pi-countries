import { useState } from "react";
import "./Home.css";
import PropTypes from "prop-types";

const Searchbar = ({ onSearch }) => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Enter activity ID"
        onChange={handleChange}
        value={name}
        className="search"
      />
      <button
        onClick={() => {
          onSearch(name);
          setName("");
        }}
      >
        ADD ACTIVITY
      </button>
    </div>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
