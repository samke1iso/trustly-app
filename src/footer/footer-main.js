import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoFooter from "../logo/footer-logo.png";
import icon1 from "../Icons/footer-instagram.png";
import icon2 from "../Icons/footer-facebook.png";
import icon3 from "../Icons/footer-twitter.png";
import icon4 from "../Icons/footer-linkedin.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <Container>
          <Row>
            <Col sm>
              {" "}
              <h4 className="footlist">About</h4>
              <ul>
                {" "}
                <li>About</li>
                <li>Jobs</li>
                <li>Contact</li>
                <li>Blogs</li>
                <li>What people say about us</li>
              </ul>{" "}
            </Col>
            <Col sm>
              <h4 className="footlist">Businesses</h4>
              <ul>
                <li>Products</li>
                <li>Plans and pricing</li>
                <li>Blog for businesses</li>
                <li>Log in as business</li>
              </ul>
            </Col>
            <Col sm>
              {" "}
              <span>
                <img className="footer-logo" src={logoFooter} alt="Trustly" />
              </span>
              <span>
                <img className="social-media" src={icon1} alt="instagram" />
              </span>
              <span>
                <img className="social-media" src={icon2} alt="facebook" />
              </span>
              <span>
                <img className="social-media" src={icon3} alt="Twitter" />
              </span>
              <span>
                <img className="social-media" src={icon4} alt="Instagram" />
              </span>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Footer;
