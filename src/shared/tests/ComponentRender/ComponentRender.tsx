import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore, RootState } from '../../../store';

export function componentRender(component: ReactNode, initialState?: RootState) {
    const store = createReduxStore(initialState);

    return render(
        <Provider store={store}>
            {component}
        </Provider>,
    );
}
