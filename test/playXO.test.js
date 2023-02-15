const { generateBlock } = require('../src/playXO');

describe('Validate Tic-Tac-Toe Game', () => {

    test('should return " | | " when creating block', () => {
        expect(generateBlock()).toBe(' | | ');
    });
});