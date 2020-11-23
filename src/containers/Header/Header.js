import React, { useState } from "react";
import "./Header.scss";
const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  
  return (
    <>
      <header id="header">
        <nav className="nav">
          <a id="logo" href="/"></a>
          <button
            className={"toggle-menu " + (menuVisible ? "active" : "")}
            onClick={() => toggleMenu(true)}
          >
            <span></span>
          </button>
        </nav>
      </header>

      <div id="menu" className={menuVisible ? "open" : ""}>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <footer className="menu-footer">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-twitter fa-fw"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope fa-fw"></i>
                  Subscribe
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Header;
