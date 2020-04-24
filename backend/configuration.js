let { Task } = require("./modules");
module.exports = {
  name: "Wertik",
  builtinModules: "user",
  database: {
    dbDialect: "mysql",
    dbUsername: "root",
    dbPassword: "pass",
    dbName: "task",
    dbHost: "localhost",
    dbPort: "3306",
  },

  frontendAppUrl: "http://localhost:8080/",
  frontendAppActivationUrl: "http://localhost:8080/activate-account",
  frontendAppPasswordResetUrl: "http://localhost:8080/reset-password",
  context: {
    data: {
      myName: "My powerful app",
    },
    createContext: async function (mode, context) {
      return {
        value: "Value 1",
      };
    },
  },
  email: {
    disable: false,
  },
  graphql: {
    disable: false,
    port: 4000,
  },
  restApi: {
    disable: true,
    port: 7000,
  },
  forceStartGraphqlServer: true,
  forceStartRestApiServer: true,
  ports: {
    graphql: 4000,
    restApi: 7000,
  },
  modules: [Task],
  seeds: {},
  sockets: {
    disable: true,
  },
  security: {
    allowedIpAddresses: ["*"],
  },
  storage: {
    disable: true,
  },
  cron: {
    cronList: [],
  },
};
