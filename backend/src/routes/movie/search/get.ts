import * as t from 'io-ts';
import { decodeRequest } from 'io-ts-koa-middleware'

import * as omdb from '../../../services/omdb';

const ReqType = t.type({
  query: t.type({
    filter: t.string,
  }),
});

export const searchMovie = decodeRequest(ReqType)(async (ctx, next) => {
  const result = await omdb.search(ctx.decoded.query.filter);
  ctx.body = { result };
});
