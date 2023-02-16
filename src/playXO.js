const generateBlock = () => {
    return ' | | ';
}

const generateSeparator = () => {
    return '-+-+-';
}

const generateBoard = () => {
    let board = [];
    board.push(generateBlock());
    board.push(generateSeparator());
    board.push(generateBlock());
    board.push(generateSeparator());
    board.push(generateBlock());

    return board;
}

module.exports = { generateBlock, generateSeparator, generateBoard };