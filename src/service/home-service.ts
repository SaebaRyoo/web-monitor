export default class HomeService {
  static hello() {
    return new Promise(resolve => resolve('hello world'));
  }
}
