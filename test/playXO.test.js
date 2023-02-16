const { generateBlock, generateSeparator, generateBoard, blockSquare } = require('../src/playXO');

describe('Validate Tic-Tac-Toe Game', () => {

    test('should return " | | " when creating block', () => {
        expect(generateBlock()).toBe(' | | ');
    });

    test('should return "-+-+-" when creating separator', () => {
        expect(generateSeparator()).toBe('-+-+-');
    });

    test('should return a list with " | | ", "-+-+-", " | | ", "-+-+-", " | | " with break after each line when creating board center', () => {
        expect(generateBoard()).toStrictEqual([' | | ', '-+-+-', ' | | ', '-+-+-', ' | | ']);
    });

    test('should return "X| | " when player X choose 1th gap at block', () => {
        expect(blockSquare("X")).toBe("X| | ");
    });
});