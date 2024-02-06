import React from "react";

const Pill = ({ item, onClick }) => {
  return (
    <div className="pill-container" onClick={onClick}>
      <img src={item.image} alt={item.domain} />
      <span>{item.firstName} &times;</span>
    </div>
  );
};

export default Pill;
