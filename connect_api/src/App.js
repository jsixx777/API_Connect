
import './App.css';
import LaunchButtons from './LaunchButtons';
import PeopleButton from './PeopleButton';
import Locations from './Locations';
import Vehicles from './Vehicles';
import React, { useEffect } from 'react';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films'


export default function App() {
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => console.log(data))
  },[]);
  return (
    <div >
    <React.Fragment>
    <div className="App">
      <div >
      <h2>Shalom Yall</h2>
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
      </div>
      
      
      
      
      
    
  );
}


