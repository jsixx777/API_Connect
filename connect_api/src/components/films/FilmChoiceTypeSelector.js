import React from 'react';

export default function FilmChoiceTypeSelector({handleChangeChoiceType}) {
    const choiceTypes = [
        {
            displayName: 'Title',
            keyNameInData: 'title'
        },
        {
            displayName: 'Director',
            keyNameInData: 'director'
        },
        {
            displayName:  'Original Title',
            keyNameInData: 'original_title'
        }
    ];

    const choiceTypesFormatted = choiceTypes.map(choiceType => (
        <option key={choiceType.keyNameInData} value={choiceType.keyNameInData}>{choiceType.displayName}</option>
    ));

    function handleSelection(event) {
        const selectedKeyNameInData = event.target.value;
        handleChangeChoiceType(selectedKeyNameInData);
    }

    return (
        <div>
            <select onChange={handleSelection}>
                {choiceTypesFormatted}
            </select>        
        </div>
    );
}

/* {filmOptions.map(option => <option key={option.id} value={option}>{option.title}</option>)} */
