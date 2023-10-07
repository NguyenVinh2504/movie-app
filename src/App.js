import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './Layout';
import { routes } from '~/routes';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        {routes}
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
