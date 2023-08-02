import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./detail.css";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`http://pi-countries-api-nine.vercel.app/api/v1/countries/${id}`).then(({ data }) => {
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
          <p>ID: {detail?.id}</p>
          <p>Name: {detail?.name}</p>
          <p>Capital: {detail?.capital}</p>
          <p>Continents: {detail?.continents}</p>
          <p>Subregion: {detail?.subregion}</p>
          <p>Area: {detail?.area}</p>
          <p>Population: {detail?.population}</p>
          <p>
            ACTIVITIES
            {detail?.activities?.length > 0 ? (
              detail?.activities?.map((e) => {
                return (
                  <div key={e.id}>
                    <p>Name: {e.name}</p>
                    <p>Difficulty: {e.difficulty}</p>
                    <p>Duration: {e.duration}</p>
                    <p>Season: {e.season}</p>
                  </div>
                );
              })
            ) : (
              <p>0</p>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
