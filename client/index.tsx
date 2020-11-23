import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { StoreContext } from 'redux-react-hook';
import { SnackbarProvider } from 'notistack';

import App from './components/App';
import { theme } from './config/themes';
import configureStore from './configureStore';

const history = createBrowserHistory();
const initialState = (window as any).initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
    <Provider store={store}>
        <StoreContext.Provider value={store}>
            <MuiThemeProvider theme={theme}>
                <ConnectedRouter history={history}>
                    <React.Suspense fallback={<div>add loading component</div>}>
                        <SnackbarProvider maxSnack={3}>
                            <App />
                        </SnackbarProvider>
                    </React.Suspense>
                </ConnectedRouter>
            </MuiThemeProvider>
        </StoreContext.Provider>
    </Provider>,
    document.getElementById('root')
);
