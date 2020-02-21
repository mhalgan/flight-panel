const mongoose = require("mongoose");
const config = require("./config");

const { db } = config;

exports.connect = function() {
  return new Promise((resolve, reject) => {
    const host = process.env.MONGO_HOST || db.host;
    const port = process.env.MONGO_PORT || db.port;

    const connectString = `mongodb://${host}:${port}/${db.collection}`;
    mongoose
      .connect(connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
      .then(function() {
        console.log("MongoDB connected!");
        resolve();
      })
      .catch(function(error) {
        console.error(error);
        reject(error);
      });
  });
};
