import { Middleware } from 'koa'
import * as omdb from '../../../services/omdb';

export const searchMovie: Middleware = async (ctx, next) => {
  const { query } = ctx.request.query;

  const result = await omdb.search(query);

  ctx.body = { result };
}