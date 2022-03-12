import React, { useState, useEffect } from 'react';
import { ContentfulClient } from 'react-contentful';
import { Container, Row, Col } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './App.css';
import { ChapterOutline } from './outline';

const client = new ContentfulClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});

const Header = ({title, description}) => (
  <Container fluid>
    <Row>
      <Col>
        <h1>{title}</h1>
        <h6>{documentToReactComponents(description)}</h6>
      </Col>
    </Row>
  </Container>
);

const Footer = ({credits}) => (
  <Container fluid>
    <Row>
      <Col>
        <h6>{documentToReactComponents(credits)}</h6>
      </Col>
    </Row>
  </Container>
);

const App = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    client.getEntries()
    .then(response => setData(response.items))
    .catch(console.error);
  }, [data]);

  let [ dataOBJ ] = data;
  return(
    <div>
      { dataOBJ?.fields 
        ? <div>
            <Header title={dataOBJ.fields?.title} description={dataOBJ.fields?.description}/>
            <ChapterOutline chapters={dataOBJ.fields?.chapters}/>
            <Footer credits={dataOBJ.fields?.credits}/>
          </div>
        : null
      }
    </div>
  );
};

export default App;
