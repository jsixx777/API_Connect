
//To Do List
//let only one button render at a time.  if another is called, the other goes away
//can we get away with one useEffect and call each button only when called?




import './App.css';
//import Films from './Films';
//import People from './People';
//import Location from './Location';
//import Vehicle from './Vehicle';
import React, { useEffect, useState } from 'react';








export default function App() {
  //const[showFilms,setShowFilms] = useState(false)
  //const[showPeople,setShowPeople] = useState(false)
  //const[showLocation,setShowLocation] = useState(false)
  //const[showVehicle,setShowVehicle] = useState(false)
  const [filmOptions, setFilmOptions] = useState('films')
  //const [items, setItems] = useState()
  //const [peopleOptions, setPeopleOptions] = useState([])
  //const [locationOptions, setLocationOptions] = useState([])
  //const [vehicleOptions, setVehicleOptions] = useState([])
  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/${filmOptions}`)
    .then(res => res.json())
    .then(data => console.log(data))
  },[filmOptions]);



  //useEffect(() => {
  //  fetch(BASE_PEOPLE_URL)
  //  .then(res => res.json())
  //  .then(data => {
   //   setPeopleOptions(data)
   // })
  //},[peopleOptions]);

  //useEffect(() => {
  //  fetch(BASE_LOCATION_URL)
  //  .then(res => res.json())
  //  .then(data => {
  //    setLocationOptions(data)
  //  })
  //},[locationOptions]);

  //useEffect(() => {
  //  fetch(BASE_VEHICLE_URL)
  //  .then(res => res.json())
  //  .then(data => {
  //    setVehicleOptions(data)
  //  })
 // },[vehicleOptions]);


  //const handleMovies = () => {
  //  setShowFilms(!showFilms)
  //}

  //const handlePeople = () => {
  //  setShowPeople(!showPeople)
  //}

  //const handleLocation = () => {
  //  setShowLocation(!showLocation)
  //}

  //const handleVehicle = () => {
  //  setShowVehicle(!showVehicle)
  //}
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
      <button onClick={() => setFilmOptions('films')}className="button-position">Movies</button>
      <button onClick={() => setFilmOptions('people')}className="button-position">People</button>
      <button onClick={() => setFilmOptions('locations')}className="button-position">Locations</button>
      <button onClick={() => setFilmOptions('vehicles')}className="button-position">Vehicles</button>
      </div>
      <React.Fragment>
        <div>
        <div className="films-style">
          
            <h2>{filmOptions}</h2>
            <div>
            
        </div>
          
        </div>
        
        
        </div>
      </React.Fragment>
      </div>
      
       
      
      
      
      
    
  );
}


