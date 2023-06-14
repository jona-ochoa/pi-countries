import { useState } from "react";
import PropTypes from "prop-types";
import "./paginado.css";

function Paginado({ currentPage, setCurrentPage, max }) {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setCurrentPage(parseInt(currentPage) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setCurrentPage(parseInt(currentPage) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setCurrentPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(max) ||
        isNaN(parseInt(e.target.value))
      ) {
        setCurrentPage(1);
        setInput(1);
      } else {
        setCurrentPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="paginado-container">
      <button disabled={currentPage <= 1} onClick={previousPage}>
        {"<"}
      </button>
      <input
        className="paginado-input"
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <h2> of {max} </h2>
      <button disabled={currentPage >= Math.ceil(max)} onClick={nextPage}>
        {">"}
      </button>
    </div>
  );
}

Paginado.propTypes = {
  currentPage: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  max: PropTypes.func.isRequired,
};

export default Paginado;
