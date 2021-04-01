import React, {  } from 'react';
import './App.css';


export default function Location (props) {
    const {
        locationOptions
    } = props
    return(
        <div>
            <ul >
            {locationOptions.map(option =>(
                <option key={option.id} value={option}>{option.name}</option>
            ))}
            </ul>
           
        </div>
    )
}