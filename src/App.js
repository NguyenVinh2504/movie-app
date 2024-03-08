// import { routesPage } from '~/routes';
import useRouteElements from './routes/routes';
function App() {
    const element = useRouteElements()
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
