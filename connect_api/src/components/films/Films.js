import React, { useState, useEffect } from 'react';
import FilmChoiceTypeSelector from './FilmChoiceTypeSelector';

export default function Films(props) {
    const [films, setFilms] = useState([])
    const [selectedKeyNameInData, setSelectedKeyNameInData] = useState('title');

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
        .then(res => res.json())
        .then(data => setFilms(data))
    },[]);

    function handleChangeChoiceType(selection) {
        setSelectedKeyNameInData(selection);
    }

    const mappedFilms = films.map(film => (
        <div>{film[selectedKeyNameInData]}</div>
    ));

    return (
        <>
            <FilmChoiceTypeSelector handleChangeChoiceType={handleChangeChoiceType}/>      
            {mappedFilms}
        </>
    );
}

/* {filmOptions.map(option => <option key={option.id} value={option}>{option.title}</option>)} */
