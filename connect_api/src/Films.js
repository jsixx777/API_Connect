import React from 'react';
import './App.css';


export default function Films (props) {
    const {
        filmOptions
    } = props
    return(
        <div>
            <ul>
            {filmOptions.map(option =>(
                <li key={option} value={option}>{option}</li>
            ))}
            </ul>
           
        </div>
    )
}