
import './App.css';
import LaunchButtons from './LaunchButtons';
import PeopleButton from './PeopleButton';
import Locations from './Locations';
import Vehicles from './Vehicles';
import Films from './Films';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films'



export default function App() {
  const [filmOptions, setFilmOptions] = useState([])
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      setFilmOptions(data)
    })
  },[]);
  return (
    <div >
    <React.Fragment>
    <div className="App">
      <div >
      <h2>Studio Ghibli Search</h2>
      <h2>whatcha looking for today?</h2>
      </div>
      </div>
      </React.Fragment>
      <React.Fragment>
        <div className="position">
          <div className="button-position">
  <LaunchButtons />
  <PeopleButton />
  <Locations />
  <Vehicles />
  </div>
  </div>
      </React.Fragment>
      <React.Fragment>
        <div className="films-style">
          <Films 
          filmOptions={filmOptions}
          />
        </div>
      </React.Fragment>
      </div>
      
      
      
      
      
      
    
  );
}


