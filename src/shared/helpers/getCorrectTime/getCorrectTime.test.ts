import { getCorrectTime } from './getCorrectTime';

describe('getSplicedStr', () => {
    test('Without numSlice', () => {
        expect(getCorrectTime('Test String', 0)).toEqual('Test String');
    });

    test('Correct splice str', () => {
        expect(getCorrectTime('12:12:13 01:10:22', 10)).toEqual('1:10:22');
    });

    test('Correct name', () => {
        expect(getCorrectTime('', 10)).toEqual('');
    });

    test('Empty string', () => {
        expect(getCorrectTime('  ', 1)).toEqual(' ');
    });
});
