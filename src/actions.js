export function dropTile(colnum) {
    return {
        type: 'DROP_TILE',
        payload: colnum,
    };
}