import * as t from 'io-ts';
import { decodeRequest } from 'io-ts-koa-middleware'

import * as omdb from '../../services/omdb';

const ReqType = t.type({
  params: t.type({
    movieId: t.string,
  }),
});

export const getMovie = decodeRequest(ReqType)(async (ctx, next) => {
  try {
    ctx.body = { result: await omdb.get(ctx.decoded.params.movieId) };
  } catch(e) {
    ctx.body = { error: e.message };
  }
});
