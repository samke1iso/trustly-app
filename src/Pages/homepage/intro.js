import React from 'react';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import intrologo from "../../logo/intro-logo.png";
import typing from "../../images/intro-image1.png";
import example from "../../images/intro-image2.png";
import signupbtn from "../../images/signup.png"

import "./introstyles.css";


const Intro = () => {

  return (
    <div className="intro-section">
      <Container bg="dark">
        <Row>
          <Col sm>
            <h1 className="welcome"> Welcome to</h1>
            <img className="intro-logo" src={intrologo} alt="Trustly" />
            <p className="branding">
              An anonymous, diverse community for professionals in tech to be
              heard and supported.
            </p>
            <Link to="login"><img
              className="signupbtn"
              src={signupbtn}
              alt="Trustly"
            /></Link>
          </Col>
          <Col sm>
            <img className="introimage" src={typing} alt="Trustly" />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <img className="intro-example" src={example} alt="Trustly" />
          </Col>
          <Col sm>
            <h2 className="slogan"> Empower, Inform, Support</h2>
            <p className="slogan-text">
              {" "}
              Whether you’re looking to add a company review, share your story
              or make connections, Trustly is a space created to empower, inform
              and support your professional journey. We believe we’re stronger
              together.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Intro