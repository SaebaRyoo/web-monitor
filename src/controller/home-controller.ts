import HomeService from '@src/service/home-service';
import { GET } from '@src/utils/decorator';


export default class HomeController {

  @GET('/')
  async hello(ctx) {
    ctx.body = await HomeService.hello();
  }
}
