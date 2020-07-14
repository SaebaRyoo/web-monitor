
import * as Router from "koa-router";
import * as Koa from 'koa';
import { PATH } from './constants';

import ErrorController from '@src/controller/ErrorController';

const controllers = [ErrorController];

export function bindRoutes(koaRouter: Router) {
  for(const ctrl of controllers) {
    // 获取 ctrl 的原型属性 ctrl.prototype 上定义的key为PATH的元数据
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