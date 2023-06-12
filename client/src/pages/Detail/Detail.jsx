import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

import './detail.css'

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
      <Link to="/home" className="nav-link">Back to Home</Link>
      <h4>Name: {detail?.name}</h4>
      <img src={detail?.flags} alt={detail?.name} />
      <p>ID: {detail?.id}</p>
      <p>Capital: {detail?.capital}</p>
      <p>Continents: {detail?.continents}</p>
      <p>Subregion: {detail?.subregion}</p>
      <p>Area: {detail?.area}</p>
      <p>Population: {detail?.population}</p>
    </section>
  )
}

export default Detail