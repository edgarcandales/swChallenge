import React, { useState, useEffect } from 'react';
import { AutoComplete, Select } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const SearchComponent = ({ Characterstate, Moviestate }) => {
  const dispatch = useDispatch();

  const { people } = useSelector((store) => store.people);
  const { movies } = useSelector((store) => store.movies);
  const [options, setoptions] = useState([])


  
    const options1 = people.map((person) => {
      const y = {
        value: person.name,
      };
      return y;
    }); 
    const options2 = movies.map((movie) => {
      const y = {
        value: movie.title,
      };
      return y;
    });
    
    const select = () => {
        console.log("asdf")
      };

  
  return (
      
    <AutoComplete
      style={{ width: 200 }}
      options={ Characterstate ? options1 : Moviestate ? options2 : options}
      placeholder='Search'
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default SearchComponent;
