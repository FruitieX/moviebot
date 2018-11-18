import * as Router from 'koa-router';
import { getMovie } from './movie/get';
import { searchMovie } from './movie/search/get';
import { sendVote } from './room/vote/post';
import { getRoom } from './room/get';

export const router = new Router();

router.get('/movie/search', searchMovie);
router.get('/movie/:movieId', getMovie);
router.get('/room/:roomId', getRoom);
router.post('/room/:roomId/vote', sendVote);
