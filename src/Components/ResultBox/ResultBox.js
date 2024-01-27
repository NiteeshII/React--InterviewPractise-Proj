import React from "react";
import "./ResultBox.scss";
import { useTextData } from "../../Context/useData";

function ResultBox(props) {
  const { state, updates } = useTextData();
  const resultBar = [
    {
      title: "Words",
      value: state.words,
    },
    {
      title: "Characters",
      value: state.character,
    },
    {
      title: "Sentences",
      value: state.sentense,
    },
    {
      title: "Paragraphs ",
      value: state.paragraphs,
    },
    {
      title: "Pronouns",
      value: updates.pronounCount,
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
