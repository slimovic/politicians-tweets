import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import {
    tweetsInitialState,
    tweetsReducer,
    TweetsStateType,
} from './tweets/reducer';

export interface ApplicationState {
    tweets: TweetsStateType;
    router?: RouterState;
}

export const applicationInitialState: ApplicationState = {
    tweets: tweetsInitialState,
};

export default (history: History) =>
    combineReducers<ApplicationState>({
        tweets: tweetsReducer,
        router: connectRouter(history),
    });
