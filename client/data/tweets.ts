import axios from 'axios';
import urlJoin from 'url-join';

export interface Tweet {
    id: string;
    text?: string;
}

export const getTweetsData = async (politician: string): Promise<Tweet[]> => {
    try {
        const url = urlJoin(
            'http://localhost:3000',
            'api',
            'tweets',
            politician
        );
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        console.log(err);
    }
};
