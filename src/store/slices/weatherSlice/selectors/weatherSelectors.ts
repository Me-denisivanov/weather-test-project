import { RootState } from '../../../index';

export const getWeatherData = (state: RootState) => state.weather?.data;
export const getWeatherIsLoading = (state: RootState) => state.weather?.isLoading || false;
export const getWeatherIsError = (state: RootState) => state.weather?.error || false;
