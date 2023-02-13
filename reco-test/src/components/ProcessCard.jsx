import React from "react";

export const ProcessCard = (props) => {
  return (
    <div className="cardContainer">
      <div className="sectionHeader">{props.title}</div>
      <p className="description">{props.description}</p>
    </div>
  );
};
