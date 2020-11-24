import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tweet from 'react-tweet';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { politicians } from '../../store/tweets/reducer';
import { goToPoliticianDashboard} from '../../store/router/actions'
import { selectTweetsFromState } from '../../store/tweets/selectors';
import { getTweets } from '../../store/tweets/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: 'scroll',
        height: 'calc(100vh - 100px)',
        marginTop: 15,
    },
    switchButton: {
        position: 'fixed',
        right: 20,
    },
}));

const dashboard = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { tweets, politician } = useSelector(selectTweetsFromState);

    const handlePoliticianClick = React.useCallback(
        (event) => {
            const politicianToCheck =
                politician === politicians.TRUMP.id
                    ? politicians.HCLINTON.id
                    : politicians.TRUMP.id;
            // dispatch(getTweets.request(politicianToCheck));
            dispatch(goToPoliticianDashboard(politicianToCheck));
        },
        [tweets]
    );

    return (
        <>
            <div className={classes.root}>
                <Button
                    onClick={handlePoliticianClick}
                    variant="contained"
                    className={classes.switchButton}
                    color="secondary"
                >
                    {politician !== politicians.TRUMP.id
                        ? politicians.TRUMP.label
                        : politicians.HCLINTON.label}
                    {' '}Tweets
                </Button>
                {tweets.length > 0 &&
                    tweets?.map((tweet, index) => (
                        <Tweet
                            linkProps={{ align: 'center' }}
                            key={index}
                            data={tweet}
                        />
                    ))}
            </div>
        </>
    );
};

export default dashboard;
