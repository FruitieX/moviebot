import { Middleware } from 'koa'

export const getRoom: Middleware = (ctx, next) => {
  console.log(ctx);
  ctx.body = 'hello world';
}
