const Twitter = require('twitter');

export interface Tweet {
    id: string;
    text?: string;
}

const twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY || '',
    consumer_secret: process.env.TWITTER_API_SECRET_KEY || '',
    access_token_key: process.env.TWITTER_TOKEN_KEY || '',
    access_token_secret: process.env.TWITTER_TOKEN_SECRET || '',
});

export const getTweets = async (politician: string): Promise<Tweet[]> => {
    try {
        const params = {
            screen_name: politician,
            count: (process.env.TWITTER_COUNT || 15) ,
        };
        return twitterClient.get('statuses/user_timeline', params);
    } catch (err) {
        console.log(err);
    }
};
