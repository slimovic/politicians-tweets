import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { Tweet } from '../../data/tweets';

export const init = createStandardAction('@@tweets/INIT')();

export const getTweets = createAsyncAction(
    '@@tweets/GET-TWEETS-REQUEST',
    '@@tweets/GET-TWEETS-SUCCESS',
    '@@tweets/GET-TWEETS-FAILED'
)<string, Tweet[], Error>();
