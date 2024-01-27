import React, { useState } from "react";
import "./TextArea.scss";
import { useTextData } from "../../Context/useData";

function TextArea(props) {
  const { handleChange } = useTextData();
  // const [state, setState] = useState({
  //   words: 0,
  //   character: 0,
  //   sentense: 0,
  //   paragraphs: 0,
  // });

  // const handleChange = (e) => {
  //   if (e.target.value) {
  //     let content = e.target.value;
  //     let newcontent = content.trim();
  //     let wordslist = newcontent.split(/\s/);
  //     console.log(
  //       wordslist.filter((ele) => ele !== ""),
  //       content.length
  //     );

  //     setState({
  //       ...state,
  //       words: wordslist.length,
  //       character: content.length,
  //     });
  //   }
  // };

  // console.log(state);

  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      onChange={handleChange}
    />
  );
}

export default TextArea;
