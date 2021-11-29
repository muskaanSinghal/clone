import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import drop from "./Images/drop.svg";
import { useState } from "react";
const Navigation = function () {
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
    <ul
      className={`navigation d-flex flex-row justify-content-around align-items-center `}
    >
      <li>
        <a href="#">
          Business Setup <img src={drop} />
        </a>
      </li>
      <li>
        <a href="#">
          Tax & Compliance <img src={drop} />
        </a>
      </li>
      <li>
        <a href="#">
          Trademark & IP <img src={drop} />
        </a>
      </li>
      <li>
        <a href="#">
          Fundraising <img src={drop} />
        </a>
      </li>
      <li>
        <a href="#">
          NGO <img src={drop} />
        </a>
      </li>
      <li>
        <a href="#">
          Property & Personal <img src={drop} />
        </a>
      </li>
      <li>
        <a href="#">
          Partner With Us <img src={drop} />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faBars} />
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
