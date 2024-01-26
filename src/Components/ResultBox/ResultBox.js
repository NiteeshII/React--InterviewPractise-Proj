import React from "react";
import "./ResultBox.scss";

function ResultBox(props) {
  const resultBar = [
    {
      title: "Words",
      value: 0,
    },
    {
      title: "Characters",
      value: 0,
    },
    {
      title: "Sentences",
      value: 0,
    },
    {
      title: "Paragraphs ",
      value: 0,
    },
    {
      title: "Pronouns",
      value: 0,
    },
  ];

  return (
    <div className="main-resultbox">
      {resultBar?.map((item, index) => {
        return (
          <div className="resultbox" key={item.title}>
            <span className="box-title">{item.title}</span>
            <span className="box-value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ResultBox;
