import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';

const DraftNav = props => (
  <Navbar collapseOnSelect >

    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/draft-testing">
          Draft - Home
          </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav className="menu-cell">
        <LinkContainer to="/draft-testing/editor"><NavItem eventKey={0.1} >Editor</NavItem></LinkContainer>
        <LinkContainer to="/draft-testing/entity"><NavItem eventKey={0.2} >Entity</NavItem></LinkContainer>
        <LinkContainer to="/draft-testing/link"><NavItem eventKey={0.3} >Link</NavItem></LinkContainer>
        <LinkContainer to="/mediaeditorexample"><NavItem eventKey={0.4} >MediaEditor</NavItem></LinkContainer>
        <LinkContainer to="/tweet"><NavItem eventKey={0.5} >Tweet</NavItem></LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
export default DraftNav;