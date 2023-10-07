import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './Layout';
import { routesPage } from '~/routes';
import routes from './config/routes';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={routes.home} element={<MainLayout />}>
                        {routesPage}
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
