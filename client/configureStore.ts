import { fork } from 'redux-saga/effects';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import createReduxPromiseListener from 'redux-promise-listener';
import createRootReducer, { ApplicationState } from './store';

import routerSaga from './store/router/sagas';
import tweetsSaga from './store/tweets/sagas';

const reduxPromiseListener = createReduxPromiseListener();
export const promiseListener = reduxPromiseListener;

export default function configureStore(
    history: History,
    initialState: ApplicationState,
): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools({});
    // create the redux-saga middlewares
    const sagaMiddleware = createSagaMiddleware();

    // We'll create our store with the combined reducers/sagas, and the initial Redux state that
    // we'll be passing from our entry point.
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, reduxPromiseListener.middleware)),
    );

    function* rootSaga() {
        yield fork(routerSaga);
        yield fork(tweetsSaga);
    }

    sagaMiddleware.run(rootSaga);

    // store.dispatch(init());

    return store;
}