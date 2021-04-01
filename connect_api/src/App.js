
import './App.css';
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
      <button>Movies</button>
      <button>People</button>
      <button>Locations</button>
      <button>Vehicles</button>
      <React.Fragment>
        <div className="films-style">
          <Films filmOptions={filmOptions} />
        </div>
      </React.Fragment>
      </div>
      
      //hide the display of all films, until someone hits the movies button
      //when they hit the buttton, the all films appears, until refreshed, for now
      //i would think that means to put something in front of <Films>, like a function
      //make a function above the return, that would be invoked by the buttton push
      //make reference to that buuton at the component level.  that's my guess for now. 
      
      
      
      
    
  );
}


