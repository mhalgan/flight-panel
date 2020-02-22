const mongoose = require("mongoose");
const seeder = require("mongoose-seed");

const flightDetailsModel = require("./models/flight-details/flight-details.model");
const flightDetailsData = require("./models/flight-details/flight-details.data");

const config = require("./config");

const { db } = config;

const getConnectionString = () => {
  const host = process.env.MONGO_HOST || db.host;
  const port = process.env.MONGO_PORT || db.port;
  return `mongodb://${host}:${port}/${db.collection}`;
};

const connect = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(getConnectionString(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
      .then(() => {
        console.log("MongoDB connected!");
        checkEmpty()
          .then(() => {
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

const checkEmpty = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let flightDetailsList = await flightDetailsModel.find({});
      if (flightDetailsList.length == 0) {
        console.log("Seeding flight-details data");

        await seed("models/flight-details.model.js", flightDetailsData).catch(
          error => {
            reject(error);
          }
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const seed = (model, data) => {
  return new Promise((resolve, reject) => {
    seeder.connect(getConnectionString(), function() {
      seeder.loadModels([model]);
      seeder.populateModels(data, function() {
        resolve();
      });
    });
  });
};

module.exports = {
  getConnectionString,
  connect,
  checkEmpty
};
