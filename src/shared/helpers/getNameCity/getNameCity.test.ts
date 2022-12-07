import { getNameCity } from './getNameCity';

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
        expect(getNameCity(weatherArr, 'Denis')).toEqual({ name: 'Denis' });
    });
    test('Incorrect  name', () => {
        expect(getNameCity(weatherArr, 'Ilona')).toEqual(undefined);
    });
    test('Empty name array', () => {
        expect(getNameCity([], 'Denis')).toEqual(undefined);
    });
});
