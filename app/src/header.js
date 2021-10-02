import React from 'react';
// eslint-disable-next-line
import Styles from './App.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Header = () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Magic: The Gathering</h1>
        <h2>Comprehensive Rules</h2>
      </Col>
    </Row>
  </Container>
);

export const Footer = () => (
  <Container fluid>
    <Row>
      <Col>
        <h6>These rules are effective as of April 22, 2021.</h6>
      </Col>
    </Row>
  </Container>
);
