module.exports = function errorHandler(err, req, res, next) {
  if (err.name) {
    switch (err.name) {
      case "ValidationError":
        return res.status(422).json({ error: err.message });
      case "CastError":
        return res.status(404).json();
      case "MongoError":
        if (err.codeName == "DuplicateKey") {
          return res.status(409).json({ error: err.message });
        } else {
          console.error(err.message);
          return res.status(500).json();
        }
      default:
        console.error(err.message);
        return res.status(500).json();
    }
  } else {
    console.error(err.message);
    return res.status(500).json();
  }
};
