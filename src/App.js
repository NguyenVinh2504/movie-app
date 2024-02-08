import { useRoutes } from 'react-router-dom';
// import { routesPage } from '~/routes';
import { routesMainLayout } from './routes/routes';
function App() {
    const element = useRoutes(routesMainLayout)
    return (
        <div className="App">
            {/* <Routes>
                    <Route path={routes.home} element={<MainLayout />}>
                        {routesPage}
                    </Route>
                </Routes> */}
            {element}
        </div>
    );
}

export default App;
