import React, { useState } from 'react';
import './App.css';


export default function Films (props) {
    const[hide,setHide] = useState(true)
    
    const {
        filmOptions
    } = props
    return(
        <div>
            <ul >
            {filmOptions.map(option =>(
                <option key={option.id} value={option}>{option.title}</option>
            ))}
            </ul>
           
        </div>
    )
}