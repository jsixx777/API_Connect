import React from 'react';

export default function PeopleChoiceTypeSelector ({ handlePeopleChangeChoiceType }) {
const peopleChoiceTypes = [
    {
        displayName: 'Name',
        keyNameInData: 'name'
    },
    {
        displayName: 'Gender',
        keyNameInData: 'gender'
    },
    {
        displayName: 'Age',
        keyNameInData: 'age'
    },
];
const peopleChoiceTypesFormatted = peopleChoiceTypes.map(peopleChoiceType => (
    <option key={peopleChoiceTypes.keyNameInData} value={peopleChoiceTypes.keyNameInData}>{peopleChoiceTypes.displayName}</option>
));

function handleSelection(event) {
    const selectedKeyNameInData = event.target.value;
    handlePeopleChangeChoiceType(selectedKeyNameInData);
}
return(
    <div>
        <select onChange={handleSelection}>
            {peopleChoiceTypesFormatted}
        </select>
    </div>
)
}