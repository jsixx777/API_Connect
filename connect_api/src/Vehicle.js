import React, {  } from 'react';
import './App.css';


export default function Vehicle (props) {
    const {
        vehicleOptions
    } = props
    return(
        <div>
            <ul >
            {vehicleOptions.map(option =>(
                <option key={option.id} value={option}>{option.name}</option>
            ))}
            </ul>
           
        </div>
    )
}