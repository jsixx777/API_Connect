import React, {  } from 'react';
import './App.css';


export default function Films (props) {
    const {
        filmOptions,
        //peopleOptions,
        //locationOptions,
       // vehicleOptions
    } = props
    return(
        <div>
           
            <ul >
            {filmOptions.map(option => {
               return <option key={option.id} value={option}>{option.id}</option>
              
})}
           </ul>  
           
            
           
        </div>
    )
}