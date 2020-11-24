import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { LocationChangeAction } from 'connected-react-router';
import { getType } from 'typesafe-actions';
import * as queryString from 'query-string';

import {
    goToPoliticianDashboard,
    goToDefaultPolitician as goToDefaultPoliticianAction,
} from './actions';

import { getTweets } from '../tweets/actions';
import { politicians } from '../tweets/reducer';

// export const getState = (state: ApplicationState) => state;

function* goToDefaultPolitician() {
    yield put(goToPoliticianDashboard(politicians?.TRUMP.id));
}

function* handleDashboardWithDefaultPolitician(action: LocationChangeAction) {
    const { politician } = queryString.parse(action.payload.location.search);
    if (politician) {
        yield put(getTweets.request(politician as string));
    }
}

export function* locationChange(action: LocationChangeAction) {
    const path = action.payload.location.pathname;
    if (path === '/') {
        yield goToDefaultPolitician();
    } else if (path.includes('/dashboard')) {
        yield handleDashboardWithDefaultPolitician(action);
    }
}

function* watchLocationChange() {
    yield takeEvery('@@router/LOCATION_CHANGE', locationChange);
}

function* watchGoToDefaultPolitician() {
    yield takeEvery(
        getType(goToDefaultPoliticianAction),
        goToDefaultPolitician
    );
}

function* routerSaga() {
    yield all([fork(watchLocationChange), fork(watchGoToDefaultPolitician)]);
}

export default routerSaga;
