import { ErrorEvent } from './../entity/ErrorEvent';
import { ErrorEntity } from './../entity/ErrorEntity';
import { getManager } from "typeorm";

export default class ErrorService {
  static async saveError(data, events) {
    const errorRepo = getManager().getRepository(ErrorEntity);
    
    let errorEntity = new ErrorEntity();
    
    errorEntity.happenTime = String(data.happenTime);
    errorEntity.pathname = data.pathname;
    errorEntity.customerKey = data.customerKey;
    errorEntity.pageKey = data.pageKey;
    errorEntity.deviceName = data.deviceName;
    errorEntity.os = data.os;
    errorEntity.browserName = data.browserName;
    errorEntity.browserVersion = data.browserVersion;
    errorEntity.monitorIp = data.monitorIp;  // 用户的IP地址
    errorEntity.country = data.country;  // 用户所在国家
    errorEntity.province = data.province;  // 用户所在省份
    errorEntity.city = data.city;  // 用户所在城市
    // 用户自定义信息， 由开发者主动传入， 便于对线上进行准确定位
    errorEntity.userId = data.userId;
    errorEntity.firstUserParam = data.firstUserParam;
    errorEntity.secondUserParam = data.secondUserParam;
    errorEntity.message = data.message;
    errorEntity.filename = data.filename;
    errorEntity.lineno = data.lineno;
    errorEntity.colno = data.colno;

    const errorEvent = getManager().getRepository(ErrorEvent);
    events.forEach( async (item) => {
      let event = new ErrorEvent();
      event.type = item.type;
      event.data = JSON.stringify(item.data);
      event.timestamp = JSON.stringify(item.timestamp);
      await errorEvent.save(event);
    });
    const errors = await errorRepo.save(errorEntity);
    return errors;
  }

  static async getError() {
    const errorRepository = getManager().getRepository(ErrorEntity);
    return errorRepository.find();
  }
}
