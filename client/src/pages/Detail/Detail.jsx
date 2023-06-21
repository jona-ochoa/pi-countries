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

  // const activities = detail.activities?.map((e) => {
  //   return {
  //     name: e.name,
  //     difficulty: e.difficulty,
  //     duration: e.duration,
  //     season: e.season,
  //   };
  // });

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
          <p>ID: {detail?.id}</p>
          <p>Name: {detail?.name}</p>
          <p>Capital: {detail?.capital}</p>
          <p>Continents: {detail?.continents}</p>
          <p>Subregion: {detail?.subregion}</p>
          <p>Area: {detail?.area}</p>
          <p>Population: {detail?.population}</p>
          <p>Activities: {detail?.activities?.map((e) => {
            return (
              <div key={e.id}>
              <p>{e.name}</p>
              <p>{e.difficulty}</p>
              <p>{e.duration}</p>
              <p>{e.season}</p>
              </div>
            )
          })}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
