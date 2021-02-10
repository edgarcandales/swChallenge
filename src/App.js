import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import Layout1 from './Components/Layout1';
import "antd/dist/antd.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { AddPeopleAction } from './Components/Redux/Actions/actionAddPeople';
import Layout2 from './Components/Layout2';
import { AddMoviesAction } from './Components/Redux/Actions/actionAddMovies';


function App() {

  const dispatch = useDispatch();

  const [Items, setItems] = React.useState('');
  const [loading, setloading] = useState(true);


  React.useEffect(() => {
    setloading(true);
    const fetchItems = async () => {
      const result = await axios.get(`https://swapi.dev/api/people/`);
      const result2 = await axios.get(`https://swapi.dev/api/films/`);
      dispatch(AddPeopleAction(result.data.results));
      dispatch(AddMoviesAction(result2.data.results));
      setItems(result.data.results);
      setloading(false)
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      
      <Layout2 />
    </div>
  );
}

export default App;
