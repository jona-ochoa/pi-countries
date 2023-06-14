import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./detail.css";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      if (data && data.name && data.id && data.flags) {
        const getCountryExist = detail.id === data.id;
        if (!getCountryExist) {
          setDetail(data);
        }
      } else {
        alert("No found Country");
      }
    });
  }, [id]);

  return (
    <section className="detail-section">
      <Link to="/home" className="nav-link">
        Back to Home
      </Link>
      <div className="detail-wrapper">
        <div className="detail-flex">
          <img src={detail?.flags} alt={detail?.name} />
        </div>
        <div className="detail-flex-text">
          <h2>Name: {detail?.name}</h2>
          <h2>ID: {detail?.id}</h2>
          <h2>Capital: {detail?.capital}</h2>
          <h2>Continents: {detail?.continents}</h2>
          <h2>Subregion: {detail?.subregion}</h2>
          <h2>Area: {detail?.area}</h2>
          <h2>Population: {detail?.population}</h2>
        </div>
      </div>
    </section>
  );
};

export default Detail;
