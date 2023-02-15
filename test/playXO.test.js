const { generateBlock, generateSeparator, generateCenter } = require('../src/playXO');

describe('Validate Tic-Tac-Toe Game', () => {

    test('should return " | | " when creating block', () => {
        expect(generateBlock()).toBe(' | | ');
    });

    test('should return "-+-+-" when creating separator', () => {
        expect(generateSeparator()).toBe('-+-+-');
    });

    test('should return list with "-+-+-", " | | ", "-+-+-" when creating board center', () => {
        expect(generateCenter()).toStrictEqual(['-+-+-',  ' | | ', '-+-+-']);
    });
});