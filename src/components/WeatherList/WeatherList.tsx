import { memo, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { getWeatherData, getWeatherIsError } from '../../store/slices/weatherSlice/selectors/weatherSelectors';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { fetchLocalStorageUpdate } from '../../store/asyncActions/fetchLocalStorageUpdate/fetchLocalStorageUpdate';

export const WeatherList = memo(
    () => {
        const dispatch = useAppDispatch();
        const weatherData = useAppSelector(getWeatherData);
        const isError = useAppSelector(getWeatherIsError);

        useEffect(() => {
            dispatch(fetchLocalStorageUpdate());
        }, [dispatch]);

        if (isError) {
            return (
                <Typography variant="h4" sx={{ textAlign: 'center', mt: 5 }}>Such a city does not exist</Typography>
            );
        }

        return (
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {weatherData && weatherData.map((item) => (
                    <WeatherCard key={item.name} {...item} />
                ))}
            </Grid>
        );
    },
);
