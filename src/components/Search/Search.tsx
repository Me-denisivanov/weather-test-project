import {
    Button, TextField, Typography,
} from '@mui/material';
import React, {
    memo, useCallback, useState,
} from 'react';
import { getNameCity } from '../../shared/helpers/getNameCity/getNameCity';
import { getStorageWeather } from '../../shared/helpers/getStorageWeather/getStorageWeather';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { fetchWeatherData } from '../../store/asyncActions/fetchWeatherData/fetchWeatherData';

export const Search = memo(() => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(target?.value);
    }, []);

    const handleAdd = useCallback((value: string) => {
        const citiesWeather = getStorageWeather();
        const indexCity = getNameCity(citiesWeather, value);

        if (!indexCity) {
            dispatch(fetchWeatherData(value));
        }

        return null;
    }, [dispatch]);

    return (
        <div style={{ marginTop: '100px', position: 'relative' }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{ textAlign: 'center', pb: 3 }}
            >
                Enter any city in the search
            </Typography>
            <TextField
                label="Search..."
                fullWidth
                variant="outlined"
                onChange={handleChange}
                value={value}
                data-testid="value-elem"
            />
            <Button
                sx={{ position: 'absolute', right: 10, bottom: 10 }}
                variant="contained"
                onClick={() => handleAdd(value)}
                data-testid="add-btn"
                disabled={Boolean(!value)}
            >
                Add
            </Button>
        </div>
    );
});
