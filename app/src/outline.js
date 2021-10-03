import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Nav, 
  Navbar, 
  NavDropdown,
  Container, 
  Row, 
  Col
} from 'react-bootstrap';
import { Parse, ProcessData } from './parse.js';
import { renderRules } from './rules';

const SubChapter = ({ subchapters }) => (
  <div>
    {subchapters.map((items, index) => (
      <NavDropdown.Item onClick={() => renderRules(items.rules, items.subchapter)} key={index}>
        {items.subchapter}
      </NavDropdown.Item>
    ))}
  </div>
);

const NavbarMenu = ({ allData }) => (
  <Navbar
    collapseOnSelect 
    expand="md" 
    bg="dark" 
    variant="dark" 
    sticky="top">
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {allData.map((items, index) => (
          <NavDropdown title={items.chapter} id="collapsible-nav-dropdown" key={index}>
            <SubChapter subchapters={items.subchapters} />
          </NavDropdown>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const Menu = ({ allData }) => (
  <Container fluid>
      <NavbarMenu allData={allData}/>
    <Row>
      <Col id="subchapter"></Col>
    </Row>
    <Row>
      <Col id="output"></Col>
    </Row>
  </Container>
)

export const ChapterOutline = () => {
  let data = Parse();
  let fetched = ProcessData(data);
  let allData = fetched[0];
  // let rulesData = fetched[1];

  return (
    <Menu allData={allData} />
    );
};
