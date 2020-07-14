import { ErrorEntity } from './../entity/ErrorEntity';
import { getManager } from "typeorm";

export default class ErrorService {
  static async hello(data) {
    const errorRepo = getManager().getRepository(ErrorEntity);
    const eData = JSON.parse(data);
    
    let errorEntity = new ErrorEntity();
    
    errorEntity.happenTime = String(eData.happenTime);
    errorEntity.pathname = eData.pathname;
    errorEntity.customerKey = eData.customerKey;
    errorEntity.pageKey = eData.pageKey;
    errorEntity.deviceName = eData.deviceName;
    errorEntity.os = eData.os;
    errorEntity.browserName = eData.browserName;
    errorEntity.browserVersion = eData.browserVersion;
    errorEntity.monitorIp = eData.monitorIp;  // 用户的IP地址
    errorEntity.country = eData.country;  // 用户所在国家
    errorEntity.province = eData.province;  // 用户所在省份
    errorEntity.city = eData.city;  // 用户所在城市
    // 用户自定义信息， 由开发者主动传入， 便于对线上进行准确定位
    errorEntity.userId = eData.userId;
    errorEntity.firstUserParam = eData.firstUserParam;
    errorEntity.secondUserParam = eData.secondUserParam;
    errorEntity.message = eData.message;
    errorEntity.filename = eData.filename;
    errorEntity.lineno = String(eData.lineno);
    errorEntity.colno = String(eData.colno);
    // errorEntity.error = eData.error;
    const errors = await errorRepo.save(errorEntity);
    return errors;
  }
}
