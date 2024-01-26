import React from "react";
import "./Footer.scss";

function Footer(props) {
  const footerList = ["About US", "Contact US"];
  return (
    <footer className="footerbar">
      <div className="container">
        <div className="footer-elements">
          <p>Build by Niteesh Varma</p>
          <ul className="other-pages">
            {footerList.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
