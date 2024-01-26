import React from "react";
import Navbar from "./Navbar/Navbar";
import ResultBox from "./ResultBox/ResultBox";
import TextArea from "./TextArea/TextArea";
import BottomResultBox from "./BottomResultBox/BottomResultBox";
import Footer from "./Footer/Footer";

function TextBox(props) {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <ResultBox />
        <TextArea />
        <BottomResultBox />
      </div>

      <Footer />
    </div>
  );
}

export default TextBox;
