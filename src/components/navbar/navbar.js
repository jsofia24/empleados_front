import React from "react";
import { Navbar, Container, Nav, DropdownButton, Dropdown} from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fa-light fa-coffee-beans} from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar id="navbar" bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JuanitoValdez.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">
                <Dropdown.Header>
                    <FontAwesomeIcon icon="fa-light fa-coffee-beans" />
                </Dropdown.Header>
              <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
