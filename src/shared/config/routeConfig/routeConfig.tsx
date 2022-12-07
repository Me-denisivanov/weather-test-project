import { RouteProps } from 'react-router-dom';
import { DetailsPage } from '../../../pages/DetailsPage';
import { MainPage } from '../../../pages/MainPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    DETAILS_PAGE = 'details',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DETAILS_PAGE]: '/details/',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.DETAILS_PAGE]: {
        path: `${RoutePath.details}:id`,
        element: <DetailsPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
