
//To Do List
//let only one button render at a time.  if another is called, the other goes away
//can we get away with one useEffect and call each button only when called?




import './App.css';
import Films from './Films';
import People from './People';
import Location from './Location';
import Vehicle from './Vehicle';
import React, { useEffect, useState } from 'react';








export default function App() {
  const[showFilms,setShowFilms] = useState(false)
  const[showPeople,setShowPeople] = useState(false)
  const[showLocation,setShowLocation] = useState(false)
  const[showVehicle,setShowVehicle] = useState(false)
  const [filmOptions, setFilmOptions] = useState([])
 // const [items, setItems] = useState([])
  const [peopleOptions, setPeopleOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])
  const [vehicleOptions, setVehicleOptions] = useState([])
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(res => res.json())
    .then(data => setFilmOptions(data))
  },[filmOptions]);



  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
    .then(res => res.json())
    .then(data => {
      setPeopleOptions(data)
    })
  },[peopleOptions]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
    .then(res => res.json())
    .then(data => {
      setLocationOptions(data)
    })
  },[locationOptions]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/vehicles`)
    .then(res => res.json())
    .then(data => {
      setVehicleOptions(data)
    })
  },[vehicleOptions]);


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
        <div>
        <div className="films-style">
          {showFilms && <Films filmOptions={filmOptions}/>}
          {showPeople && <People peopleOptions={peopleOptions}/>}
          {showLocation && <Location locationOptions={locationOptions}/>}
          {showVehicle && <Vehicle vehicleOptions={vehicleOptions} />}
        </div>
        </div>
      </React.Fragment>
      </div>
      
       
      
      
      
      
    
  );
}


