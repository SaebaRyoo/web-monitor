import "reflect-metadata";
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import { createConnection } from "typeorm";
import { addAlias } from 'module-alias'
import { bindRoutes } from './utils/routesBind';

const app = new Koa();
const port = process.env.PORT || 3000;
const rootRouter = new Router({
  prefix: '/api'
});


createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "zqy19970114",
  database: "web-monitor",
  entities: [
    __dirname + "/entity/*.ts"
  ],
  synchronize: true,
  logging: false
})
.then(() => {})
.catch(error => console.log(error));

// 添加别名
addAlias({
 '@src': __dirname + 'src'
})

// 路由绑定
bindRoutes(rootRouter);

app.use(cors());
app.use(bodyParser());
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());
app.listen(port);

console.log(`应用启动成功 端口:${port}`);
