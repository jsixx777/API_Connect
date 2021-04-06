import React, { useState, useEffect } from 'react';
import PeopleChoiceTypeSelector from './PeopleChoiceTypeSelector';

export default function People () {
    const [people, setPeople] = useState([]);
    const [selectedKeyNameInData, setSelectedKeyNameInData] = useState('name')

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people`)
        .then(res => res.json())
        .then(data => setPeople(data))
    })

    function handlePeopleChangeChoiceType(selection) {
        setSelectedKeyNameInData(selection)
    }

    const mappedPeople = people.map(people => (
        <div>{people[selectedKeyNameInData]}</div>
    ))
return(
    <>
    <PeopleChoiceTypeSelector handlePeopleChangeChoiceType={handlePeopleChangeChoiceType} />
    {mappedPeople}
    </>
)
}