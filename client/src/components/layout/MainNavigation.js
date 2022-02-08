// import { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function MainNavigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar bg="primary" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand onClick={() => setExpanded(false)}>
            Elijah Romer
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <LinkContainer
              to="/"
              exact
              activeClassName="active"
            >
              <Nav.Link onClick={() => setExpanded(false)}>Bio</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/work"
              exact
              activeClassName="active"
            >
              <Nav.Link onClick={() => setExpanded(false)}>Work</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/resume"
              exact
              activeClassName="active"
            >
              <Nav.Link onClick={() => setExpanded(false)}>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/contact"
              exact
              activeClassName="active"
            >
              <Nav.Link onClick={() => setExpanded(false)}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
