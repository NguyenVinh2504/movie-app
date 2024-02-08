import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from 'react-redux';
import { persistor, store } from '~/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConfirmProvider } from 'material-ui-confirm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 6, // 6p
            staleTime: 1000 * 60 * 5, // 5p
            retry: 1
        },
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient} >
                    <ThemeProvider theme={theme}>
                        <ConfirmProvider
                            defaultOptions={{
                                allowClose: false,
                                confirmationButtonProps: { color: 'secondary', variant: 'contained' },
                                cancellationButtonProps: { color: 'secondary', variant: 'contained' },
                                confirmationText: 'Xác nhận',
                                cancellationText: 'Hủy',
                            }}
                        >
                            <CssBaseline>
                                <App />
                                <ReactQueryDevtools initialIsOpen={false} position='bottom' />
                                <ToastContainer
                                    position="bottom-left"
                                    autoClose={3000}
                                    hideProgressBar={true}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss={false}
                                    draggable
                                    style={{ fontSize: '16px' }}
                                    pauseOnHover
                                    theme="dark"
                                />
                            </CssBaseline>
                        </ConfirmProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
    /* </React.StrictMode>, */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
