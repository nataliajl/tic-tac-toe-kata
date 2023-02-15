const generateBlock = () => {
    return ' | | ';
}

const generateSeparator = () => {
    return '-+-+-';
}

const generateCenter = () => {
    const center = [];
    center.push(generateSeparator());
    center.push(generateBlock());
    center.push(generateSeparator());

    return center;
}

module.exports = { generateBlock, generateSeparator, generateCenter };