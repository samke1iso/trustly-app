import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import recent from "../../images/intro-recentpostpng.png";
import review1 from "../../images/intro-recentrev1.png"
import review2 from "../../images/intro-recentrev2.png";
import review3 from "../../images/intro-recentrev3.png";
//import community from "../../images/intro-community.png";

import "./introstyles.css";

const Intro3 = () => {
  return (
    <div className="intro-section3">
      <h2 className="intro3-header"> Community’s recent post</h2>
      <img className="post-sample" src={recent} alt="post Example" />
      <Container bg="dark">
        <Row>
          <h3 className="recentrev">Recent Reviews</h3>
          <Col sm>
            <img className="review-sample" src={review1} alt="recent review" />
          </Col>
          <Col sm>
            <img className="review-sample" src={review2} alt="recent review" />
          </Col>
          <Col sm>
            <img className="review-sample" src={review3} alt="recent review" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro3;
