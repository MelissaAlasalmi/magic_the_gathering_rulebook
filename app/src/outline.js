import React from 'react';
// eslint-disable-next-line
import * as bs from 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line
import Styles from './App.css';
// eslint-disable-next-line
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
    <Navbar.Collapse id="responsive-navbar-nav">
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
    <div>
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
