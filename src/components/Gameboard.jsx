import {useState} from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]    
]

export default function Gameboard( {onSelectSquare, activePlayer} ) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    
    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard(
            (prevBoard) => {
                const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
                updatedBoard[rowIndex][colIndex] = activePlayer;
                return updatedBoard;
            }
        );
        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{col}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    
    )
}