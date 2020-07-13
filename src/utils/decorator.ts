import { METHODS, PATH } from "./constants";

export function Route(path: string, verb: METHODS) {
  return function(target, name, descriptor) {
    // https://jkchao.github.io/typescript-book-chinese/tips/metadata.html#%E5%9F%BA%E7%A1%80
    const meta = Reflect.getMetadata(PATH, target) || []
    meta.push({
      name,
      verb,
      path
    });
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