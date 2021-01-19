import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="py-lg-3"
      variant="dark"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Navbar.Brand href="/">Aaditya Ghag</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
          <Nav.Link href="/experience">Experience</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
