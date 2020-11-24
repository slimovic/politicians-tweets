This app shows the latest tweets of Donald Trump and Hilary Clinton, a button is available to navigate between the two views.

## DEMO
Check this [demo](https://politicians-tweets.herokuapp.com)

## INSTALLATION
Install the dependencies: `npm i`

Build: `npm build`

Before running, you need to set those environment variables (You can get them after creating a developer account)
- `TWITTER_API_KEY`
- `TWITTER_API_SECRET_KEY`
- `TWITTER_TOKEN_KEY`
- `TWITTER_TOKEN_SECRET`

Run: `npm run`

Go to: http://localhost:3000

## TODO
- Add real time update for the tweets:
    1. Using the [stream api](https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream) with socket.io
    2. Add a pulling mechanism to refresh the data after x seconds

- Add tests