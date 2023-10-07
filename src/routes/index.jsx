import { routesMainLayout } from './routes';
import { PageWrapper } from '~/Layout';
import { Route } from 'react-router-dom';

const generateRoute = (routes) => {
    return routes.map((route, index) =>
        route.index ? (
            <Route
                index
                path={route.path}
                element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
                key={index}
            />
        ) : (
            <Route path={route.path} element={<PageWrapper>{route.element}</PageWrapper>} key={index}>
                {route.child && generateRoute(route.child)}
            </Route>
        ),
    );
};

export const routesPage = generateRoute(routesMainLayout);
