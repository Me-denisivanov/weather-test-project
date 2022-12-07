import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStorageWeather } from '../../../shared/helpers/getStorageWeather/getStorageWeather';
import { Weather } from '../../slices/weatherSlice/types/weatherTypes';
import { ThunkExtraArg } from '../../index';
import { getNameCity } from '../../../shared/helpers/getNameCity/getNameCity';

export const fetchWeatherData = createAsyncThunk<Weather, string, {rejectValue: string, extra: ThunkExtraArg}>(
    'weather/fetchWeatherData',
    async (weatherValue, thunkAPI) => {
        try {
            const { data } = await thunkAPI.extra.api.get<Weather>(`/weather?q=${weatherValue}&appid=${process.env.REACT_APP_KEY}`);

            if (!data) {
                throw new Error();
            }

            const cities = getStorageWeather();
            const isNewCity = getNameCity(cities, data.name);

            if (!isNewCity) {
                cities.push(data);
                localStorage.setItem('weather', JSON.stringify(cities));
            }

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
