
import './App.css';
import Films from './Films';
import People from './People';
import Location from './Location';
import Vehicle from './Vehicle';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films'
const BASE_PEOPLE_URL = 'https://ghibliapi.herokuapp.com/people'
const BASE_LOCATION_URL = 'https://ghibliapi.herokuapp.com/locations'
const BASE_VEHICLE_URL = 'https://ghibliapi.herokuapp.com/vehicles'




export default function App() {
  const[showFilms,setShowFilms] = useState(false)
  const[showPeople,setShowPeople] = useState(false)
  const[showLocation,setShowLocation] = useState(false)
  const[showVehicle,setShowVehicle] = useState(false)
  const [filmOptions, setFilmOptions] = useState([])
  const [peopleOptions, setPeopleOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])
  const [vehicleOptions, setVehicleOptions] = useState([])
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setFilmOptions(data)
    })
  },[]);

  useEffect(() => {
    fetch(BASE_PEOPLE_URL)
    .then(res => res.json())
    .then(data => {
      setPeopleOptions(data)
    })
  },[]);

  useEffect(() => {
    fetch(BASE_LOCATION_URL)
    .then(res => res.json())
    .then(data => {
      setLocationOptions(data)
    })
  },[]);

  useEffect(() => {
    fetch(BASE_VEHICLE_URL)
    .then(res => res.json())
    .then(data => {
      setVehicleOptions(data)
    })
  },[]);


  const handleMovies = () => {
    setShowFilms(!showFilms)
  }

  const handlePeople = () => {
    setShowPeople(!showPeople)
  }

  const handleLocation = () => {
    setShowLocation(!showLocation)
  }

  const handleVehicle = () => {
    setShowVehicle(!showVehicle)
  }
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
      <div className="position">
      <button onClick={() => handleMovies()}className="button-position">Movies</button>
      <button onClick={() => handlePeople()}className="button-position">People</button>
      <button onClick={() => handleLocation()}className="button-position">Locations</button>
      <button onClick={() => handleVehicle()}className="button-position">Vehicles</button>
      </div>
      <React.Fragment>
        <div className="films-style">
          {showFilms && <Films filmOptions={filmOptions} />}
        </div>
        <div className="films-style">
          {showPeople && <People peopleOptions={peopleOptions} />}
        </div>
        <div className="films-style">
          {showLocation && <Location locationOptions={locationOptions} />}
        </div>
        <div className="films-style">
          {showVehicle && <Vehicle vehicleOptions={vehicleOptions} />}
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


