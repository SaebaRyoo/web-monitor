## 项目结构

```
.
├── src
│   ├── controller      // controller层
│   ├── service         // service层
│   ├── utils           // 工具
│   └── index.ts        // 项目入口index.js
├── ecosystem.config.js // pm2配置
├── nodemon.json        // nodemon配置
├── package.json
└── tsconfig.json
```

## 使用
- yarn 或者 npm i
- yarn start 或 npm start
- 在浏览器中开打`localhost:3000`

### 打包
- yarn build 或 npm run build

### 生产环境启动
- 生产环境使用 pm2 启动 可以达到负载均衡 执行：yarn pro 或 npm run pro （生产环境端口默认：8080）

### 目标
1. 记录下用户的每个行为。访问页面的截图、点击按钮的局部截图
2. 对资源图片进行压缩
3. 每个用户都在随机的页面，随机的时间上传一个页面截图，以及一个点击区域截图，有且仅上传一次，一个用户的生命周期中只贡献一次页面截图
4. 每个用户发生某一类错误时，也只需上传一个截图即可，多个类型的错误，则上传多个截图。这样可以大量节省用户的上传次数。
5. 用户的截图数据很大， 时间长了需要很大的硬盘空间， 所以我的建议是，每个流程页面，只需要对应一个（点击区域截图，同理）。 每个用户的某一种类型的错误页面也只对应一个（方便定位错误原因）