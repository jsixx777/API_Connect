import React, { useState, useEffect } from 'react';
import VehicleChoiceTypeSelector from './VehicleChoiceTypeSelector';


export default function Vehicle (props) {
    const[vehicle,setVehicle] = useState([])
    const[selectedKeyNameInData, setSelectedKeyNameInData] = useState()

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/vehicles`)
        .then(res => res.json())
        .then(data => setVehicle(data))
    })

    function handleVehicleChangeChoiceType(selection) {
        setSelectedKeyNameInData(selection)
    }

    const mappedVehicles = vehicle.map(vehicle => (
        <div>{vehicle[selectedKeyNameInData]}</div>
    ))

    return(
        <>
        <VehicleChoiceTypeSelector handleVehicleChangeChoiceType={handleVehicleChangeChoiceType}/>
        {mappedVehicles}
        </>
    )
}

