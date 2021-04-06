import React, { useState, useEffect } from 'react';
import LocationChoiceTypeSelector from './LocationChoiceTypeSelector';

export default function Location (props) {
    const[location, setLocation] = useState([]);
    const[selectedKeyNameInData, setSelectedKeyNameInData] = useState('name');

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations`)
        .then(res => res.json())
        .then(data => setLocation(data))
    })

    function handleLocationChangeChoiceType(selection) {
        setSelectedKeyNameInData(selection)
    }

    const mappedLocation = location.map(location => (
        <div>{location[selectedKeyNameInData]}</div>
    ))

    return(
        <>
        <LocationChoiceTypeSelector handleLocationChangeChoiceType={handleLocationChangeChoiceType}/>
        {mappedLocation}
        </>
    )
}
