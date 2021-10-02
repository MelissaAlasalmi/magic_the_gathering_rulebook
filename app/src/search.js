import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const SearchHits = ({ items, index }) => (
  <p style={{ color: 'white' }} key={index}>
    {items}
  </p>
);

const SearchInput = ({ setSearchTerm }) => {
  const handleChange = (event) => setSearchTerm(event.target.value);
  return <input type="text" placeholder="Search rules" onChange={handleChange} />;
};

const CarryOutSearch = ({ rulesData, searchTerm }) => {
  return (
    <div>
      {rulesData
        .filter((values) => {
          if (values.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== '')
            return values;
        })
        .map((items, index) => (
          <SearchHits items={items} index={index} />
        ))}
    </div>
  );
};

export const Search = ({ rulesData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <Row>
        <Col>
          <SearchInput setSearchTerm={setSearchTerm} />
          <CarryOutSearch rulesData={rulesData} searchTerm={searchTerm} />
        </Col>
      </Row>
    </div>
  );
};
