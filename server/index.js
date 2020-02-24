require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");

const errorHandler = require("./middlewares/error-handler.middle");
const routes = require("./routes");
const config = require("./config");
const db = require("./db");

const app = express();
const port = process.env.PORT || config.port;

// add middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// add routing
app.use("/api", routes);

// use the Express server to serve the frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });

  console.log("Serving React App");
}

// add the error handler after the routes
app.use(errorHandler);

db.connect()
  .then(() => {
    app.listen(port, error => {
      if (error) {
        console.log(error);
        return 1;
      }
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
