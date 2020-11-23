import * as React from 'react';
import { Tweet } from 'react-twitter-widgets';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: 'scroll',
        height: 'calc(100vh - 100px)',
        marginTop: 15,
    },
    switchButton: {
        position: 'fixed',
        right: 100,
    },
}));

const dashboard = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Button variant="contained" className={classes.switchButton} color="secondary">
                    blabla Tweets
                </Button>
                <Tweet
                    options={{ align: 'center' }}
                    tweetId="1330737141794676736"
                />
                <Tweet  options={{ align: 'center' }} tweetId="1330732289018503170" />
            </div>
        </>
    );
};

export default dashboard;
