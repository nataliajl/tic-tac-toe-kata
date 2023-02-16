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

const blockSquare = (player, squareNumber) => {
    if (squareNumber == 1)
        return `${player}| | `;
}

module.exports = { generateBlock, generateSeparator, generateBoard, blockSquare};