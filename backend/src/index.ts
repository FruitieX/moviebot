import 'reflect-metadata';
import * as Koa from 'koa';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { router } from './routes';

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

createConnection()
  .then(async connection => {
    /*
    console.log('Inserting a new user into the database...');
    const user = new User();
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
    */
  })
  .catch(error => console.log(error));

app.listen(3000);
