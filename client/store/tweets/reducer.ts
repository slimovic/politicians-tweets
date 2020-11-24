import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { Tweet } from '../../data/tweets';

export const politicians = {
    TRUMP: { id: 'realDonaldTrump', label: 'Donald Trump' },
    HCLINTON: { id: 'HillaryClinton', label: 'Hillary Clinton' },
};

export interface TweetsStateType {
    tweets: Tweet[];
    politician: string;
}

export const tweetsInitialState: TweetsStateType = {
    tweets: [],
    politician: politicians?.TRUMP.id,
};

export const tweetsReducer = createReducer<
    Readonly<TweetsStateType>,
    ActionType<typeof actions>
>(tweetsInitialState)
    .handleAction(
        actions.getTweets.request,
        (state, action) => ({ ...state, politician: action.payload })
    )
    .handleAction(
    actions.getTweets.success,
    (state, action) => ({ ...state, tweets: [...action.payload] })
);
