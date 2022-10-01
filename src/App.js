import './App.css';
import {useEffect, useState} from "react";
import Board from "./Board";

function App() {

    const [board, setBoard] = useState(
        Array(9).fill(null)
    )

    const [oIsNext, setOIsNext] = useState(false);
    const [winner, setWinner] = useState('')

    const makeMove = (i) => {
        const whoIsNext = oIsNext ? '0' : 'X';
        const newBoard = board.map((el, index) =>
            index === i ? whoIsNext : el
        )
        setBoard(newBoard);
        setOIsNext(!oIsNext);
    }
    const whoIsWinner = () => {
        const line = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < line.length; i++) {
            const [a, b, c] = line[i]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a])
            }
        }
    }

    useEffect(() => {
        whoIsWinner()
    }, [board])

    console.log(winner)

    return (
        <div>
            <Board
                board={board}
                makeMove={makeMove}
                winner={winner}
            />
            {winner && <h4>Winner is {winner}</h4>}
        </div>
    );
}

export default App;
