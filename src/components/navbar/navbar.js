import React from "react";
import { Navbar, Container, Nav, DropdownButton, Dropdown, Row} from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();
export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  Logout(){
    cookies.remove('_s');
    window.location.reload();
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JuanitoValdez.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="navbar" className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">
                <Dropdown.Header id="dropdown-header">
                  <Row>
                  <FontAwesomeIcon icon={faUserCircle}/>
                  </Row>
                  <Row>
                   #USUARIO# 
                  </Row>
                </Dropdown.Header>
                <Dropdown.Divider/>
              <Dropdown.Item onClick={() => this.Logout()}>Cerrar sesión</Dropdown.Item>
             </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
