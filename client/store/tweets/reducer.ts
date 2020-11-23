import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

export interface Tweet {
    text: string;
}

export interface TweetsStateType {
    tweets: Tweet[];
}

export const tweetsInitialState: TweetsStateType = {
    tweets: [],
};

export const tweetsReducer = createReducer<Readonly<TweetsStateType>, ActionType<typeof actions>>(tweetsInitialState)
    .handleAction(actions.getTweets.success, (state, action) => ({ ...state, tweets: [...action.payload] }))