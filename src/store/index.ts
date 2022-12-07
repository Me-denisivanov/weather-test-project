import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { weatherReducer } from './slices/weatherSlice/weatherSlice';
import { forecastReducer } from './slices/forecastSlice/forecastSlice';
import { $api } from '../shared/api/api';

const rootReducer = combineReducers({
    weather: weatherReducer,
    forecast: forecastReducer,
});

export function createReduxStore(initialState = {}) {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });
}

const store = createReduxStore();

export default store;

export interface ThunkExtraArg {
    api: AxiosInstance
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
