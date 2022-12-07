import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ForecastData, ForecastSchema,
} from './types/forecastTypes';
import { fetchForecastData } from '../../asyncActions/fetchForecastData/fetchForecastData';

const initialState: ForecastSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecastData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchForecastData.fulfilled, (state, action: PayloadAction<ForecastData[]>) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchForecastData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: forecastActions } = forecastSlice;
export const { reducer: forecastReducer } = forecastSlice;
