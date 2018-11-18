import * as t from 'io-ts';
import { decodeRequest } from 'io-ts-koa-middleware'

import * as omdb from '../../../services/omdb';

const ReqType = t.type({
  query: t.type({
    filter: t.string,
  }),
});

export const searchMovie = decodeRequest(ReqType)(async (ctx, next) => {
  try {
    ctx.body = { results: await omdb.search(ctx.decoded.query.filter) };
  } catch(e) {
    ctx.body = { error: e.message };
  }
});
