import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStorageWeather } from '../../../shared/helpers/getStorageWeather/getStorageWeather';
import { fetchWeatherData } from '../../asyncActions/fetchWeatherData/fetchWeatherData';
import { WeatherSchema, Weather } from './types/weatherTypes';
import { getIndexCity } from '../../../shared/helpers/getIndexCity/getIndexCity';
import { getNameCity } from '../../../shared/helpers/getNameCity/getNameCity';
import { fetchLocalStorageUpdate } from '../../asyncActions/fetchLocalStorageUpdate/fetchLocalStorageUpdate';

const initialState: WeatherSchema = {
    isLoading: false,
    error: undefined,
    data: [],
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setStorageData(state) {
            if (!state.data?.length && getStorageWeather().length) {
                state.data = getStorageWeather();
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            if (state.data) {
                const indexCity = getIndexCity(state.data, action.payload);
                state.data.splice(indexCity, 1);

                const citiesWeather = getStorageWeather();
                const removeIndexCity = getIndexCity(citiesWeather, action.payload);
                citiesWeather.splice(removeIndexCity, 1);

                citiesWeather.length
                    ? localStorage.setItem('weather', JSON.stringify(citiesWeather))
                    : localStorage.removeItem('weather');
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchWeatherData.fulfilled, (
                state,
                action: PayloadAction<Weather>,
            ) => {
                const getCity = getNameCity(state.data, action.payload.name);

                !getCity && state.data?.push(action.payload);

                state.isLoading = false;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // fetchLocalStorageUpdate
            .addCase(fetchLocalStorageUpdate.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchLocalStorageUpdate.fulfilled, (
                state,
                action: PayloadAction<Weather[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchLocalStorageUpdate.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: weatherActions } = weatherSlice;
export const { reducer: weatherReducer } = weatherSlice;
