import React from "react";

export const ProcessCard = (props) => {
  return (
    <div className="">
      <div>{props.title}</div>
      <p>
        {/* This process exmains the payroll flow within the Finanace department.
        This process was created for Ziv Cohen on 06.07.2021, 17:58 */}
        {props.description}
      </p>
    </div>
  );
};
