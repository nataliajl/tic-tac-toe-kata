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



module.exports = { generateBlock, generateSeparator, generateCenter };