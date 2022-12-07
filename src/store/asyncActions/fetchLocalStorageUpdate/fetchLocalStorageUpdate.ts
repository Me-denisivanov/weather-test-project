import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStorageWeather } from '../../../shared/helpers/getStorageWeather/getStorageWeather';
import { Weather } from '../../slices/weatherSlice/types/weatherTypes';
import { ThunkExtraArg } from '../../index';

export const fetchLocalStorageUpdate = createAsyncThunk<Weather[], undefined, {rejectValue: string, extra: ThunkExtraArg}>(
    'weather/fetchLocalStorageUpdate',
    async (_, thunkAPI) => {
        try {
            const localStorageWeather = getStorageWeather();

            const getPromiseWeather = localStorageWeather.map(async (element) => {
                const { data } = await thunkAPI.extra.api.get<Weather>(
                    `/weather?q=${element.name}&appid=${process.env.REACT_APP_KEY}`,
                );
                return data;
            });

            return Promise.all(getPromiseWeather).then((res) => res);
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
