import React, {  } from 'react';
import './App.css';


export default function People (props) {
    const {
        peopleOptions
    } = props
    return(
        <div>
            <ul >
            {peopleOptions.map(option => (
                <option key={option.id} value={option}>{option.name}</option>
            ))}
            </ul>
           
        </div>
    )
}