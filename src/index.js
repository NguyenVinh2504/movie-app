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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
    </Provider>,
    /* </React.StrictMode>, */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
