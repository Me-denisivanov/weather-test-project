import { memo } from 'react';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { getForecastData, getForecastIsError } from '../../store/slices/forecastSlice/selectors/forecastSelectors';
import { ForecastCard } from '../ForecastCard/ForecastCard';

export const Forecast = memo(() => {
    const forecastData = useAppSelector(getForecastData);
    const forecastIsError = useAppSelector(getForecastIsError);

    if (forecastIsError) {
        return (
            <h1>Error</h1>
        );
    }

    return (
        <>
            {forecastData?.length && forecastData.map((item) => (
                <ForecastCard key={item.date} {...item} />
            ))}
        </>
    );
});
