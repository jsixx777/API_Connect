
//To Do List
//it appears i'm calling the api constantly.  is there a better way? --done
//when i hit movies button, an h2 perhaps says --done
//what interests you about the movies?
//option selector appears, and they can select from what the api offers
//after selection, then as before that option lists out, like all id's, all names, all titles, etc

import './App.css';
import People from './components/people/People';
import Location from './components/location/Location';
import Vehicle from './components/vehicle/Vehicle';
import React, { useState } from 'react';
import Films from './components/films/Films';

export default function App() {
  const[showFilms,setShowFilms] = useState(false)
  const[showPeople,setShowPeople] = useState(false)
  const[showLocation,setShowLocation] = useState(false)
  const[showVehicle,setShowVehicle] = useState(false)
  //const [items, setItems] = useState()
  


    const handleMovies = () => {
      if(showLocation || showPeople || showVehicle === true) {
        setShowLocation(false)
        setShowPeople(false)
        setShowVehicle(false)
      }
      setShowFilms(!showFilms)
    }

    const handlePeople = () => {
      setShowPeople(!showPeople)
      if(showFilms || showLocation || showVehicle === true) {
        setShowFilms(false)
        setShowLocation(false)
        setShowVehicle(false)
      }
    }

    const handleLocation = () => {
      if(showFilms || showPeople || showVehicle === true) {
      setShowFilms(false)
      setShowPeople(false)
      setShowVehicle(false)
      }
      setShowLocation(!showLocation)
    }

    const handleVehicle = () => {
      if(showFilms || showPeople || showLocation === true) {
        setShowLocation(false)
        setShowPeople(false)
        setShowFilms(false)
      }
      
      setShowVehicle(!showVehicle)
    }
    
    //return () => {
    //  setLocationOptions(false)
    //  setFilmOptions(false)
    //  setPeopleOptions(false)
    //  console.log('this was first')
    //}
    //return () => {
    //  console.log('this was second')
   // }
  //},[vehicleOptions]);


  //---------------------------------------------------
  //this is to experiment with showing the opions as opposed to simply showing all movies
  //once determined, move this back into return logic

//<div className="films-style">
 //       {showFilms && <Films filmOptions={filmOptions} />}
 //       </div>

 
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
          {showFilms && <Films />}
          </div>
          <div className="films-style">
          {showPeople && <People />}
          </div>
          <div className="films-style">
          {showLocation && <Location />}
          </div>
          <div className="films-style">
          {showVehicle && <Vehicle />}
          </div>
        </div >
      </React.Fragment>
      </div>
  );
}


