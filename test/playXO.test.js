const { generateBlock, generateSeparator, generateCenter } = require('../src/playXO');

describe('Validate Tic-Tac-Toe Game', () => {

    test('should return " | | " when creating block', () => {
        expect(generateBlock()).toBe(' | | \n');
    });

    test('should return "-+-+-" when creating separator', () => {
        expect(generateSeparator()).toBe('-+-+-\n');
    });

    test('should return "-+-+-", " | | ", "-+-+-"  with break after each line when creating board center', () => {
        expect(generateCenter()).toStrictEqual('-+-+-\n | | \n-+-+-\n');
    });
});