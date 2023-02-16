const generateBlock = () => {
    return ' | | ';
}

const generateSeparator = () => {
    return '-+-+-\n';
}

const generateBoard = () => {
    let board = '';
    board += `${generateBlock()}\n`;
    board += generateSeparator();
    board += `${generateBlock()}\n`;
    board += generateSeparator();
    board += generateBlock();

    return board;
}

module.exports = { generateBlock, generateSeparator, generateBoard };