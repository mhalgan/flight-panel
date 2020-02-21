const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const routes = require("./routes");
const config = require("./config");

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
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
