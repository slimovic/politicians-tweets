import * as express from 'express';
import * as util from 'util';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const request = require('request');
const post = util.promisify(request.post);
const get = util.promisify(request.get);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);
// const socketIo = require('socket.io');
// const io = socketIo(server);

// const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use('/dashboard', express.static(path.join(__dirname, '../client/dist/')));


server.listen(port, () => console.log(`Listening on port ${port}`));
