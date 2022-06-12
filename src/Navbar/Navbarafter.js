import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Homepage from "../Pages/homepage/Home";
import Reviews from "../Pages/Reviews";
import Community from "../Pages/Community";
import Login from "../Pages/login/Login";

import icon from "../Icons/Icon.png";
import filtericon from "../Icons/Filtericon.png";
import logo from "../logo/Logo.png";
import avatar from "../images/loggedinavatar.png";
import SearchBar from "./Search";
import "./navbar.css";

export default class Navbarafter extends Component {
  render() {
    return (
      <Router>
        <div className="nav-container">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg=".bg-transparent"
            variant="dark"
            className="gap-3 px-3"
          >
            <Container>
              <Navbar.Brand href="/home">
                <img className="main-logo" src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto flex-grow-1">
                  <div className="ml-70">
                    <SearchBar />
                  </div>
                  <Nav.Link href="/home">
                    {" "}
                    <img
                      className="filter"
                      src={filtericon}
                      alt="notification-bell"
                    />
                  </Nav.Link>
                  <Nav.Link href="/reviews">
                    {" "}
                    <div className="mr-60 ml-74 review"> Review </div>
                  </Nav.Link>
                  <Nav.Link href="/community">
                    {" "}
                    <div className="mr-74 community">Community</div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    {" "}
                    <img
                      className="ml-74 notification"
                      src={icon}
                      alt="notification-bell"
                    />
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/login">
                    <img className="ml-74" src={avatar} alt="log in button" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Router>
    );
  }
}
