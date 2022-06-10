import React from 'react';
import {Nav, Navbar, Container} from "react-bootstrap";
import icon from "../Icons/Icon.png";
import filtericon from "../Icons/Filtericon.png";
import logo from "../logo/Logo.png";
import button from "../images/login-btn.png";
import SearchBar from './Search';
import "./navbar.css";

const Navbarbefore = () => {
  return (
    <div className='nav-container'>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="gap-3 px-3"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="main-logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto flex-grow-1">
              <div className="ml-70">
                <SearchBar/>
              </div>
              <Nav.Link href="#">
                {" "}
                <img className="filter" src={filtericon} alt="notification-bell" />
              </Nav.Link>
              <Nav.Link href="#">
                {" "}
                <div className="mr-60 ml-74 review"> Review </div>
              </Nav.Link>
              <Nav.Link href="#">
                {" "}
                <div className="mr-74 community">Community</div>
              </Nav.Link>
              <Nav.Link href="#">
                {" "}
                <img className="ml-74 notification" src={icon} alt="notification-bell" />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <img className="ml-74" src={button} alt="log in button" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarbefore