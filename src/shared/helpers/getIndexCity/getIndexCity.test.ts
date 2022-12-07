import { getIndexCity } from './getIndexCity';

const weatherArr = [
    {
        name: 'Denis',
    },
    {
        name: 'Igor',
    },
    {
        name: 'Lera',
    },
];

describe('getIndexCity', () => {
    test('Correct name', () => {
        expect(getIndexCity(weatherArr, 'Denis')).toEqual(0);
    });
    test('Incorrect  name', () => {
        expect(getIndexCity(weatherArr, 'Ilona')).toEqual(-1);
    });
    test('Empty name array', () => {
        expect(getIndexCity([], 'Denis')).toEqual(-1);
    });
});
