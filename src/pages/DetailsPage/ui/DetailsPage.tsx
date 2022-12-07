import { memo, useEffect } from 'react';
import {
    Card, CardContent, Grid, Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Forecast } from '../../../components/Forecast/Forecast';
import { getCelsiusTemp } from '../../../shared/helpers/getCelsiusTemp/getCelsiusTemp';
import { getIndexCity } from '../../../shared/helpers/getIndexCity/getIndexCity';
import { getStorageWeather } from '../../../shared/helpers/getStorageWeather/getStorageWeather';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../../shared/hooks/useAppSelector';
import { fetchForecastData } from '../../../store/asyncActions/fetchForecastData/fetchForecastData';
import { getWeatherData } from '../../../store/slices/weatherSlice/selectors/weatherSelectors';
import { weatherActions } from '../../../store/slices/weatherSlice/weatherSlice';

const DetailsPage = () => {
    const dispatch = useAppDispatch();
    const weatherData = useAppSelector(getWeatherData) || [];
    const localStorageWeather = getStorageWeather();
    const { id } = useParams();

    const indexCity = getIndexCity(weatherData, id || '');
    const getOneCity = weatherData[indexCity];

    useEffect(() => {
        if (id) {
            dispatch(fetchForecastData(id));
            dispatch(weatherActions.setStorageData());
        }
    }, [dispatch, id, localStorageWeather]);

    return (
        <>
            <Grid item xs={12} md={3} sx={{ mt: 3 }}>
                {getOneCity && (
                    <Card>
                        <CardContent>
                            <Typography sx={{ textAlign: 'center', pb: '20px' }} variant="h4">{getOneCity.name}</Typography>
                            <Typography sx={{ textAlign: 'center', pb: '20px' }} variant="h5">
                                {getCelsiusTemp(getOneCity?.main?.temp)}
                                ℃
                            </Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="h5">
                                Country:
                                {' '}
                                {getOneCity?.sys?.country}
                            </Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="h5">
                                Humidity:
                                {' '}
                                {getOneCity?.main?.humidity}
                            </Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="h5">
                                On feeling:
                                {' '}
                                {getCelsiusTemp(getOneCity?.main?.feels_like)}
                            </Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="h5">
                                Wind speed:
                                {' '}
                                {getOneCity?.wind?.speed}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Grid>
            <Grid container spacing={2} justifyContent="space-between">
                <Forecast />
            </Grid>
        </>

    );
};

export default memo(DetailsPage);
