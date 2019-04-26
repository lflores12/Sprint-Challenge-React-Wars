import React from 'react'

function Characters (props) {
    return (
        <div className = 'character-card'>
            <div className = 'character-info'>
                <h3>Name:{props.characters.name}</h3>
                <p><strong>Birth Year:</strong> {props.characters.birth_year}</p>
                <p><strong>Gender:</strong> {props.characters.gender}</p>
                <p><strong>Height:</strong> {props.characters.height}</p>
                <p><strong>Mass:</strong> {props.characters.mass}</p>
            </div>
        </div>
    );
}



export default Characters