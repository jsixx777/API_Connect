import React from 'react';

export default function VehicleChoiceTypeSelector ({ handleVehicleChangeChoiceType }) {
    const vehicleChoice = [
        {
            displayName: 'Name',
            keyNameInData: 'name'
        },
        {
            displayName: 'Description',
            keyNameInData: 'description'
        },
        {
            displayName: 'Class',
            keyNameInData: 'vehicle_class'
        },
            
    ];

    const vehicleChoiceFormatted = vehicleChoice.map(vehicleChoice => (
        <option key={vehicleChoice.keyNameInData} value={vehicleChoice.keyNameInData}>{vehicleChoice.displayName}</option>
    ));

    function handleVehicleSelection(event) {
        const selectedKeyNameInData = event.target.value;
        handleVehicleChangeChoiceType(selectedKeyNameInData)
    }

    return(
        <div>
            <select onChange={handleVehicleSelection}>
                {vehicleChoiceFormatted}

            </select>
        </div>
    )
}