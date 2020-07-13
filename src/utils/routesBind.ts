
import * as Router from "koa-router";
import * as Koa from 'koa';
import { PATH } from './constants';

import HomeController from '@src/controller/home-controller';

const controllers = [HomeController];
 export function bindRoutes(koaRouter: Router) {
  for(const ctrl of controllers) {
    const pathMeta = Reflect.getMetadata(PATH, ctrl.prototype) || [];
    const instance = new ctrl();

    for(const item of pathMeta) {
      const { path, verb, name } = item;
      koaRouter[verb](path, (ctx: Koa.Context) => {
        instance[name](ctx);
      });
    }
  }
 }