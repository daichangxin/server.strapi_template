const cronTasks = require("./cron-tasks");
const isMainCluster = parseInt(process.env.NODE_APP_INSTANCE, 10) === 0;
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  cron: {
    // 仅 main cluster 执行
    enabled: isMainCluster,
    tasks: cronTasks,
  },
});
