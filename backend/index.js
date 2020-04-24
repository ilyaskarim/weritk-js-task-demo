let wertik = require("wertik-js").default;
let configuration = require("./configuration");

wertik({}, configuration).then((app) => {
  app.database.sync()
});
