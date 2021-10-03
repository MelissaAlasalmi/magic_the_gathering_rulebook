import './App.css';
import {useState} from 'react';
import { 
  Form,
  FormControl
} from 'react-bootstrap';

export const SearchInput = ({ setSearchTerm }) => {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search rules"
        onChange={event =>{setSearchTerm(event.target.value)}}
        className="mr-2"
        aria-label="Search"
      />
    </Form>
  )
};

export const CarryOutSearch = ({ rulesData, searchTerm }) => {
  return (
    <div>
      {rulesData
        .filter((values) => {
          if (values.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== '')
            return values;
          else
            return '';
        })
        .map((items, index) =>
          <p key={index}>{items}</p>
        )}
    </div>
  );
};

export const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return(
    <div>
      <SearchInput setSearchTerm={setSearchTerm} />
      <CarryOutSearch 
        // rulesData={rulesData} 
        searchTerm={searchTerm}
      />
    </div>
  )
}