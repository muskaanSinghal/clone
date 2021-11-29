import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import watchvideo from "./Images/watchvideo.png";

const Banner = function () {
  return (
    <div className="d-flex justify-content-center align-items-center main">
      <main className="text-start w-75 mainWithin">
        <h1>Register Your OPC With Vakilsearch</h1>
        <hr className="w-25" />
        <Container>
          <Row>
            <Col lg="5" className="text-start">
              <p>
                Are you starting a business on your own and want to limit your
                liability? You should register as an OPC. Pay just ₹499/- to get
                started and pay the rest conveniently after the procedure
                begins. Enjoy simple processing, fast updates, and, best of all,
                no hidden fees.
              </p>
              <br />
              <p>
                <span>*Govt.fees & taxes </span>vary by state and are not
                included in the price.
              </p>
              <div>
                <img src={watchvideo} className="thumbnail" />
              </div>
            </Col>
            <Col lg="7">
              <form>
                <input type="email" className="feild " placeholder="Email*" />
                <input
                  type="number"
                  className="feild "
                  placeholder="Mobile  Number*"
                />
                <input type="text" className="feild " placeholder="State*" />

                <p>Get easy updates through Whatsapp</p>
                <div className="text-center">
                  <button type="submit" className="submitBtn">
                    Continue OPC at Rs 499
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Banner;
