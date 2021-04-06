import React from 'react';

export default function LocationChoiceTypeSelector ({ handleLocationChangeChoiceType }) {
const locationChoice = [
    {
        displayName: 'Name',
        keyNameInData: 'name'
    },
    {
        displayName: 'Terrain',
        keyNameInData: 'terrain'
    },
    {
        displayName: 'Climate',
        keyNameInData: 'climate'
    }
];

const locationChoiceFormatted = locationChoice.map(locationChoice => (
    <option key={locationChoice.keyNameInData} value={locationChoice.keyNameInData}>{locationChoice.displayName}</option>
))

function handleLocationSelection (event) {
    const selectedKeyNameInData = event.target.value;
    handleLocationChangeChoiceType(selectedKeyNameInData)
}
return(
    <div>
        <select onChange={handleLocationSelection}>
            {locationChoiceFormatted}
        </select>
    </div>
)
}