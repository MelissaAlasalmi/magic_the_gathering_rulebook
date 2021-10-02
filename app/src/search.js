import { useState } from 'react';
import './App.css';

const SearchHits = ({ items, index }) => (
  <p key={index}>
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
      <SearchInput setSearchTerm={setSearchTerm} />
      <CarryOutSearch rulesData={rulesData} searchTerm={searchTerm} />
    </div>
  );
};
