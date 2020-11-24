import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { Tweet } from '../../data/tweets';
import { getTweets as getTweetsAction } from './actions';
import { init as initAction } from './actions';
import { getTweetsData } from '../../data/tweets';

export function* getTweets(action: any) {
    let tweets: Tweet[];
    try {
        tweets = yield call(getTweetsData, action?.payload);
        console.log(tweets);
        yield put(getTweetsAction.success(tweets));
    } catch (err) {
        yield put(getTweetsAction.failure(err));
    }
}

export function* init() {
    // yield getTweets({ payload: politicians?.TRUMP.id });
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
