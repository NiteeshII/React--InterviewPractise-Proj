import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import "./index.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">Text Analyzer</span>
          <ul className="social-links">
            <li>
              <a href="" target="_blank">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
