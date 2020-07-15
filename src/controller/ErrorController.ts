import ErrorService from '@src/service/ErrorService';
import { POST, GET } from '@src/utils/decorator';


export default class ErrorController {

  @POST('/error')
  async saveError(ctx) {
    const data = JSON.parse(ctx.query.errorInfo);
    const { events } = ctx.request.body;
    const res = await ErrorService.saveError(data, events);
    ctx.body = {
      code: '200',
      msg: '',
      data: res
    }
  }

  @GET('/error/list')
  async getError(ctx) {
    
    const data = await ErrorService.getError();
    ctx.body = {
      code: '200',
      msg: '',
      data: data
    }
  }

}
