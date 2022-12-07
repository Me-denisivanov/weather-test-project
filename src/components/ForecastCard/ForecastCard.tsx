import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';
import { memo } from 'react';
import { ForecastData } from '../../store/slices/forecastSlice/types/forecastTypes';

export const ForecastCard = memo((props: ForecastData) => {
    const { date, temperature } = props;

    return (
        <Grid item xs={12} md={1.5} sx={{ mt: 3 }}>
            <Card>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>{date}</Typography>

                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100"
                    image="https://cdn-icons-png.flaticon.com/512/4804/4804221.png"
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} variant="h6">
                        {temperature.currentTemp}
                        °
                    </Typography>
                </CardContent>
            </Card>

        </Grid>

    );
});
