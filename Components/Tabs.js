import { ListGroup, Nav, Navbar, NavLink } from "react-bootstrap";
import { useState } from "react";

const Tabs = function (props) {
  const [addClass, setAddClass] = useState(false);

  const classShifter = function () {
    if (
      window.scrollY >
        props.overview.current.getBoundingClientRect().y +
          window.scrollY -
          100 &&
      window.scrollY <
        props.column.current.getBoundingClientRect().y + window.scrollY - 600
    ) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  window.addEventListener("scroll", classShifter);
  return (
    <nav className="navbar navbar-light bg-grey" id="navSection">
      <ul
        className={`list nav ${
          addClass ? "tabSticky" : "tabBlock"
        } flex-column `}
        id="navbar"
      >
        <li className="nav-item">
          <a href="#overview" active className="nav-link">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a href="#benifits" className="nav-link">
            Benifits of OPC
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Documents Required{" "}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Process for OPC
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Package Inclusion
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Why VakilSearch
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-item">
            The Glossary
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
