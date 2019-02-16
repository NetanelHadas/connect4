import { createStore } from 'redux';

const initial = {
    current: 'red',
    board: [
        [], // col 0
        [], // col 1
        [], // col 2
        [], // col 3
        [], // col 4
        [], // col 5
        [], // col 6
    ],
};

function reducer(state, action) {
    if (action.type === 'DROP_TILE') {
        console.log('dropping onto col ' + action.payload);
        const tile = state.current;
        const col = state.board[action.payload].concat(tile); // our new column

        const board = state.board.slice();
        board[action.payload] = col;

        return {
            current: state.current === 'red' ? 'yellow' : 'red',
            board: board,
        };
    }

    return state;
}

export default createStore(reducer, initial);