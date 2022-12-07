import { weatherActions, weatherReducer } from './weatherSlice';
import { WeatherSchema } from './types/weatherTypes';

describe('loginSlice', () => {
    test('remove one city', () => {
        // const state:DeepPartial<WeatherSchema> = { data: [{ name: 'Lviv' }, { name: 'Kyiv' }] };
        const state = { data: [{ name: 'Kyiv' }, { name: 'Lviv' }] };

        expect(weatherReducer(
            state as WeatherSchema,
            weatherActions.removeItem('Lviv'),
        )).toEqual({ data: [{ name: 'Kyiv' }] });
    });

    test('with empty state', () => {
        const state = {};

        expect(weatherReducer(
            state as WeatherSchema,
            weatherActions.removeItem('Lviv'),
        )).toEqual({});
    });
});
