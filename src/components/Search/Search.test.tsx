import { fireEvent, screen } from '@testing-library/react';
import { Search } from './Search';
import { fetchWeatherData } from '../../store/asyncActions/fetchWeatherData/fetchWeatherData';
import { componentRender } from '../../shared/tests/ComponentRender/ComponentRender';

describe('Search component', () => {
    test('add city', async () => {
        const dispatch = jest.fn();
        await dispatch(fetchWeatherData('Kyiv'));
        expect(dispatch).toHaveBeenCalledTimes(1);
    });

    test('get name city', () => {
        componentRender(
            <Search />,
        );

        expect(screen.getByText('Enter any city in the search')).toBeInTheDocument();
    });

    test('check input value', () => {
        componentRender(
            <Search />,
        );
        const input = screen.getByLabelText(/Search/i);
        expect(screen.getByTestId('value-elem')).toContainHTML('');
        fireEvent.input(input, {
            target: { value: 'Kyiv' },
        });
        expect(screen.getByTestId('value-elem')).toContainHTML('Kyiv');
    });
});
