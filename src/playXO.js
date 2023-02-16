const generateBlock = () => {
    return ' | | \n';
}

const generateSeparator = () => {
    return '-+-+-\n';
}

const generateCenter = () => {
    let center = "";
    center += generateSeparator();
    center += generateBlock();
    center += generateSeparator();

    return center;
}

const generateBoard = () => {
    let board = [];
    board += generateBlock();
    board += generateCenter();
    board += generateBlock();

    return board;
}

module.exports = { generateBlock, generateSeparator, generateCenter, generateBoard };