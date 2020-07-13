import "reflect-metadata";
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import { addAlias } from 'module-alias'
// import AppRoutes from './routes';
import { bindRoutes } from './utils/routesBind';

const app = new Koa();
const port = process.env.PORT || 3000;
const rootRouter = new Router({
  prefix: '/api'
});

// 添加别名
addAlias({
 '@src': __dirname + 'src'
})

// 路由绑定
bindRoutes(rootRouter);

app.use(bodyParser());
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());
app.listen(port);

console.log(`应用启动成功 端口:${port}`);
