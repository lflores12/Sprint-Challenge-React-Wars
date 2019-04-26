import React from 'react';
import Characters from './Characters';

function CharacterList (props) {
    return (
        <div className = 'character-list'>
            {props.characters.map( characters => (<Characters characters = {characters} />))}
        </div>
    )
}


export default CharacterList;