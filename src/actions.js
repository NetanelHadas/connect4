export function dropTile(colNum) {
    return {
        type: 'DROP_TILE',
        payload: colNum,
    };
}