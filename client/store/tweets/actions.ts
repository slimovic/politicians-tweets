import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { Tweet } from './reducer';

export const init = createStandardAction('@@tweets/INIT')();

export const getTweets = createAsyncAction(
    '@@tweets/GET-TWEETS-REQUEST',
    '@@tweets/GET-TWEETS-SUCCESS',
    '@@tweets/GET-TWEETS-FAILED'
)<null, Tweet[], Error>();
