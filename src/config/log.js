
!function(e, t) {
  "object" == typeof exports &&
  "undefined" != typeof module ? module.exports = t() : "function" == typeof define &&
  define.amd ? define(t) : e.monitor = t()
}(this, function() {
  var WEB_MONITOR_ID = 1;
  // 设置日志对象类的通用属性
  function CommonProperty() {
    this.happenTime = +new Date(); // 日志发生时间
    // this.webMonitorId = WEB_MONITOR_ID;     // 用于区分应用的唯一标识（一个项目对应一个）
    this.pathname =  window.location.pathname; // 页面的url
    this.customerKey = 'utils.getCustomerKey()'; // 用于区分用户，所对应唯一的标识，清理本地数据后失效
    this.pageKey = 'utils.getPageKey();'  // 用于区分页面，所对应唯一的标识，每个新页面对应一个值
    this.deviceName = 'DEVICE_INFO.deviceName';
    this.os = 'DEVICE_INFO.os + (DEVICE_INFO.osVersion ? " " + DEVICE_INFO.osVersion : "")';
    this.browserName = 'DEVICE_INFO.browserName';
    this.browserVersion = 'DEVICE_INFO.browserVersion';
    // TODO 位置信息, 待处理
    this.monitorIp = "";  // 用户的IP地址
    this.country = "china";  // 用户所在国家
    this.province = "";  // 用户所在省份
    this.city = "";  // 用户所在城市
    // 用户自定义信息， 由开发者主动传入， 便于对线上进行准确定位
    this.userId = 'USER_INFO.userId';
    this.firstUserParam = 'USER_INFO.firstUserParam';
    this.secondUserParam = 'USER_INFO.secondUserParam';
  }

  var info = new CommonProperty();

  function configure(conf) {
    for( var k in conf) {
      info[k] = conf[k];
    }
  }

  window.addEventListener('error', function(e) {
    info.message = e.message;
    info.filename = e.filename;
    info.lineno = e.lineno;
    info.colno = e.colno;
    fetch(`http://localhost:3000/api/error?errorInfo=${JSON.stringify(info)}`)
  })

  return {
    configure: configure
  }
})