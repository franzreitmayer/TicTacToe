import {useState} from 'react';

import Player from './components/Player';
import Gameboard from './components/Gameboard';


function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer( (previousActivePlayer) => previousActivePlayer == 'X' ? 'O' : 'X' );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
            <Player name="Player 1" symbol="X" isActive={activePlayer == 'X'}/>
            <Player name="Player 2" symbol="O" isActive={activePlayer == 'O'}/>
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayer={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
