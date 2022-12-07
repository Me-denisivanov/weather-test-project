import * as reduxHooks from 'react-redux';
import { componentRender } from '../../shared/tests/ComponentRender/ComponentRender';
import { WeatherList } from './WeatherList';

const initialState = {
    main: {
        temp: 10,
    },
    name: 'Kyiv',
};

jest.mock('react-redux');

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('WeatherList', () => {
    test('should create WeatherList with empty state', async () => {
        mockedUseSelector.mockReturnValue([]);
        const component = componentRender(<WeatherList />);
        expect(component).toMatchSnapshot();
    });

    test('with items', async () => {
        mockedUseSelector.mockReturnValue(initialState);
        const component = componentRender(<WeatherList />);
        expect(component).toMatchSnapshot();
    });
});
