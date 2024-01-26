import React from "react";
import "./BottomResult.scss";

function BottomResultBox(props) {
  const resultitems = [
    {
      title: "Average Reading time :",
      value: "-",
    },

    {
      title: "Longest Word : ",
      value: "-",
    },
  ];
  return (
    <div className="bottom-result-bar">
      {resultitems?.map(({ title, value }) => {
        return (
          <div className="bottom-resultbox" key={title}>
            <span className="box-title">{title}</span>
            <span className="box-value">{value}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BottomResultBox;
