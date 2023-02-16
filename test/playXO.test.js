const { generateBlock, generateSeparator, generateCenter, generateBoard } = require('../src/playXO');

describe('Validate Tic-Tac-Toe Game', () => {

    test('should return " | | " when creating block', () => {
        expect(generateBlock()).toBe(' | | ');
    });

    test('should return "-+-+-" when creating separator', () => {
        expect(generateSeparator()).toBe('-+-+-\n');
    });

    test('should return " | | ", "-+-+-", " | | ", "-+-+-", " | | " with break after each line when creating board center', () => {
        expect(generateBoard()).toStrictEqual(' | | \n-+-+-\n | | \n-+-+-\n | | ');
    });
});