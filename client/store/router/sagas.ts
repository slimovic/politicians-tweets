import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { LocationChangeAction } from 'connected-react-router';
import { getType } from 'typesafe-actions';
import * as queryString from 'query-string';

import { goToDashboardPolitician, goToDefaultPolitician as goToDefaultPoliticianAction } from './actions';
import { ApplicationState } from '../index';

export const getState = (state: ApplicationState) => state;

function* goToDefaultPolitician() {
    yield put(goToDashboardPolitician('trump'));
}

function* handleDashboardWithDefaultPolitician(action: LocationChangeAction) {
    const { politician } = queryString.parse(action.payload.location.search);
    console.log(action)
    if (politician) {
        console.log(politician);
        // console.log('working');
    } else {
        console.log('working2');
        // yield goToDefaultPolitician();
    }
}

export function* locationChange(action: LocationChangeAction) {
    const path = action.payload.location.pathname;
    if (path === '/') {
        yield goToDefaultPolitician();
    } else if (path === '/dashboard') {
        yield handleDashboardWithDefaultPolitician(action);
    }
}

function* watchLocationChange() {
    yield takeEvery('@@router/LOCATION_CHANGE', locationChange);
}

function* watchGoToDefaultPolitician() {
    yield takeEvery(getType(goToDefaultPoliticianAction), goToDefaultPolitician);
}

function* routerSaga() {
    yield all([fork(watchLocationChange), fork(watchGoToDefaultPolitician)]);
}

export default routerSaga;
