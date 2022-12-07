export type WeatherSys = {
    country: string,
}

export type WeatherWind = {
    speed: number,
}

export type WeatherTemp = {
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
}

export type WeatherBlock = {
    id: number,
    main: string,
}

export interface Weather {
    weather: WeatherBlock[];
    main: WeatherTemp,
    wind: WeatherWind,
    id: number,
    name: string,
    sys: WeatherSys
}

export interface WeatherSchema {
    data: Weather[],
    isLoading?: boolean,
    error?: string,
}
