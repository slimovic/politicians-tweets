import {
    all,
    fork,
    put,
    takeEvery,
} from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { Tweet } from './reducer';
import { getTweets as getTweetsAction } from './actions';
import { init as initAction } from './actions';

export function* getTweets() {
    let tweets: Tweet[];
    try {
        // tweets = yield call(dataRepo.tweets.all);
        yield put(getTweetsAction.success(tweets));
    } catch (err) {
        yield put(getTweetsAction.failure(err));
    }
}

export function* init() {
    yield getTweets();
}

function* watchInit() {
    yield takeEvery(getType(initAction), init);
}

function* watchGetTweets() {
    yield takeEvery(getType(getTweetsAction.request), getTweets);
}

function* tweetsSaga() {
    yield all([fork(watchInit), fork(watchGetTweets)]);
}

export default tweetsSaga;