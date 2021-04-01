import React from 'react';
import './App.css';


export default function Films (props) {
    
    const {
        filmOptions
    } = props
    return(
        <div>
            <ul >
            {filmOptions.map(option =>(
                <option key={option.id} value={option}>{option.id}</option>
            ))}
            </ul>
           
        </div>
    )
}