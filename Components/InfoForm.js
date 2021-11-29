import { Form, FormControl, FormGroup } from "react-bootstrap";
import React, { useState, useRef, useEffect } from "react";
// import { FormControl } from "react-bootstrap";
import "./CSS/style.css";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

const InfoForm = React.forwardRef((props, ref) => {
  const [initCoords, setInitCoords] = useState();
  const [addClass, setAddClass] = useState(false);

  const classShifter = function () {
    if (
      window.scrollY >
        props.overview.current.getBoundingClientRect().y +
          window.scrollY -
          100 &&
      window.scrollY <
        props.column.current.getBoundingClientRect().y + window.scrollY - 400
    ) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  window.addEventListener("scroll", classShifter);
  return (
    <form className={addClass ? "sticky" : "block"}>
      <h3>Get me more details</h3>
      <input type="email" className="feild " placeholder="Email*" />
      <input type="number" className="feild " placeholder="Mobile  Number*" />
      <input type="text" className="feild " placeholder="State*" />
      <button type="submit" className="submitBtn">
        Continue OPC at Rs 499
      </button>
    </form>
  );
});

export default InfoForm;
