module.exports = ({ env }) => {
  return {
    // ...
    email: {
      config: {
        provider: env("EMAIL_PROVIDER"),
        providerOptions: {
          host: env("EMAIL_SMTP_HOST"), //SMTP Host
          port: env("EMAIL_SMTP_PORT"), //SMTP Port
          secure: true,
          username: env("EMAIL_SMTP_USER"),
          password: env("EMAIL_SMTP_PASS"),
          rejectUnauthorized: true,
          requireTLS: true,
          connectionTimeout: 1,
        },
        settings: {
          defaultFrom: env("EMAIL_ADDRESS_FROM"),
          defaultReplyTo: env("EMAIL_ADDRESS_REPLY"),
        },
      },
    },
    // ...
  };
};
