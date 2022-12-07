import { WeatherTemp } from '../../weatherSlice/types/weatherTypes';

export type WeatherForecastBlock = {
    dt_txt: string
    main: WeatherTemp,
}

export type WeatherForecast = {
    list: WeatherForecastBlock[]
}

export interface ForecastData {
    date: string,
    temperature: {
        currentTemp: number;
    };
}

export interface ForecastSchema {
    data?: ForecastData[],
    isLoading?: boolean,
    error?: string,
}
