const generateBlock = () => {
    return ' | | ';
}

const generateSeparator = () => {
    return '-+-+-';
}

const generateBoard = () => {
    let board = '';
    board += `${generateBlock()}\n`;
    board += `${generateSeparator()}\n`;
    board += `${generateBlock()}\n`;
    board += `${generateSeparator()}\n`;
    board += generateBlock();

    return board;
}

module.exports = { generateBlock, generateSeparator, generateBoard };