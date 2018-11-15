import { Middleware } from 'koa'

export const sendVote: Middleware = (ctx, next) => {
  console.log(ctx);
  ctx.body = 'hello world';
}