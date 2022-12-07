import { memo, useCallback } from 'react';
import {
    Button,
    Card, CardActions, CardContent, Grid, IconButton, Typography,
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Link } from 'react-router-dom';
import { Weather } from '../../store/slices/weatherSlice/types/weatherTypes';
import { getCelsiusTemp } from '../../shared/helpers/getCelsiusTemp/getCelsiusTemp';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { fetchWeatherData } from '../../store/asyncActions/fetchWeatherData/fetchWeatherData';
import { getWeatherIsError, getWeatherIsLoading } from '../../store/slices/weatherSlice/selectors/weatherSelectors';
import { weatherActions } from '../../store/slices/weatherSlice/weatherSlice';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { MuiSkeleton } from '../../widgets/MuiSkeleton';

export const WeatherCard = memo((props: Weather) => {
    const {
        name, main,
    } = props;

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(getWeatherIsLoading);
    const isError = useAppSelector(getWeatherIsError);

    const handleUpdate = useCallback(() => {
        dispatch(fetchWeatherData(name));
    }, [dispatch, name]);

    const handleRemove = useCallback((value: string) => {
        dispatch(weatherActions.removeItem(value));
    }, [dispatch]);

    if (isError) {
        return (
            <Grid item xs={12} md={12}>
                <Typography sx={{ textAlign: 'center' }} variant="h3">An error has occurred on the server </Typography>
            </Grid>
        );
    }

    return (
        <Grid item xs={12} md={3}>
            {isLoading ? <MuiSkeleton /> : (
                <Card>
                    <IconButton onClick={() => handleRemove(name)}>
                        <DeleteForeverRoundedIcon data-testid="icon-remove" />
                    </IconButton>

                    <Link to={`/details/${name}`}>
                        <CardContent>
                            <Typography sx={{ textAlign: 'center', pb: '20px' }} variant="h4">{name}</Typography>
                            <Typography sx={{ textAlign: 'center' }} variant="h5">
                                {getCelsiusTemp(main?.temp)}
                                ℃
                            </Typography>
                        </CardContent>
                    </Link>

                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" fullWidth onClick={handleUpdate}>Update</Button>
                    </CardActions>
                </Card>
            )}

        </Grid>
    );
});
