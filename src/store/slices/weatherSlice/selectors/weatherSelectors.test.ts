import { RootState } from '../../../index';
import { getWeatherData, getWeatherIsLoading, getWeatherIsError } from './weatherSelectors';

describe('weatherSelectors test', () => {
    test('should return data', () => {
        const data = [{
            id: 2,
            name: 'Kyiv',
        }];

        const state: DeepPartial<RootState> = {
            weather: {
                data,
            },
        };

        expect(getWeatherData(state as RootState)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};

        expect(getWeatherData(state as RootState)).toEqual(undefined);
    });

    test('should return data', () => {
        const state: DeepPartial<RootState> = {
            weather: {
                isLoading: true,
            },
        };

        expect(getWeatherIsLoading(state as RootState)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};

        expect(getWeatherIsLoading(state as RootState)).toEqual(false);
    });

    test('should return data', () => {
        const state: DeepPartial<RootState> = {
            weather: {
                error: 'error',
            },
        };

        expect(getWeatherIsError(state as RootState)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};

        expect(getWeatherIsError(state as RootState)).toEqual(false);
    });
});
