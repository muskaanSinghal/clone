import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./CSS/style.css";
const Columns = React.forwardRef((props, ref) => {
  return (
    <div className="text-center columns my-5" ref={ref}>
      <h2>Types of Government Registrations</h2>
      <div className="d-flex flex-row justify-content-around align-items-center">
        <div className="text-center">
          <p>One Person Company</p>

          <ListGroup className="p-2 box" variant="flush">
            <ListGroup.Item className="p-2">Sole promoters</ListGroup.Item>
            <ListGroup.Item className="p-2">
              Possible, but severly unlikely
            </ListGroup.Item>
            <ListGroup.Item className="p-2">Yes</ListGroup.Item>
            <ListGroup.Item className="p-2">Few Benifits</ListGroup.Item>
            <ListGroup.Item className="p-2">Yes</ListGroup.Item>
            <ListGroup.Item className="p-2">High</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="text-center">
          <p>One Person Company</p>
          <ListGroup className="p-2 box" variant="flush">
            <ListGroup.Item>Sole promoters</ListGroup.Item>
            <ListGroup.Item>Possible, but severly unlikely</ListGroup.Item>
            <ListGroup.Item>Yes</ListGroup.Item>
            <ListGroup.Item>Few Benifits</ListGroup.Item>
            <ListGroup.Item>Yes</ListGroup.Item>
            <ListGroup.Item>High</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="text-center">
          <p>One Person Company</p>
          <ListGroup className="p-2 box" variant="flush">
            <ListGroup.Item>Sole promoters</ListGroup.Item>
            <ListGroup.Item>Possible, but severly unlikely</ListGroup.Item>
            <ListGroup.Item>Yes</ListGroup.Item>
            <ListGroup.Item>Few Benifits</ListGroup.Item>
            <ListGroup.Item>Yes</ListGroup.Item>
            <ListGroup.Item>High</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="text-center">
          <p>One Person Company</p>
          <ListGroup className="p-2 box" variant="flush">
            <ListGroup.Item>Sole promoters</ListGroup.Item>
            <ListGroup.Item>Possible, but severly unlikely</ListGroup.Item>
            <ListGroup.Item>Yes</ListGroup.Item>
            <ListGroup.Item>Few Benifits</ListGroup.Item>
            <ListGroup.Item>Yes</ListGroup.Item>
            <ListGroup.Item>High</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
});

export default Columns;
