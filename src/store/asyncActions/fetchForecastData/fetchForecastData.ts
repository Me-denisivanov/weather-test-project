import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from '../../index';
import { getCelsiusTemp } from '../../../shared/helpers/getCelsiusTemp/getCelsiusTemp';
import { getCorrectTime } from '../../../shared/helpers/getCorrectTime/getCorrectTime';
import { ForecastData, WeatherForecast, WeatherForecastBlock } from '../../slices/forecastSlice/types/forecastTypes';

export const fetchForecastData = createAsyncThunk<ForecastData[], string, {rejectValue: string, extra: ThunkExtraArg}>(
    'weather/fetchForecastData',
    async (weatherValue, thunkAPI) => {
        try {
            const { data: { list } } = await thunkAPI.extra.api.get<WeatherForecast>(
                `/forecast?q=${weatherValue}&appid=${process.env.REACT_APP_KEY}`,
            );

            if (!list) {
                throw new Error();
            }

            const limitList = list.filter((_: WeatherForecastBlock, idx: number) => idx < 8);
            const forecastList = limitList.map((item: WeatherForecastBlock) => {
                const { temp } = item.main;
                const currentTemp = getCelsiusTemp(temp);
                const currentDate = getCorrectTime(item.dt_txt, 11);

                return { temperature: { currentTemp }, date: currentDate };
            });

            return forecastList;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
