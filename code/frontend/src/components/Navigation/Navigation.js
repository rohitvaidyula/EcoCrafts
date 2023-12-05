import React from "react";
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends React.Component {
    render() {
        return (
          <div className="navigation container">
            <Navbar expand="lg" className="m-auto">
                <Container>
                    <Navbar.Brand href="#home">Icon</Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Brand href="#home">CEM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home">ABOUT</Nav.Link>
                        <Nav.Link href="#link">INFO</Nav.Link>
                        <Nav.Link href="#link">COMMUNITY</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </div>
        );
      }
}

export default Navigation;