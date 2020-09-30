import isValidInteger from './NumberValidator'

describe('NumberValidator', () => {
    test.each([
        ['12', true],
        ['0', false],
        ['sadb', false],
        ['012', false],
        ['0x12', false],
        ['0b011', false],
        ['1.2', false],
        ['1,2', false],
        [{}, false],
        [12, true],
        [undefined, false],
        [null, false],
        [-1, true],
        ['-1', true],
        [false, false],
        [[], false],
        [['1', '2'], false]
    ])('validate input string: %s', async (
        input: any,
        expectedResult: boolean
    ) => {
        const result = isValidInteger(input);

        expect(result).toEqual(expectedResult);
    });
});