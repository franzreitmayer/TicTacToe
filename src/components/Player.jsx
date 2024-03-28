import {useState} from 'react';

export default function Player({ name, symbol }) {
    const [playerName, setPlayerName] = useState(name);
    
    const [isEditing, setIsEditing ] = useState(false);
    
    
    const handlePlayerNameChange = (event) => {
        setPlayerName( event.target.value );
    };

    const handleButton = () => {
        setIsEditing( (editing) => !editing );
    }

    return (
        <li>
            <span className="player">
                { !isEditing ? <span className="player-name">{playerName}</span> : <input onChange={handlePlayerNameChange} type="text" value={playerName} /> }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleButton}>{isEditing ? "Save" : "Edit" }</button>
        </li>

    );
}