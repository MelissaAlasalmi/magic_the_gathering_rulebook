import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Parse, ProcessData } from './parse.js';
import { renderRules } from './rules';
import { Search } from './search';

const SubChapter = ({ subchapters }) => (
  <div>
    {subchapters.map((items, index) => (
      <NavDropdown.Item onClick={() => renderRules(items.rules, items.subchapter)} key={index}>
        {items.subchapter}
      </NavDropdown.Item>
    ))}
  </div>
);

const DropdownMenu = ({ allData }) => (
  <div>
    <Navbar.Collapse id="responsive-navbar-nav" sticky="top" expand="lg">
      <Nav className="mr-auto">
        {allData.map((items, index) => (
          <NavDropdown title={items.chapter} id="collapsible-nav-dropdown" key={index}>
            <SubChapter subchapters={items.subchapters} />
          </NavDropdown>
        ))}
      </Nav>
    </Navbar.Collapse>
  </div>
);

export const ChapterOutline = () => {
  let data = Parse();
  let fetched = ProcessData(data);
  let allData = fetched[0];
  let rulesData = fetched[1];

  return (
    <div className="fit_2_screen">
      <Search rulesData={rulesData} />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Rulebook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <DropdownMenu allData={allData} />
      </Navbar>
      <div id="output"></div>
    </div>
  );
};
