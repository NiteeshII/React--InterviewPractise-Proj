// CountryList.js

import React from "react";
import MapIcon from "../Icons/mapIcon";
import { useNavigate } from "react-router-dom";
import Ukflag from "../Icons/icons8-uk-48.png";
import Usaflag from "../Icons/icons8-usa-flag-48.png";
import GermanyFlag from "../Icons/icons8-germany-48.png";
import "./CountryListStyles.css"; // Import the stylesheet

const CountryList = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: "United States",
      img: Usaflag,
    },
    {
      id: 2,
      name: "United Kingdom",
      img: Ukflag,
    },
    {
      id: 3,
      name: "Germany",
      img: GermanyFlag,
    },
  ];

  return (
    <div className="country-list-container">
      <div className="map-icon-background">
        <MapIcon />
      </div>
      <table className="country-list-table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Country List</th>
            <th>Country Flag</th>
            {/* <th>
              <MapIcon />
            </th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => {
                navigate(`/country-data/${item.id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.img} alt={item.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
