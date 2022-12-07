import { getCelsiusTemp } from './getCelsiusTemp';

describe('getCelsiusTemp', () => {
    test('Correct value', () => {
        expect(getCelsiusTemp(100)).toEqual(-173);

        const spyMathCeil = jest.spyOn(Math, 'ceil');
        getCelsiusTemp(10);
        expect(spyMathCeil).toBeCalledTimes(1);
    });

    test('Less correct ', () => {
        expect(getCelsiusTemp(-1)).toEqual(-274);
    });

    test('More correct', () => {
        expect(getCelsiusTemp(-100)).toEqual(-373);
    });
});
