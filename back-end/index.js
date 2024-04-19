const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const moment = require("moment");
const applyRoutes = require("./routes");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = ["http://localhost:4000"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin: " +
          origin;
        console.log(msg);
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

applyRoutes("/api", app);

/*
if (process.env.NODE_ENV !== "development") {
  app.use(express.static(`${__dirname}/build`));

  app.get("/*", (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
  });
}
*/

// Optional fallthrough error handler
app.use(function onError(error, req, res, next) {
  const { response } = error;

  if (response) {
    const { data } = response;
    if (typeof data === "object" && data !== null) {
      if (data.error && data.error !== null) {
        error = { ...data.error };
      } else {
        error = { ...data };
      }
    }
  }
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the users for support.
  res.statusCode = 500;
  console.log(moment().utc().format("YYYY-MM-DD HH:mm:ss"));
  console.log(error);
  res.status(500).send(error);
});

app.listen(port, async () => {
  await sequelize.sync();
  console.log(`Tendencys Server running on port ${port}`);
});