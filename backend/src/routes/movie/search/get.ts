import { Middleware } from 'koa'

export const searchMovie: Middleware = (ctx, next) => {
  console.log(ctx);
  ctx.body = 'hello world';
}