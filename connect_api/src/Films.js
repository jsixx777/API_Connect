import React from 'react';
import './App.css';


export default function Films (props) {
    
    const {
        filmOptions
    } = props
    return(
        <div>
            <select type="select">
            {filmOptions.map(option =>(
                <option key={option} value={option}>{option}</option>
            ))}
            </select>
           
        </div>
    )
}