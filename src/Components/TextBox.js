import React from "react";
import Navbar from "./Navbar/Navbar";
import ResultBox from "./ResultBox/ResultBox";
import TextArea from "./TextArea/TextArea";

function TextBox(props) {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <ResultBox />
        <TextArea />
        <div className="main-footer">
          <div className="resultbox">
            <span className="box-title">Average Reading Time</span>
            <span className="box-value">~ 1 minute</span>
          </div>
          <div className="resultbox">
            <span className="box-title">Longest Word</span>
            <span className="box-value">Structure</span>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="footer-container">
          <div>Build by Niteeah</div>
          <span>About US | contct US</span>
        </div>
      </nav>
    </div>
  );
}

export default TextBox;
