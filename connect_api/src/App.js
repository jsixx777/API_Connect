
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
 // const [items, setItems] = useState([])
  const [peopleOptions, setPeopleOptions] = useState([])
  const [locationOptions, setLocationOptions] = useState([])
  const [vehicleOptions, setVehicleOptions] = useState([])
   useEffect(() => {
     setFilmOptions('films')
    fetch(`https://ghibliapi.herokuapp.com/${filmOptions}`)
    .then(res => res.json())
    .then(data => console.log(data))
  },[filmOptions]);



  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/${peopleOptions}`)
    .then(res => res.json())
    .then(data => {
      setPeopleOptions(data)
    })
  },[peopleOptions]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/${locationOptions}`)
    .then(res => res.json())
    .then(data => {
      setLocationOptions(data)
    })
  },[locationOptions]);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/${vehicleOptions}`)
    .then(res => res.json())
    .then(data => {
      setVehicleOptions(data)
    })
    //return () => {
    //  setLocationOptions(false)
    //  setFilmOptions(false)
    //  setPeopleOptions(false)
    //  console.log('this was first')
    //}
    //return () => {
    //  console.log('this was second')
   // }
  },[vehicleOptions]);


 
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
      <button onClick={() => setPeopleOptions('people')}className="button-position">People</button>
      <button onClick={() => setLocationOptions('locations')}className="button-position">Locations</button>
      <button onClick={() => setVehicleOptions('vehicles')}className="button-position">Vehicles</button>
      </div>
      <React.Fragment>
        <div>
        <div className="films-style">
        <h2>{filmOptions}</h2>
        </div>
        </div>
      </React.Fragment>
      </div>
  );
}


