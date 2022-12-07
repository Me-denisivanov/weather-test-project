import { Weather } from '../../../store/slices/weatherSlice/types/weatherTypes';

export const getStorageWeather = (): Weather[] => {
    if (localStorage.getItem('weather')) {
        return JSON.parse(localStorage.getItem('weather') as string);
    }
    return [];
};
