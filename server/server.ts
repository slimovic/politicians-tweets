import express from 'express'
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as path from 'path';
import { getTweets, Tweet } from './tweets';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use('/dashboard', express.static(path.join(__dirname, '../client/dist/')));

app.get('/api/tweets/:politician', async (req: any, res: any) => {
    const politician = req?.params?.politician;
    const tweets: Tweet[] = await getTweets(politician);
    res.send(tweets);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
