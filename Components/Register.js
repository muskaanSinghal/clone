import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import call from "./Images/call.svg";
import note from "./Images/note.svg";
import mail from "./Images/mail.svg";

const Register = React.forwardRef((props, ref) => {
  return (
    <div className="text-center register" ref={ref}>
      <h2>One Person Company Registration With Vakilsearch</h2>
      <p>
        Vakilsearch helps you register your one person company in India in 3
        simple steps.
      </p>

      <Container>
        <Row>
          <Col lg="4" className="text-center">
            <img src={call} />
            <p>
              We reserve the name of your company and help you obtain a DSC and
              DIN.
            </p>
            <p>Step 1</p>
          </Col>
          <Col lg="4" className="text-center">
            <img src={note} />
            <p>
              We draft and file the documents required for your OPC registration
              (MoA, AoA, PAN, & TAN).
            </p>
            <p>Step 2</p>
          </Col>
          <Col lg="4" className="text-center">
            <img src={mail} />
            <p>
              We help you with the post-registration formalities and
              compliances.
            </p>
            <p>Step 3</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Register;
