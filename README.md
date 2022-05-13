# strapi 模板项目

## 本地开发

```
npm run develop
```

## 无 docker 部署

```
npm run deploy
```

## docker-compose 部署

```
npm run restart
```

注意 docker-compose 的--env-file 命令行参数需要版本 1.25.0 及以上。如果低于这个版本运行 docker-compose 可以使用：

```
env $(cat .env.prod) docker-compose up -d --build
```

## 功能

- 内置 email 插件，在 env 中配置参数即可使用
- 生产默认 mysql 数据库，在 env 中配置参数即可
- pm2 进程管理，docker-compose 编排服务
- mysql 备份和恢复脚本
- 定时任务

## strapi 教程文档

https://docs.pawgame.com/docs/backend/strapi/strapi-intro
