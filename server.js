require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./routes");
const config = require("./config");
const db = require("./db");

const app = express();
const port = process.env.PORT || config.port;

// add middlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// add routing
app.use("/api", routes);

db.connect()
  .then(function() {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(function(error) {
    logger.error(error);
  });
