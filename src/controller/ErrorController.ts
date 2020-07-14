import ErrorService from '@src/service/ErrorService';
import { GET } from '@src/utils/decorator';


export default class HomeController {

  @GET('/error')
  async hello(ctx) {
    ctx.body = await ErrorService.hello(ctx.query.errorInfo);
  }
}
