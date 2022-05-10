module.exports = {
  test: {
    task: ({ strapi }) => {
      console.log("test crons...", new Date().getTime());
    },
    options: {
      // At minute 15 past every 4th hour from 0 through 23.
      rule: "15 0-23/4 * * *",
      tz: "Asia/Shanghai",
    },
  },
};
