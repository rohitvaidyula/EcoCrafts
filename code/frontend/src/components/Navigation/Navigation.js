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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home">EcoCrafts</Nav.Link>
                        <Nav.Link href="#link">Recipes</Nav.Link>
                        {/* Upload custom recipes to the communities tab.*/}
                        <Nav.Link href="#link">Community</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </div>
        );
      }
}

export default Navigation;