import React from "react";
import "./BottomResult.scss";
import { useTextData } from "../../Context/useData";

function BottomResultBox(props) {
  const { updates } = useTextData();
  const resultitems = [
    {
      title: "Average Reading time :",
      value: "~ 1 minute",
    },

    {
      title: "Longest Word : ",
      value: updates.longestWord,
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
