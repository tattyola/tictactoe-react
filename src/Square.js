const Square = (props) => {
    const style = {
        border: 'solid 1px red',
        fontSize: '35px',
        fontWeight: '300px',
        cursor: 'pointer',
    }
    return(
        <button
            disabled={props.winner}
            style={style}
            onClick={() => props.makeMove(props.index)}>
            {props.square}

        </button>
    )
}

export default Square;
