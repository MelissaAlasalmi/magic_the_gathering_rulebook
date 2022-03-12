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
import ReactDOM from 'react-dom';

const Subrules = ({ rule, subrules }) => (
  <div>
    <h5>{rule}</h5>
    {subrules.map((subrule, index) => (
      <p key={index}>
        {subrule.fields.subrule}
      </p>
    ))}
  </div>
);

function renderSubrules(rule, subrules) {
  let element = <Subrules rule={rule} subrules={subrules} />;
  ReactDOM.render(element, document.getElementById('output'));
}

const Rules = ({ rules }) => (
  <div>
  {rules.map((rule, index) =>
    <NavDropdown.Item onClick={() => renderSubrules(rule.fields.rule, rule.fields?.subrules)} key={index}>
      {rule.fields.rule}
    </NavDropdown.Item>)}
  </div>
);

const DropdownMenu = ({ chapters }) => (
  <div>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {chapters.map((chapter, index) => (
          <NavDropdown
            id="collasible-nav-dropdown"
            key={index}
            title={chapter.fields.title}>
            <Rules rules={chapter.fields.rules} />
          </NavDropdown>
        ))}
      </Nav>
    </Navbar.Collapse>
  </div>
);

export const ChapterOutline = ({chapters}) => (
  <Container fluid>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <DropdownMenu chapters={chapters} />
    </Navbar>
    <Row>
      <Col id="subchapter"></Col>
    </Row>
    <Row>
      <Col id="output"></Col>
    </Row>
  </Container>
);
