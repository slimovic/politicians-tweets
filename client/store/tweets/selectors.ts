import { ApplicationState } from '..';

export const selectTweetsFromState = (state: ApplicationState) => state.tweets;
