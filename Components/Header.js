import React, { useEffect, useRef, useState } from "react";
import vakil from "./Images/vakil.svg";
import "./CSS/style.css";
import { Dropdown } from "react-bootstrap";
import Navigation from "./Navigation";

const Header = () => {
  const [showClass, setShowClass] = useState(false);

  const classShifter = function () {
    // console.log(window.scrollY);
    if (window.scrollY > 80) {
      setShowClass(true);
    } else {
      setShowClass(false);
    }
  };

  window.addEventListener("scroll", classShifter);
  return (
    <div
      className={` d-flex flex-row justify-content-between align-items-center header ${
        showClass ? "active" : "nav"
      }`}
    >
      <img src={vakil} className="thumbnail image" />
      <Dropdown>
        <Dropdown.Toggle variant="info">Consult an Expert</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Link 1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Navigation />
    </div>
  );
};

export default Header;
