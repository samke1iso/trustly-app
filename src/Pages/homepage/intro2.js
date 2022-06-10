import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sample from "../../images/intro-reviewcard1.png";
import community from "../../images/intro-community.png";


import "./introstyles.css";

const Intro2 = () => {
  return (
    <div className="intro-section2">
      <Container bg="dark">
        <Row>
          <Col sm>
            <h2 className="honesty"> Honest Reviews</h2>
            <p className="fillertext">
              We’ve all had ups and downs in our careers. Share your own
              professional experience anonymously, or browse our honest reviews.
            </p>
          </Col>
          <Col sm>
            <img className="review-example" src={sample} alt="Review Example" />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <img
              className="community-sample"
              src={community}
              alt="Community post screenshot"
            />
          </Col>
          <Col sm>
            <h2 className="commSupport"> Community support</h2>
            <p className="fillertext2">
              {" "}
              Browse anonymous community posts using our filters, or if you’re
              ready to share your experience, the Trustly community is all ears.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Intro2