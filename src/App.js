import { useRoutes } from 'react-router-dom';
import { MainLayout } from './Layout';
// import { routesPage } from '~/routes';
// import routes from './config/routes';
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
            <MainLayout>
                {element}
            </MainLayout>
        </div>
    );
}

export default App;
