const generateBlock = () => {
    return ' | | \n';
}

const generateSeparator = () => {
    return '-+-+-\n';
}

const generateBoard = () => {
    let board = '';
    board += generateBlock();
    board += generateSeparator();
    board += generateBlock();
    board += generateSeparator();
    board += generateBlock();

    return board;
}

module.exports = { generateBlock, generateSeparator, generateBoard };