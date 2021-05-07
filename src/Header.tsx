import React from 'react';
import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";

const Header: React.FC = () => {
	return(
		<>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/counter">Couter</Nav.Link>
              <Nav.Link href="/persons">Persons</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="nav-scroller bg-white shadow-sm">
        <Container>
          <nav className="nav nav-underline">
          </nav>
        </Container>
      </div>
		</>
	)
}

export default Header;