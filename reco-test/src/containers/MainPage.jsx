import React from "react";
import { ProcessSection } from "../components/ProcessSection";
import "./index.css";

const myCardsData = [
  { title: "Card 1", description: "Description for card 1" },
  { title: "Card 2", description: "Description for card 2" },
  { title: "Card 3", description: "Description for card 3" },
];

const cardsData = [
  {
    title: "Card 1",
    description:
      "This process exmains the payroll flow within the Finanace department.This process was created for Ziv Cohen on 06.07.2021, 17:58",
  },
  { title: "Card 2", description: "Description for card 2" },
  { title: "Card 3", description: "Description for card 3" },
];

export const MainPage = () => {
  return (
    <div>
      <div>
        <h1 className="header">PROCESS LIBRARY</h1>
      </div>
      <button>Create new</button>

      <ProcessSection title="My processes" processes={myCardsData} />
      <ProcessSection title="Recommended" processes={cardsData} />
    </div>
  );
};
