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
    <option key={peopleChoiceType.keyNameInData} value={peopleChoiceType.keyNameInData}>{peopleChoiceType.displayName}</option>
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