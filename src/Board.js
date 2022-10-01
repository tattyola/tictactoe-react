import Square from "./Square";

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    border: 'solid 3px red',
    width: '300px',
    height: '300px',
    margin: '10px auto'
};

const Board = (props) => {
    return (
        <div style={style}>
            {props.board.map((el, index) => <Square
                key={index}
                index={index}
                square={el}
                makeMove={props.makeMove}
                winner={props.winner}
            />)}
        </div>
    )
}

export default Board;