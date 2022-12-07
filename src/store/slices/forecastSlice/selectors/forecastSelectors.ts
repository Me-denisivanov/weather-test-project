import { RootState } from '../../../index';

export const getForecastData = (state: RootState) => state.forecast?.data;
export const getForecastIsLoading = (state: RootState) => state.forecast?.isLoading || false;
export const getForecastIsError = (state: RootState) => state.forecast?.error || false;
