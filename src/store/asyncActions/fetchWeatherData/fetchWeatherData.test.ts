import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchWeatherData } from './fetchWeatherData';
import { RootState } from '../../index';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const initialData = {
    coord: {
        lon: 30.5167,
        lat: 50.4333,
    },
    weather: [
        {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
        },
    ],
    base: 'stations',
    main: {
        temp: 269.6,
        feels_like: 263.44,
        temp_min: 269.6,
        temp_max: 269.6,
        pressure: 986,
        humidity: 86,
    },
    visibility: 2233,
    wind: {
        speed: 5.57,
        deg: 140,
        gust: 13.12,
    },
    clouds: {
        all: 100,
    },
    dt: 1670386809,
    sys: {
        type: 2,
        id: 2013236,
        country: 'UA',
        sunrise: 1670391834,
        sunset: 1670421300,
    },
    timezone: 7200,
    id: 703448,
    name: 'Kyiv',
    cod: 200,
};

describe('weatherThunk', () => {
    let dispatch: Dispatch;
    let getState: () => RootState;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success fetch weather', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: initialData,
        }));

        const action = fetchWeatherData('Kyiv');
        const result = await action(dispatch, getState, { api: mockedAxios });

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(initialData);
    });

    test('error fetch weather', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            status: 403,
        }));

        const action = fetchWeatherData('Kyiv');
        const result = await action(dispatch, getState, { api: mockedAxios });

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
