import { METHODS, PATH } from "./constants";

export function Route(path: string, verb: METHODS) {
  return function(target, name, descriptor) {
    // https://jkchao.github.io/typescript-book-chinese/tips/metadata.html#%E5%9F%BA%E7%A1%80
    // 获取类的原型属性 target 上定义的key为PATH的元数据
    const meta = Reflect.getMetadata(PATH, target) || []
    meta.push({
      name,
      verb,
      path
    });
    // 在类的原型属性 'target' 上定义元数据，key 为 PATH，value 为 meta数组
    Reflect.defineMetadata(PATH, meta, target);
  }
}
export function ALL(path: string) {
  return Route(path, METHODS.ALL)
}

export function GET(path: string) {
  return Route(path, METHODS.GET)
}

export function POST(path: string) {
  return Route(path, METHODS.POST)
}

export function PUT(path: string) {
  return Route(path, METHODS.PUT)
}

export function DEL(path: string) {
  return Route(path, METHODS.DEL)
}

export function PATCH(path: string) {
  return Route(path, METHODS.PATCH)
}