import React from "react";
import { ProcessCard } from "./ProcessCard";
import "./index.css";

export const ProcessSection = (props) => {
  return (
    <div className="sectionContainer">
      <div className="sectionHeader">{props.title}</div>
      <div className="cardsContainer">
        {props.processes?.map((item) => {
          return (
            <ProcessCard title={item.title} description={item.description} />
          );
        })}
      </div>
    </div>
  );
};
