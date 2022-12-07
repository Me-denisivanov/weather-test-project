import { Container } from '@mui/system';
import { memo } from 'react';
import { WeatherList } from '../../../components/WeatherList/WeatherList';

const MainPage = () => (
    <Container>
        <WeatherList />
    </Container>
);

export default memo(MainPage);
